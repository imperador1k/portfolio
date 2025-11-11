/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "(pages-dir-browser)/./components/system/Taskbar/Clock/clock.worker.ts":
/*!*********************************************************!*\
  !*** ./components/system/Taskbar/Clock/clock.worker.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var components_system_Taskbar_Clock_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/system/Taskbar/Clock/functions */ \"(pages-dir-browser)/./components/system/Taskbar/Clock/functions.ts\");\n/* harmony import */ var components_system_Taskbar_Clock_ntp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/system/Taskbar/Clock/ntp */ \"(pages-dir-browser)/./components/system/Taskbar/Clock/ntp.ts\");\n/* harmony import */ var styles_defaultTheme_formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/defaultTheme/formats */ \"(pages-dir-browser)/./styles/defaultTheme/formats.ts\");\n\n\n\nconst MILLISECONDS_IN_SECOND = 1000;\nconst fontSize = \"12px\";\nconst textColor = \"rgba(255, 255, 255, 90%)\";\nlet mode;\nlet offscreenCanvas;\nlet offscreenContext;\nconst getNow = ()=>!mode || mode === \"local\" ? new Date() : (0,components_system_Taskbar_Clock_ntp__WEBPACK_IMPORTED_MODULE_1__.getNtpAdjustedTime)();\nconst textPosition = {\n    x: 0,\n    y: 0\n};\nconst styleClock = ()=>{\n    offscreenContext.scale(__webpack_require__.g.devicePixelRatio, __webpack_require__.g.devicePixelRatio);\n    offscreenContext.fillStyle = textColor;\n    offscreenContext.font = `${fontSize} ${styles_defaultTheme_formats__WEBPACK_IMPORTED_MODULE_2__[\"default\"].systemFont}`;\n    offscreenContext.textAlign = \"center\";\n    offscreenContext.textBaseline = \"middle\";\n    textPosition.y = Math.floor(offscreenCanvas.height / __webpack_require__.g.devicePixelRatio / 2) + components_system_Taskbar_Clock_functions__WEBPACK_IMPORTED_MODULE_0__.CLOCK_TEXT_HEIGHT_OFFSET;\n    textPosition.x = Math.floor(offscreenCanvas.width / __webpack_require__.g.devicePixelRatio / 2);\n};\nconst drawClockText = (dateTime)=>{\n    if (!offscreenContext) {\n        offscreenContext = offscreenCanvas.getContext(\"2d\");\n        if (!offscreenContext) return;\n        styleClock();\n    }\n    offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);\n    offscreenContext.fillText(dateTime.time, textPosition.x, textPosition.y);\n};\nconst sendTick = ()=>{\n    const dateTime = (0,components_system_Taskbar_Clock_functions__WEBPACK_IMPORTED_MODULE_0__.formatLocaleDateTime)(getNow());\n    globalThis.postMessage(dateTime);\n    if (offscreenCanvas) drawClockText(dateTime);\n};\nlet initialized = false;\nglobalThis.addEventListener(\"message\", ({ data })=>{\n    if (!initialized) {\n        if (data === \"init\") {\n            initialized = true;\n            globalThis.postMessage(\"source\");\n        }\n        return;\n    }\n    if (\"OffscreenCanvas\" in __webpack_require__.g && data?.devicePixelRatio) {\n        const { canvas, clockSize, devicePixelRatio } = data;\n        __webpack_require__.g.devicePixelRatio = devicePixelRatio;\n        if (canvas instanceof OffscreenCanvas) {\n            offscreenCanvas = canvas;\n        }\n        if (offscreenCanvas instanceof OffscreenCanvas && clockSize?.height && clockSize?.width && devicePixelRatio) {\n            offscreenCanvas.height = Math.floor(Number(clockSize.height) * devicePixelRatio);\n            offscreenCanvas.width = Math.floor(Number(clockSize.width) * devicePixelRatio);\n            styleClock();\n        }\n        sendTick();\n        return;\n    }\n    if (data === \"local\" || data === \"ntp\") mode = data;\n    sendTick();\n    globalThis.setTimeout(()=>{\n        sendTick();\n        globalThis.setInterval(sendTick, MILLISECONDS_IN_SECOND);\n    }, MILLISECONDS_IN_SECOND - new Date().getMilliseconds());\n}, {\n    passive: true\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL2NvbXBvbmVudHMvc3lzdGVtL1Rhc2tiYXIvQ2xvY2svY2xvY2sud29ya2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFLbUQ7QUFDc0I7QUFFdkI7QUFFbEQsTUFBTUkseUJBQXlCO0FBRS9CLE1BQU1DLFdBQVc7QUFDakIsTUFBTUMsWUFBWTtBQUVsQixJQUFJQztBQUNKLElBQUlDO0FBQ0osSUFBSUM7QUFFSixNQUFNQyxTQUFTLElBQ2IsQ0FBQ0gsUUFBUUEsU0FBUyxVQUFVLElBQUlJLFNBQVNULHVGQUFrQkE7QUFFN0QsTUFBTVUsZUFBZTtJQUNuQkMsR0FBRztJQUNIQyxHQUFHO0FBQ0w7QUFFQSxNQUFNQyxhQUFhO0lBQ2pCTixpQkFBaUJPLEtBQUssQ0FBQ0MscUJBQU1BLENBQUNDLGdCQUFnQixFQUFFRCxxQkFBTUEsQ0FBQ0MsZ0JBQWdCO0lBQ3ZFVCxpQkFBaUJVLFNBQVMsR0FBR2I7SUFDN0JHLGlCQUFpQlcsSUFBSSxHQUFHLEdBQUdmLFNBQVMsQ0FBQyxFQUFFRiw4RUFBa0IsRUFBRTtJQUMzRE0saUJBQWlCYSxTQUFTLEdBQUc7SUFDN0JiLGlCQUFpQmMsWUFBWSxHQUFHO0lBRWhDWCxhQUFhRSxDQUFDLEdBQ1pVLEtBQUtDLEtBQUssQ0FBQ2pCLGdCQUFnQmtCLE1BQU0sR0FBR1QscUJBQU1BLENBQUNDLGdCQUFnQixHQUFHLEtBQzlEakIsK0ZBQXdCQTtJQUMxQlcsYUFBYUMsQ0FBQyxHQUFHVyxLQUFLQyxLQUFLLENBQ3pCakIsZ0JBQWdCbUIsS0FBSyxHQUFHVixxQkFBTUEsQ0FBQ0MsZ0JBQWdCLEdBQUc7QUFFdEQ7QUFFQSxNQUFNVSxnQkFBZ0IsQ0FBQ0M7SUFDckIsSUFBSSxDQUFDcEIsa0JBQWtCO1FBQ3JCQSxtQkFBbUJELGdCQUFnQnNCLFVBQVUsQ0FDM0M7UUFHRixJQUFJLENBQUNyQixrQkFBa0I7UUFFdkJNO0lBQ0Y7SUFFQU4saUJBQWlCc0IsU0FBUyxDQUN4QixHQUNBLEdBQ0F2QixnQkFBZ0JtQixLQUFLLEVBQ3JCbkIsZ0JBQWdCa0IsTUFBTTtJQUV4QmpCLGlCQUFpQnVCLFFBQVEsQ0FBQ0gsU0FBU0ksSUFBSSxFQUFFckIsYUFBYUMsQ0FBQyxFQUFFRCxhQUFhRSxDQUFDO0FBQ3pFO0FBRUEsTUFBTW9CLFdBQVc7SUFDZixNQUFNTCxXQUFXN0IsK0ZBQW9CQSxDQUFDVTtJQUV0Q3lCLFdBQVdDLFdBQVcsQ0FBQ1A7SUFDdkIsSUFBSXJCLGlCQUFpQm9CLGNBQWNDO0FBQ3JDO0FBRUEsSUFBSVEsY0FBYztBQUVsQkYsV0FBV0csZ0JBQWdCLENBQ3pCLFdBQ0EsQ0FBQyxFQUFFQyxJQUFJLEVBQXlEO0lBQzlELElBQUksQ0FBQ0YsYUFBYTtRQUNoQixJQUFJRSxTQUFTLFFBQVE7WUFDbkJGLGNBQWM7WUFDZEYsV0FBV0MsV0FBVyxDQUFDO1FBQ3pCO1FBQ0E7SUFDRjtJQUVBLElBQ0UscUJBQXFCbkIscUJBQU1BLElBQzFCc0IsTUFBK0JyQixrQkFDaEM7UUFDQSxNQUFNLEVBQUVzQixNQUFNLEVBQUVDLFNBQVMsRUFBRXZCLGdCQUFnQixFQUFFLEdBQzNDcUI7UUFFRnRCLHFCQUFNQSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFFMUIsSUFBSXNCLGtCQUFrQkUsaUJBQWlCO1lBQ3JDbEMsa0JBQWtCZ0M7UUFDcEI7UUFFQSxJQUNFaEMsMkJBQTJCa0MsbUJBQzNCRCxXQUFXZixVQUNYZSxXQUFXZCxTQUNYVCxrQkFDQTtZQUNBVixnQkFBZ0JrQixNQUFNLEdBQUdGLEtBQUtDLEtBQUssQ0FDakNrQixPQUFPRixVQUFVZixNQUFNLElBQUlSO1lBRTdCVixnQkFBZ0JtQixLQUFLLEdBQUdILEtBQUtDLEtBQUssQ0FDaENrQixPQUFPRixVQUFVZCxLQUFLLElBQUlUO1lBRTVCSDtRQUNGO1FBRUFtQjtRQUVBO0lBQ0Y7SUFFQSxJQUFJSyxTQUFTLFdBQVdBLFNBQVMsT0FBT2hDLE9BQU9nQztJQUUvQ0w7SUFDQUMsV0FBV1MsVUFBVSxDQUFDO1FBQ3BCVjtRQUNBQyxXQUFXVSxXQUFXLENBQUNYLFVBQVU5QjtJQUNuQyxHQUFHQSx5QkFBeUIsSUFBSU8sT0FBT21DLGVBQWU7QUFDeEQsR0FDQTtJQUFFQyxTQUFTO0FBQUsiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxTaXRlc1xcU2l0ZXNcXGVtIGRlc2Vudm9sdmltZW50b1xcUG9ydGZvbGlvMlxcY29tcG9uZW50c1xcc3lzdGVtXFxUYXNrYmFyXFxDbG9ja1xcY2xvY2sud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgT2Zmc2NyZWVuUmVuZGVyUHJvcHMgfSBmcm9tIFwiY29tcG9uZW50cy9zeXN0ZW0vRGVza3RvcC9XYWxscGFwZXJzL3R5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgdHlwZSBMb2NhbGVUaW1lRGF0ZSxcclxuICBmb3JtYXRMb2NhbGVEYXRlVGltZSxcclxuICBDTE9DS19URVhUX0hFSUdIVF9PRkZTRVQsXHJcbn0gZnJvbSBcImNvbXBvbmVudHMvc3lzdGVtL1Rhc2tiYXIvQ2xvY2svZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldE50cEFkanVzdGVkVGltZSB9IGZyb20gXCJjb21wb25lbnRzL3N5c3RlbS9UYXNrYmFyL0Nsb2NrL250cFwiO1xyXG5pbXBvcnQgeyB0eXBlIENsb2NrU291cmNlIH0gZnJvbSBcImNvbnRleHRzL3Nlc3Npb24vdHlwZXNcIjtcclxuaW1wb3J0IGZvcm1hdHMgZnJvbSBcInN0eWxlcy9kZWZhdWx0VGhlbWUvZm9ybWF0c1wiO1xyXG5cclxuY29uc3QgTUlMTElTRUNPTkRTX0lOX1NFQ09ORCA9IDEwMDA7XHJcblxyXG5jb25zdCBmb250U2l6ZSA9IFwiMTJweFwiO1xyXG5jb25zdCB0ZXh0Q29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgOTAlKVwiO1xyXG5cclxubGV0IG1vZGU6IENsb2NrU291cmNlO1xyXG5sZXQgb2Zmc2NyZWVuQ2FudmFzOiBPZmZzY3JlZW5DYW52YXM7XHJcbmxldCBvZmZzY3JlZW5Db250ZXh0OiBPZmZzY3JlZW5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5jb25zdCBnZXROb3cgPSAoKTogRGF0ZSA9PlxyXG4gICFtb2RlIHx8IG1vZGUgPT09IFwibG9jYWxcIiA/IG5ldyBEYXRlKCkgOiBnZXROdHBBZGp1c3RlZFRpbWUoKTtcclxuXHJcbmNvbnN0IHRleHRQb3NpdGlvbiA9IHtcclxuICB4OiAwLFxyXG4gIHk6IDAsXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZUNsb2NrID0gKCk6IHZvaWQgPT4ge1xyXG4gIG9mZnNjcmVlbkNvbnRleHQuc2NhbGUoZ2xvYmFsLmRldmljZVBpeGVsUmF0aW8sIGdsb2JhbC5kZXZpY2VQaXhlbFJhdGlvKTtcclxuICBvZmZzY3JlZW5Db250ZXh0LmZpbGxTdHlsZSA9IHRleHRDb2xvcjtcclxuICBvZmZzY3JlZW5Db250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZX0gJHtmb3JtYXRzLnN5c3RlbUZvbnR9YDtcclxuICBvZmZzY3JlZW5Db250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgb2Zmc2NyZWVuQ29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG5cclxuICB0ZXh0UG9zaXRpb24ueSA9XHJcbiAgICBNYXRoLmZsb29yKG9mZnNjcmVlbkNhbnZhcy5oZWlnaHQgLyBnbG9iYWwuZGV2aWNlUGl4ZWxSYXRpbyAvIDIpICtcclxuICAgIENMT0NLX1RFWFRfSEVJR0hUX09GRlNFVDtcclxuICB0ZXh0UG9zaXRpb24ueCA9IE1hdGguZmxvb3IoXHJcbiAgICBvZmZzY3JlZW5DYW52YXMud2lkdGggLyBnbG9iYWwuZGV2aWNlUGl4ZWxSYXRpbyAvIDJcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZHJhd0Nsb2NrVGV4dCA9IChkYXRlVGltZTogTG9jYWxlVGltZURhdGUpOiB2b2lkID0+IHtcclxuICBpZiAoIW9mZnNjcmVlbkNvbnRleHQpIHtcclxuICAgIG9mZnNjcmVlbkNvbnRleHQgPSBvZmZzY3JlZW5DYW52YXMuZ2V0Q29udGV4dChcclxuICAgICAgXCIyZFwiXHJcbiAgICApIGFzIE9mZnNjcmVlbkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBpZiAoIW9mZnNjcmVlbkNvbnRleHQpIHJldHVybjtcclxuXHJcbiAgICBzdHlsZUNsb2NrKCk7XHJcbiAgfVxyXG5cclxuICBvZmZzY3JlZW5Db250ZXh0LmNsZWFyUmVjdChcclxuICAgIDAsXHJcbiAgICAwLFxyXG4gICAgb2Zmc2NyZWVuQ2FudmFzLndpZHRoLFxyXG4gICAgb2Zmc2NyZWVuQ2FudmFzLmhlaWdodFxyXG4gICk7XHJcbiAgb2Zmc2NyZWVuQ29udGV4dC5maWxsVGV4dChkYXRlVGltZS50aW1lLCB0ZXh0UG9zaXRpb24ueCwgdGV4dFBvc2l0aW9uLnkpO1xyXG59O1xyXG5cclxuY29uc3Qgc2VuZFRpY2sgPSAoKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgZGF0ZVRpbWUgPSBmb3JtYXRMb2NhbGVEYXRlVGltZShnZXROb3coKSk7XHJcblxyXG4gIGdsb2JhbFRoaXMucG9zdE1lc3NhZ2UoZGF0ZVRpbWUpO1xyXG4gIGlmIChvZmZzY3JlZW5DYW52YXMpIGRyYXdDbG9ja1RleHQoZGF0ZVRpbWUpO1xyXG59O1xyXG5cclxubGV0IGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5nbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgXCJtZXNzYWdlXCIsXHJcbiAgKHsgZGF0YSB9OiB7IGRhdGE6IENsb2NrU291cmNlIHwgT2Zmc2NyZWVuUmVuZGVyUHJvcHMgfCBcImluaXRcIiB9KSA9PiB7XHJcbiAgICBpZiAoIWluaXRpYWxpemVkKSB7XHJcbiAgICAgIGlmIChkYXRhID09PSBcImluaXRcIikge1xyXG4gICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICBnbG9iYWxUaGlzLnBvc3RNZXNzYWdlKFwic291cmNlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIFwiT2Zmc2NyZWVuQ2FudmFzXCIgaW4gZ2xvYmFsICYmXHJcbiAgICAgIChkYXRhIGFzIE9mZnNjcmVlblJlbmRlclByb3BzKT8uZGV2aWNlUGl4ZWxSYXRpb1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHsgY2FudmFzLCBjbG9ja1NpemUsIGRldmljZVBpeGVsUmF0aW8gfSA9XHJcbiAgICAgICAgZGF0YSBhcyBPZmZzY3JlZW5SZW5kZXJQcm9wcztcclxuXHJcbiAgICAgIGdsb2JhbC5kZXZpY2VQaXhlbFJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICAgIGlmIChjYW52YXMgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXMpIHtcclxuICAgICAgICBvZmZzY3JlZW5DYW52YXMgPSBjYW52YXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBvZmZzY3JlZW5DYW52YXMgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXMgJiZcclxuICAgICAgICBjbG9ja1NpemU/LmhlaWdodCAmJlxyXG4gICAgICAgIGNsb2NrU2l6ZT8ud2lkdGggJiZcclxuICAgICAgICBkZXZpY2VQaXhlbFJhdGlvXHJcbiAgICAgICkge1xyXG4gICAgICAgIG9mZnNjcmVlbkNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgTnVtYmVyKGNsb2NrU2l6ZS5oZWlnaHQpICogZGV2aWNlUGl4ZWxSYXRpb1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgb2Zmc2NyZWVuQ2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgIE51bWJlcihjbG9ja1NpemUud2lkdGgpICogZGV2aWNlUGl4ZWxSYXRpb1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3R5bGVDbG9jaygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZW5kVGljaygpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhID09PSBcImxvY2FsXCIgfHwgZGF0YSA9PT0gXCJudHBcIikgbW9kZSA9IGRhdGE7XHJcblxyXG4gICAgc2VuZFRpY2soKTtcclxuICAgIGdsb2JhbFRoaXMuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNlbmRUaWNrKCk7XHJcbiAgICAgIGdsb2JhbFRoaXMuc2V0SW50ZXJ2YWwoc2VuZFRpY2ssIE1JTExJU0VDT05EU19JTl9TRUNPTkQpO1xyXG4gICAgfSwgTUlMTElTRUNPTkRTX0lOX1NFQ09ORCAtIG5ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCkpO1xyXG4gIH0sXHJcbiAgeyBwYXNzaXZlOiB0cnVlIH1cclxuKTtcclxuIl0sIm5hbWVzIjpbImZvcm1hdExvY2FsZURhdGVUaW1lIiwiQ0xPQ0tfVEVYVF9IRUlHSFRfT0ZGU0VUIiwiZ2V0TnRwQWRqdXN0ZWRUaW1lIiwiZm9ybWF0cyIsIk1JTExJU0VDT05EU19JTl9TRUNPTkQiLCJmb250U2l6ZSIsInRleHRDb2xvciIsIm1vZGUiLCJvZmZzY3JlZW5DYW52YXMiLCJvZmZzY3JlZW5Db250ZXh0IiwiZ2V0Tm93IiwiRGF0ZSIsInRleHRQb3NpdGlvbiIsIngiLCJ5Iiwic3R5bGVDbG9jayIsInNjYWxlIiwiZ2xvYmFsIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZpbGxTdHlsZSIsImZvbnQiLCJzeXN0ZW1Gb250IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0Iiwid2lkdGgiLCJkcmF3Q2xvY2tUZXh0IiwiZGF0ZVRpbWUiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiZmlsbFRleHQiLCJ0aW1lIiwic2VuZFRpY2siLCJnbG9iYWxUaGlzIiwicG9zdE1lc3NhZ2UiLCJpbml0aWFsaXplZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwiY2FudmFzIiwiY2xvY2tTaXplIiwiT2Zmc2NyZWVuQ2FudmFzIiwiTnVtYmVyIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiZ2V0TWlsbGlzZWNvbmRzIiwicGFzc2l2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./components/system/Taskbar/Clock/clock.worker.ts\n"));

