// src/lib/socket.ts
import { io, Socket } from 'socket.io-client';
import { create } from 'zustand';

// Socket singleton
let socket: Socket | null = null;

export const initializeSocket = () => {
  if (!socket) {
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3003';
    socket = io(socketUrl, {
      withCredentials: true,
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server with ID:', socket.id);
    });

    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });
  }

  return socket;
};

export const getSocket = () => {
  if (!socket) {
    return initializeSocket();
  }
  return socket;
};

export const closeSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};

// Define types for our interview state
interface User {
  userId: string;
  username: string;
  socketId: string;
}

interface Question {
  text: string;
  correctAnswer: string;
  timeLimit: number;
  difficulty: number;
  skills: string[];
  commonMistakes?: string[];
  maxScore: number;
}

interface InterviewState {
  isConnected: boolean;
  groupId: string | null;
  userId: string | null;
  username: string | null;
  isHost: boolean;
  questions: Question[];
  currentQuestionIndex: number;
  totalQuestions: number;
  timeRemaining: number;
  inProgress: boolean;
  isSubmitted: boolean;
  usersInRoom: User[];
  submittedUsers: Set<string>;
  currentAnswer: string;

  joinInterview: (groupId: string, userId: string, username: string) => void;
  startInterview: (questions: Question[]) => void;
  submitAnswer: (answer: string) => void;
  updateScore: (userId: string, score: number, name: string) => void;
  setCurrentAnswer: (answer: string) => void;
  nextQuestion: () => void;
  resetState: () => void;
}

// Zustand store for interview state
export const useInterviewStore = create<InterviewState>((set, get) => ({
  isConnected: false,
  groupId: null,
  userId: null,
  username: null,
  isHost: false,
  questions: [],
  currentQuestionIndex: 0,
  totalQuestions: 0,
  timeRemaining: 0,
  inProgress: false,
  isSubmitted: false,
  usersInRoom: [],
  submittedUsers: new Set(),
  currentAnswer: '',

  joinInterview: (groupId, userId, username) => {
    const socket = getSocket();
    socket.emit('join-interview', { groupId, userId, username });

    set({
      groupId,
      userId,
      username,
      isHost: localStorage.getItem(`group_${groupId}_host`) === userId
    });

    _setupSocketListeners();
  },

  startInterview: (questions) => {
    const { groupId } = get();
    if (!groupId) return;

    const socket = getSocket();
    socket.emit('start-interview', { groupId, questions });
  },

  submitAnswer: (answer) => {
    const { groupId, userId, currentQuestionIndex } = get();
    if (!groupId || !userId) return;

    const socket = getSocket();
    socket.emit('submit-answer', {
      groupId,
      userId,
      questionIndex: currentQuestionIndex,
      answer
    });

    set({ isSubmitted: true });
  },

  updateScore: (userId, score, name) => {
    const { groupId } = get();
    if (!groupId) return;

    const socket = getSocket();
    socket.emit('update-score', { groupId, userId, score, name });
  },

  setCurrentAnswer: (answer) => {
    set({ currentAnswer: answer });
    console.log("Store updated with new answer:", answer);
  },

  nextQuestion: () => {
    const { groupId, isHost } = get();
    if (!groupId || !isHost) return;

    const socket = getSocket();
    socket.emit('next-question', { groupId });
  },

  resetState: () => {
    set({
      questions: [],
      currentQuestionIndex: 0,
      totalQuestions: 0,
      timeRemaining: 0,
      inProgress: false,
      isSubmitted: false,
      submittedUsers: new Set(),
      currentAnswer: '',
    });
  }
}));

// Set up socket listeners
function _setupSocketListeners() {
  const socket = getSocket();

  if (!socket) return;

  if ((socket as any)._listenersSet) return; // Prevent multiple bindings
  (socket as any)._listenersSet = true;

  socket.on('connect', () => {
    useInterviewStore.setState({ isConnected: true });
  });

  socket.on('disconnect', () => {
    useInterviewStore.setState({ isConnected: false });
  });

  socket.on('user-joined', (user: User) => {
    useInterviewStore.setState(state => ({
      usersInRoom: [...state.usersInRoom, user]
    }));
  });

  socket.on('user-left', ({ socketId }) => {
    useInterviewStore.setState(state => ({
      usersInRoom: state.usersInRoom.filter(u => u.socketId !== socketId)
    }));
  });

  socket.on('room-users', (users: User[]) => {
    useInterviewStore.setState({ usersInRoom: users });
  });

  socket.on('question-started', ({ questionIndex, timeLimit, totalQuestions }) => {
    useInterviewStore.setState({
      currentQuestionIndex: questionIndex,
      totalQuestions,
      timeRemaining: timeLimit,
      inProgress: true,
      isSubmitted: false,
      submittedUsers: new Set(),
      currentAnswer: '',
    });

    _startTimer(timeLimit);
  });

  socket.on('time-up', () => {
    const state = useInterviewStore.getState();
    if (!state.isSubmitted) {
      state.submitAnswer(state.currentAnswer);
    }
  });

  socket.on('user-submitted', ({ userId }) => {
    useInterviewStore.setState(state => {
      const newSubmittedUsers = new Set(state.submittedUsers);
      newSubmittedUsers.add(userId);
      return { submittedUsers: newSubmittedUsers };
    });
  });

  socket.on('interview-ended', (results) => {
    useInterviewStore.setState({
      inProgress: false,
    });

    console.log('Interview ended, results:', results);
  });
}

// Timer function
let timer: NodeJS.Timeout | null = null;
function _startTimer(timeLimit: number) {
  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    useInterviewStore.setState(state => {
      if (state.timeRemaining <= 0) {
        if (timer) clearInterval(timer);
        return state;
      }
      return { timeRemaining: state.timeRemaining - 1 };
    });
  }, 1000);
}
