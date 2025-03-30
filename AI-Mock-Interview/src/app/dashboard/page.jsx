"use client"
import Link from "next/link"
import { useState } from "react"
import AddMockInterview from './_components/AddMockInterview'
import Footer from './_components/Footer'
import AllInterviews from './_components/allInterviews'

function page() {
  const [state, setState] = useState(false)
  const [showInterviews, setShowInterviews] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleViewInterviews = () => {
    setIsLoading(true)
    setShowInterviews(true)
    // Simulate loading time - you can remove this setTimeout if you have actual loading logic
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className='min-h-screen flex flex-col relative'>
      <div className='flex flex-col md:flex-row flex-1'>
        {/* Dashboard Side */}
        <div
          className='w-full md:w-1/2 min-h-screen relative'
          style={{
            backgroundColor: "#232a34",
            color: "#01a1e8",
            backgroundImage: "url('./Dashboard.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-60'></div>
          <div className='relative z-10 p-10 flex flex-col h-full'>
            <div className='text-center mb-10 mt-10'>
              <h2 className='font-bold text-4xl mb-4'>Dashboard</h2>
              <h1 className='text-gray-400 text-xl'>Create and Start your AI Mock Interview</h1>
              <p className='mt-4 max-w-xl mx-auto text-gray-300'>
                Prepare for your next job interview with our AI-powered mock interviews.
                Practice responding to common interview questions and receive instant feedback.
              </p>
            </div>

            {/* Add Mock Interview Component */}
            <div className='max-w-md mx-auto w-full'>
              <AddMockInterview buttonSize="small" />

              <div className='mt-4 flex justify-center gap-2'>
                <button
                  onClick={handleViewInterviews}
                  className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transform transition duration-300 hover:scale-105 shadow-lg'
                >
                  View All Interviews
                </button>
        <button
        className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transform transition duration-300 hover:scale-105 shadow-lg"
        onClick={()=> window.location.href="/hr-interview/form"}
        >
          Add New HR Round
        </button>
              </div>
            </div>
          </div>
        </div>

        {/* Battle Royale Side */}
        <div
          className='w-full md:w-1/2 min-h-screen relative'
          style={{
            backgroundImage: "url('./img2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>

          {/* Battle Royale Content */}
          <div className='relative z-10 p-10 flex flex-col h-full'>
            <div className='text-center mb-10 mt-10'>
              <h2 className='font-bold text-4xl mb-4 text-white'>Battle Royale</h2>
              <p className='text-gray-200 text-xl mb-8 text-center max-w-xl mx-auto'>
                Compete in AI-powered interview battles with friends, featuring role-specific questions, instant feedback, and leaderboards. Enhance your skills through real-time challenges and AI-driven insights in a fun, competitive environment
              </p>

              <div className='flex justify-center'>
                <Link href="/interview-groups/create">
                  <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transform transition duration-300 hover:scale-105 shadow-lg'>
                    Start Battle
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for All Interviews */}
      {showInterviews && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div
            className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'
            onClick={() => setShowInterviews(false)}
          ></div>
          <div className='relative bg-black bg-opacity-70 p-8 rounded-xl w-11/12 md:w-4/5 lg:w-3/4 max-h-[80vh] overflow-auto backdrop-filter backdrop-blur-md border border-gray-700 shadow-2xl'>
            <button
              onClick={() => setShowInterviews(false)}
              className='absolute top-4 right-4 text-gray-300 hover:text-white text-2xl'
            >
              ×
            </button>
            <h2 className='text-3xl font-bold text-white mb-6'>All Interviews</h2>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                <p className="ml-4 text-white text-lg">Loading interviews...</p>
              </div>
            ) : (
              <AllInterviews />
            )}
          </div>
        </div>
      )}

      <Footer className='relative z-10' />
    </div>
  );
}

export default page