/***/ }),

/***/ "(pages-dir-browser)/./components/system/Taskbar/Clock/functions.ts":
/*!******************************************************!*\
  !*** ./components/system/Taskbar/Clock/functions.ts ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CLOCK_TEXT_HEIGHT_OFFSET: () => (/* binding */ CLOCK_TEXT_HEIGHT_OFFSET),\n/* harmony export */   formatLocaleDateTime: () => (/* binding */ formatLocaleDateTime)\n/* harmony export */ });\nconst DEFAULT_LOCALE = \"en\";\nconst dateFormatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, {\n    day: \"numeric\",\n    month: \"long\",\n    year: \"numeric\"\n});\nconst timeFormatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, {\n    hour: \"numeric\",\n    hour12: true,\n    minute: \"2-digit\",\n    second: \"2-digit\"\n});\nconst dayFormatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, {\n    weekday: \"long\"\n});\nconst formatLocaleDateTime = (now)=>{\n    const date = dateFormatter.format(now);\n    const day = dayFormatter.format(now);\n    const time = timeFormatter.format(now);\n    return {\n        date: `${date}\\n${day}`,\n        time\n    };\n};\nconst CLOCK_TEXT_HEIGHT_OFFSET = 1;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL2NvbXBvbmVudHMvc3lzdGVtL1Rhc2tiYXIvQ2xvY2svZnVuY3Rpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsTUFBTUEsaUJBQWlCO0FBRXZCLE1BQU1DLGdCQUFnQixJQUFJQyxLQUFLQyxjQUFjLENBQUNILGdCQUFnQjtJQUM1REksS0FBSztJQUNMQyxPQUFPO0lBQ1BDLE1BQU07QUFDUjtBQUVBLE1BQU1DLGdCQUFnQixJQUFJTCxLQUFLQyxjQUFjLENBQUNILGdCQUFnQjtJQUM1RFEsTUFBTTtJQUNOQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtBQUNWO0FBRUEsTUFBTUMsZUFBZSxJQUFJVixLQUFLQyxjQUFjLENBQUNILGdCQUFnQjtJQUMzRGEsU0FBUztBQUNYO0FBRU8sTUFBTUMsdUJBQXVCLENBQUNDO0lBQ25DLE1BQU1DLE9BQU9mLGNBQWNnQixNQUFNLENBQUNGO0lBQ2xDLE1BQU1YLE1BQU1RLGFBQWFLLE1BQU0sQ0FBQ0Y7SUFDaEMsTUFBTUcsT0FBT1gsY0FBY1UsTUFBTSxDQUFDRjtJQUVsQyxPQUFPO1FBQ0xDLE1BQU0sR0FBR0EsS0FBSyxFQUFFLEVBQUVaLEtBQUs7UUFDdkJjO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTUMsMkJBQTJCLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxTaXRlc1xcU2l0ZXNcXGVtIGRlc2Vudm9sdmltZW50b1xcUG9ydGZvbGlvMlxcY29tcG9uZW50c1xcc3lzdGVtXFxUYXNrYmFyXFxDbG9ja1xcZnVuY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIExvY2FsZVRpbWVEYXRlID0ge1xyXG4gIGRhdGU6IHN0cmluZztcclxuICB0aW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0xPQ0FMRSA9IFwiZW5cIjtcclxuXHJcbmNvbnN0IGRhdGVGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChERUZBVUxUX0xPQ0FMRSwge1xyXG4gIGRheTogXCJudW1lcmljXCIsXHJcbiAgbW9udGg6IFwibG9uZ1wiLFxyXG4gIHllYXI6IFwibnVtZXJpY1wiLFxyXG59KTtcclxuXHJcbmNvbnN0IHRpbWVGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChERUZBVUxUX0xPQ0FMRSwge1xyXG4gIGhvdXI6IFwibnVtZXJpY1wiLFxyXG4gIGhvdXIxMjogdHJ1ZSxcclxuICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gIHNlY29uZDogXCIyLWRpZ2l0XCIsXHJcbn0pO1xyXG5cclxuY29uc3QgZGF5Rm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoREVGQVVMVF9MT0NBTEUsIHtcclxuICB3ZWVrZGF5OiBcImxvbmdcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TG9jYWxlRGF0ZVRpbWUgPSAobm93OiBEYXRlKTogTG9jYWxlVGltZURhdGUgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBkYXRlRm9ybWF0dGVyLmZvcm1hdChub3cpO1xyXG4gIGNvbnN0IGRheSA9IGRheUZvcm1hdHRlci5mb3JtYXQobm93KTtcclxuICBjb25zdCB0aW1lID0gdGltZUZvcm1hdHRlci5mb3JtYXQobm93KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGU6IGAke2RhdGV9XFxuJHtkYXl9YCxcclxuICAgIHRpbWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDTE9DS19URVhUX0hFSUdIVF9PRkZTRVQgPSAxO1xyXG4iXSwibmFtZXMiOlsiREVGQVVMVF9MT0NBTEUiLCJkYXRlRm9ybWF0dGVyIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwidGltZUZvcm1hdHRlciIsImhvdXIiLCJob3VyMTIiLCJtaW51dGUiLCJzZWNvbmQiLCJkYXlGb3JtYXR0ZXIiLCJ3ZWVrZGF5IiwiZm9ybWF0TG9jYWxlRGF0ZVRpbWUiLCJub3ciLCJkYXRlIiwiZm9ybWF0IiwidGltZSIsIkNMT0NLX1RFWFRfSEVJR0hUX09GRlNFVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./components/system/Taskbar/Clock/functions.ts\n"));

