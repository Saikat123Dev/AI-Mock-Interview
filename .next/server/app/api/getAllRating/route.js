/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/getAllRating/route";
exports.ids = ["app/api/getAllRating/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetAllRating%2Froute&page=%2Fapi%2FgetAllRating%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetAllRating%2Froute.ts&appDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetAllRating%2Froute&page=%2Fapi%2FgetAllRating%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetAllRating%2Froute.ts&appDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shahi_Desktop_AI_Interview_AI_Mock_Interview_src_app_api_getAllRating_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/getAllRating/route.ts */ \"(rsc)/./src/app/api/getAllRating/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getAllRating/route\",\n        pathname: \"/api/getAllRating\",\n        filename: \"route\",\n        bundlePath: \"app/api/getAllRating/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\shahi\\\\Desktop\\\\AI-Interview\\\\AI-Mock-Interview\\\\src\\\\app\\\\api\\\\getAllRating\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_shahi_Desktop_AI_Interview_AI_Mock_Interview_src_app_api_getAllRating_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRBbGxSYXRpbmclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldEFsbFJhdGluZyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldEFsbFJhdGluZyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaGFoaSU1Q0Rlc2t0b3AlNUNBSS1JbnRlcnZpZXclNUNBSS1Nb2NrLUludGVydmlldyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDc2hhaGklNUNEZXNrdG9wJTVDQUktSW50ZXJ2aWV3JTVDQUktTW9jay1JbnRlcnZpZXcmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lEO0FBQzlIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzaGFoaVxcXFxEZXNrdG9wXFxcXEFJLUludGVydmlld1xcXFxBSS1Nb2NrLUludGVydmlld1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxnZXRBbGxSYXRpbmdcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldEFsbFJhdGluZy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldEFsbFJhdGluZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0QWxsUmF0aW5nL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcc2hhaGlcXFxcRGVza3RvcFxcXFxBSS1JbnRlcnZpZXdcXFxcQUktTW9jay1JbnRlcnZpZXdcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZ2V0QWxsUmF0aW5nXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetAllRating%2Froute&page=%2Fapi%2FgetAllRating%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetAllRating%2Froute.ts&appDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/getAllRating/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/getAllRating/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\nasync function GET(req) {\n    const url = req.nextUrl;\n    const userId = url.searchParams.get(\"userId\");\n    console.log(\"userId:\", userId);\n    try {\n        if (!userId || typeof userId !== \"string\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid or missing userId\"\n            }, {\n                status: 400\n            });\n        }\n        const ratings = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.mockInterview.findMany({\n            where: {\n                userId: userId\n            },\n            select: {\n                jobPosition: true,\n                answers: true\n            }\n        });\n        // Filter out records with empty answers\n        const filteredRatings = ratings.filter((rating)=>{\n            // Check if answers array exists and is not empty\n            return rating.answers && Array.isArray(rating.answers) && rating.answers.length > 0;\n        });\n        console.log(\"Filtered ratings:\", filteredRatings);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ratings: filteredRatings\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRBbGxSYXRpbmcvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ25CO0FBRTlCLGVBQWVFLElBQUlDLEdBQWdCO0lBQ3hDLE1BQU1DLE1BQU1ELElBQUlFLE9BQU87SUFDdkIsTUFBTUMsU0FBU0YsSUFBSUcsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDcENDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSjtJQUV2QixJQUFJO1FBQ0YsSUFBSSxDQUFDQSxVQUFVLE9BQU9BLFdBQVcsVUFBVTtZQUN6QyxPQUFPTixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTRCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNqRjtRQUVBLE1BQU1DLFVBQVUsTUFBTWIsdUNBQUVBLENBQUNjLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDO1lBQzlDQyxPQUFPO2dCQUNMWCxRQUFRQTtZQUNWO1lBQ0FZLFFBQVE7Z0JBQ05DLGFBQWE7Z0JBQ2JDLFNBQVM7WUFDWDtRQUNGO1FBRUEsd0NBQXdDO1FBQ3hDLE1BQU1DLGtCQUFrQlAsUUFBUVEsTUFBTSxDQUFDQyxDQUFBQTtZQUNyQyxpREFBaUQ7WUFDakQsT0FBT0EsT0FBT0gsT0FBTyxJQUNkSSxNQUFNQyxPQUFPLENBQUNGLE9BQU9ILE9BQU8sS0FDNUJHLE9BQU9ILE9BQU8sQ0FBQ00sTUFBTSxHQUFHO1FBQ2pDO1FBRUFqQixRQUFRQyxHQUFHLENBQUMscUJBQXFCVztRQUNqQyxPQUFPckIscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFRyxTQUFTTztRQUFnQixHQUFHO1lBQUVSLFFBQVE7UUFBSTtJQUN2RSxFQUFFLE9BQU9ELE9BQU87UUFDZEgsUUFBUUcsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsT0FBT1oscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhaGlcXERlc2t0b3BcXEFJLUludGVydmlld1xcQUktTW9jay1JbnRlcnZpZXdcXHNyY1xcYXBwXFxhcGlcXGdldEFsbFJhdGluZ1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHVybCA9IHJlcS5uZXh0VXJsO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlcklkXCIpO1xyXG4gIGNvbnNvbGUubG9nKFwidXNlcklkOlwiLCB1c2VySWQpO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIG9yIG1pc3NpbmcgdXNlcklkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXRpbmdzID0gYXdhaXQgZGIubW9ja0ludGVydmlldy5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGpvYlBvc2l0aW9uOiB0cnVlLFxyXG4gICAgICAgIGFuc3dlcnM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IHJlY29yZHMgd2l0aCBlbXB0eSBhbnN3ZXJzXHJcbiAgICBjb25zdCBmaWx0ZXJlZFJhdGluZ3MgPSByYXRpbmdzLmZpbHRlcihyYXRpbmcgPT4ge1xyXG4gICAgICAvLyBDaGVjayBpZiBhbnN3ZXJzIGFycmF5IGV4aXN0cyBhbmQgaXMgbm90IGVtcHR5XHJcbiAgICAgIHJldHVybiByYXRpbmcuYW5zd2VycyAmJlxyXG4gICAgICAgICAgICAgQXJyYXkuaXNBcnJheShyYXRpbmcuYW5zd2VycykgJiZcclxuICAgICAgICAgICAgIHJhdGluZy5hbnN3ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlcmVkIHJhdGluZ3M6XCIsIGZpbHRlcmVkUmF0aW5ncyk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByYXRpbmdzOiBmaWx0ZXJlZFJhdGluZ3MgfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYiIsIkdFVCIsInJlcSIsInVybCIsIm5leHRVcmwiLCJ1c2VySWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicmF0aW5ncyIsIm1vY2tJbnRlcnZpZXciLCJmaW5kTWFueSIsIndoZXJlIiwic2VsZWN0Iiwiam9iUG9zaXRpb24iLCJhbnN3ZXJzIiwiZmlsdGVyZWRSYXRpbmdzIiwiZmlsdGVyIiwicmF0aW5nIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/getAllRating/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU12QyxNQUFNQyxLQUFLQyxXQUFXQyxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUc7QUFFMUQsSUFBSUksSUFBcUMsRUFBRUYsV0FBV0MsTUFBTSxHQUFHRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzaGFoaVxcRGVza3RvcFxcQUktSW50ZXJ2aWV3XFxBSS1Nb2NrLUludGVydmlld1xcc3JjXFxsaWJcXGRiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBkYjtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImRiIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetAllRating%2Froute&page=%2Fapi%2FgetAllRating%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetAllRating%2Froute.ts&appDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahi%5CDesktop%5CAI-Interview%5CAI-Mock-Interview&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();