/***/ }),

/***/ "(pages-dir-browser)/./components/system/Taskbar/Clock/ntp.ts":
/*!************************************************!*\
  !*** ./components/system/Taskbar/Clock/ntp.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNtpAdjustedTime: () => (/* binding */ getNtpAdjustedTime)\n/* harmony export */ });\nconst DEFAULT_BACKOFF_SECONDS = 300;\nconst MILLISECONDS_IN_SECOND = 1000;\nconst HOUR_IN_SECONDS = 3600;\nconst NTP_SERVER = \"https://use.ntpjs.org/v1/time.json\";\nconst NtpReqOptions = {\n    cache: \"no-cache\",\n    credentials: \"omit\",\n    keepalive: false,\n    mode: \"cors\",\n    priority: \"high\",\n    referrerPolicy: \"no-referrer\",\n    // eslint-disable-next-line unicorn/no-null\n    window: null\n};\nconst getNtpResponse = async ()=>{\n    const ntpResponse = await fetch(NTP_SERVER, NtpReqOptions);\n    const ntpJsonResponse = await ntpResponse.json();\n    return ntpJsonResponse || {};\n};\nlet msAheadBy;\nconst pollNtpTime = async ()=>{\n    const requestStartTime = Date.now();\n    const { backoff = DEFAULT_BACKOFF_SECONDS, now = 0, optout = false } = await getNtpResponse();\n    if (now) {\n        msAheadBy = requestStartTime - Math.ceil(now * MILLISECONDS_IN_SECOND);\n    }\n    setTimeout(pollNtpTime, (optout ? HOUR_IN_SECONDS : backoff) * MILLISECONDS_IN_SECOND);\n};\nconst getNtpAdjustedTime = ()=>{\n    if (typeof msAheadBy !== \"number\") {\n        msAheadBy = 0;\n        pollNtpTime();\n    }\n    return new Date(Date.now() - msAheadBy);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL2NvbXBvbmVudHMvc3lzdGVtL1Rhc2tiYXIvQ2xvY2svbnRwLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFNQSxNQUFNQSwwQkFBMEI7QUFDaEMsTUFBTUMseUJBQXlCO0FBQy9CLE1BQU1DLGtCQUFrQjtBQUN4QixNQUFNQyxhQUFhO0FBRW5CLE1BQU1DLGdCQUFnQjtJQUNwQkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLFdBQVc7SUFDWEMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0NDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLGlCQUFpQjtJQUNyQixNQUFNQyxjQUFjLE1BQU1DLE1BQU1YLFlBQVlDO0lBQzVDLE1BQU1XLGtCQUFtQixNQUFNRixZQUFZRyxJQUFJO0lBRS9DLE9BQU9ELG1CQUFtQixDQUFDO0FBQzdCO0FBRUEsSUFBSUU7QUFFSixNQUFNQyxjQUFjO0lBQ2xCLE1BQU1DLG1CQUFtQkMsS0FBS0MsR0FBRztJQUNqQyxNQUFNLEVBQ0pDLFVBQVV0Qix1QkFBdUIsRUFDakNxQixNQUFNLENBQUMsRUFDUEUsU0FBUyxLQUFLLEVBQ2YsR0FBRyxNQUFNWDtJQUVWLElBQUlTLEtBQUs7UUFDUEosWUFBWUUsbUJBQW1CSyxLQUFLQyxJQUFJLENBQUNKLE1BQU1wQjtJQUNqRDtJQUVBeUIsV0FDRVIsYUFDQSxDQUFDSyxTQUFTckIsa0JBQWtCb0IsT0FBTSxJQUFLckI7QUFFM0M7QUFFTyxNQUFNMEIscUJBQXFCO0lBQ2hDLElBQUksT0FBT1YsY0FBYyxVQUFVO1FBQ2pDQSxZQUFZO1FBQ1pDO0lBQ0Y7SUFFQSxPQUFPLElBQUlFLEtBQUtBLEtBQUtDLEdBQUcsS0FBS0o7QUFDL0IsRUFBRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXFNpdGVzXFxTaXRlc1xcZW0gZGVzZW52b2x2aW1lbnRvXFxQb3J0Zm9saW8yXFxjb21wb25lbnRzXFxzeXN0ZW1cXFRhc2tiYXJcXENsb2NrXFxudHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBOVFBSZXNwb25zZSA9IHtcclxuICBiYWNrb2ZmOiBudW1iZXI7XHJcbiAgbm93OiBudW1iZXI7XHJcbiAgb3B0b3V0PzogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQkFDS09GRl9TRUNPTkRTID0gMzAwO1xyXG5jb25zdCBNSUxMSVNFQ09ORFNfSU5fU0VDT05EID0gMTAwMDtcclxuY29uc3QgSE9VUl9JTl9TRUNPTkRTID0gMzYwMDtcclxuY29uc3QgTlRQX1NFUlZFUiA9IFwiaHR0cHM6Ly91c2UubnRwanMub3JnL3YxL3RpbWUuanNvblwiO1xyXG5cclxuY29uc3QgTnRwUmVxT3B0aW9ucyA9IHtcclxuICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gIGNyZWRlbnRpYWxzOiBcIm9taXRcIixcclxuICBrZWVwYWxpdmU6IGZhbHNlLFxyXG4gIG1vZGU6IFwiY29yc1wiLFxyXG4gIHByaW9yaXR5OiBcImhpZ2hcIixcclxuICByZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlclwiLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLW51bGxcclxuICB3aW5kb3c6IG51bGwsXHJcbn0gYXMgUmVxdWVzdEluaXQ7XHJcblxyXG5jb25zdCBnZXROdHBSZXNwb25zZSA9IGFzeW5jICgpOiBQcm9taXNlPE5UUFJlc3BvbnNlPiA9PiB7XHJcbiAgY29uc3QgbnRwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChOVFBfU0VSVkVSLCBOdHBSZXFPcHRpb25zKTtcclxuICBjb25zdCBudHBKc29uUmVzcG9uc2UgPSAoYXdhaXQgbnRwUmVzcG9uc2UuanNvbigpKSBhcyBOVFBSZXNwb25zZTtcclxuXHJcbiAgcmV0dXJuIG50cEpzb25SZXNwb25zZSB8fCB7fTtcclxufTtcclxuXHJcbmxldCBtc0FoZWFkQnk6IG51bWJlcjtcclxuXHJcbmNvbnN0IHBvbGxOdHBUaW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IHtcclxuICAgIGJhY2tvZmYgPSBERUZBVUxUX0JBQ0tPRkZfU0VDT05EUyxcclxuICAgIG5vdyA9IDAsXHJcbiAgICBvcHRvdXQgPSBmYWxzZSxcclxuICB9ID0gYXdhaXQgZ2V0TnRwUmVzcG9uc2UoKTtcclxuXHJcbiAgaWYgKG5vdykge1xyXG4gICAgbXNBaGVhZEJ5ID0gcmVxdWVzdFN0YXJ0VGltZSAtIE1hdGguY2VpbChub3cgKiBNSUxMSVNFQ09ORFNfSU5fU0VDT05EKTtcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoXHJcbiAgICBwb2xsTnRwVGltZSxcclxuICAgIChvcHRvdXQgPyBIT1VSX0lOX1NFQ09ORFMgOiBiYWNrb2ZmKSAqIE1JTExJU0VDT05EU19JTl9TRUNPTkRcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE50cEFkanVzdGVkVGltZSA9ICgpOiBEYXRlID0+IHtcclxuICBpZiAodHlwZW9mIG1zQWhlYWRCeSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgbXNBaGVhZEJ5ID0gMDtcclxuICAgIHBvbGxOdHBUaW1lKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IERhdGUoRGF0ZS5ub3coKSAtIG1zQWhlYWRCeSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0JBQ0tPRkZfU0VDT05EUyIsIk1JTExJU0VDT05EU19JTl9TRUNPTkQiLCJIT1VSX0lOX1NFQ09ORFMiLCJOVFBfU0VSVkVSIiwiTnRwUmVxT3B0aW9ucyIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJrZWVwYWxpdmUiLCJtb2RlIiwicHJpb3JpdHkiLCJyZWZlcnJlclBvbGljeSIsIndpbmRvdyIsImdldE50cFJlc3BvbnNlIiwibnRwUmVzcG9uc2UiLCJmZXRjaCIsIm50cEpzb25SZXNwb25zZSIsImpzb24iLCJtc0FoZWFkQnkiLCJwb2xsTnRwVGltZSIsInJlcXVlc3RTdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYmFja29mZiIsIm9wdG91dCIsIk1hdGgiLCJjZWlsIiwic2V0VGltZW91dCIsImdldE50cEFkanVzdGVkVGltZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./components/system/Taskbar/Clock/ntp.ts\n"));

/***/ }),

/***/ "(pages-dir-browser)/./styles/defaultTheme/formats.ts":
/*!****************************************!*\
  !*** ./styles/defaultTheme/formats.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formats = {\n    dateModified: {\n        hour: \"numeric\",\n        hour12: true,\n        minute: \"2-digit\"\n    },\n    systemFont: \"'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formats);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3N0eWxlcy9kZWZhdWx0VGhlbWUvZm9ybWF0cy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVTtJQUNkQyxjQUFjO1FBQ1pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7SUFDQUMsWUFBWTtBQUNkO0FBRUEsaUVBQWVMLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxTaXRlc1xcU2l0ZXNcXGVtIGRlc2Vudm9sdmltZW50b1xcUG9ydGZvbGlvMlxcc3R5bGVzXFxkZWZhdWx0VGhlbWVcXGZvcm1hdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybWF0cyA9IHtcclxuICBkYXRlTW9kaWZpZWQ6IHtcclxuICAgIGhvdXI6IFwibnVtZXJpY1wiLFxyXG4gICAgaG91cjEyOiB0cnVlLFxyXG4gICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICB9IGFzIEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zLFxyXG4gIHN5c3RlbUZvbnQ6IFwiJ1NlZ29lIFVJJywgc3lzdGVtLXVpLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWZcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHM7XHJcbiJdLCJuYW1lcyI6WyJmb3JtYXRzIiwiZGF0ZU1vZGlmaWVkIiwiaG91ciIsImhvdXIxMiIsIm1pbnV0ZSIsInN5c3RlbUZvbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./styles/defaultTheme/formats.ts\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/webpack/" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("static/webpack/" + __webpack_require__.h() + ".8cb00a80eb0d5723.hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("8948337a68f46a6c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: (script) => (script),
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	(() => {
/******/ 		__webpack_require__.ts = (script) => (__webpack_require__.tt().createScript(script));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				const hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				const cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : () => {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = __webpack_require__.hmrS_importScripts = __webpack_require__.hmrS_importScripts || {
/******/ 			"Clock": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		// no chunk loading
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var success = false;
/******/ 			self["webpackHotUpdate_N_E"] = (_, moreModules, runtime) => {
/******/ 				for(var moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						currentUpdate[moduleId] = moreModules[moduleId];
/******/ 						if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 					}
/******/ 				}
/******/ 				if(runtime) currentUpdateRuntime.push(runtime);
/******/ 				success = true;
/******/ 			};
/******/ 			// start update chunk loading
/******/ 			importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.hu(chunkId)));
/******/ 			if(!success) throw new Error("Loading update chunk failed for unknown reason");
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.importScriptsHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.importScripts = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.importScripts = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.importScriptsHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("(pages-dir-browser)/./components/system/Taskbar/Clock/clock.worker.ts");
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;