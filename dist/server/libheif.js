/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "(pages-dir-node)/./utils/heic.worker.ts":
/*!******************************!*\
  !*** ./utils/heic.worker.ts ***!
  \******************************/
/***/ (() => {

eval("globalThis.addEventListener(\"message\", ({ data: image })=>{\n    globalThis.importScripts(\"/System/libheif/libheif-bundle.js\");\n    const { libheif } = globalThis;\n    const { HeifDecoder } = libheif();\n    const [decodedImage] = new HeifDecoder().decode(image);\n    const width = decodedImage.get_width();\n    const height = decodedImage.get_height();\n    decodedImage.display({\n        data: new Uint8ClampedArray(width * height * 4),\n        height,\n        width\n    }, ({ data })=>globalThis.postMessage(new ImageData(data, width, height)));\n}, {\n    passive: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxTaXRlc1xcU2l0ZXNcXGVtIGRlc2Vudm9sdmltZW50b1xcUG9ydGZvbGlvMlxcdXRpbHNcXGhlaWMud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgTGliSGVpZiA9IHtcclxuICBsaWJoZWlmOiAoKSA9PiB7XHJcbiAgICBIZWlmRGVjb2RlcjogbmV3ICgpID0+IHtcclxuICAgICAgZGVjb2RlOiAoZmlsZTogQnVmZmVyKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheTogKFxyXG4gICAgICAgICAgaW1hZ2VEYXRhOiBJbWFnZURhdGEsXHJcbiAgICAgICAgICBjYWxsYmFjazogKGRhdGE6IEltYWdlRGF0YSkgPT4gdm9pZFxyXG4gICAgICAgICkgPT4gdm9pZDtcclxuICAgICAgICBnZXRfaGVpZ2h0OiAoKSA9PiBudW1iZXI7XHJcbiAgICAgICAgZ2V0X3dpZHRoOiAoKSA9PiBudW1iZXI7XHJcbiAgICAgIH1bXTtcclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcbmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcclxuICBcIm1lc3NhZ2VcIixcclxuICAoeyBkYXRhOiBpbWFnZSB9OiB7IGRhdGE6IEJ1ZmZlciB9KSA9PiB7XHJcbiAgICBnbG9iYWxUaGlzLmltcG9ydFNjcmlwdHMoXCIvU3lzdGVtL2xpYmhlaWYvbGliaGVpZi1idW5kbGUuanNcIik7XHJcblxyXG4gICAgY29uc3QgeyBsaWJoZWlmIH0gPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMgdHlwZW9mIGdsb2JhbFRoaXMgJiBMaWJIZWlmO1xyXG4gICAgY29uc3QgeyBIZWlmRGVjb2RlciB9ID0gbGliaGVpZigpO1xyXG5cclxuICAgIGNvbnN0IFtkZWNvZGVkSW1hZ2VdID0gbmV3IEhlaWZEZWNvZGVyKCkuZGVjb2RlKGltYWdlKTtcclxuICAgIGNvbnN0IHdpZHRoID0gZGVjb2RlZEltYWdlLmdldF93aWR0aCgpO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gZGVjb2RlZEltYWdlLmdldF9oZWlnaHQoKTtcclxuXHJcbiAgICBkZWNvZGVkSW1hZ2UuZGlzcGxheShcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6IG5ldyBVaW50OENsYW1wZWRBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgfSBhcyBJbWFnZURhdGEsXHJcbiAgICAgICh7IGRhdGEgfSkgPT4gZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZShuZXcgSW1hZ2VEYXRhKGRhdGEsIHdpZHRoLCBoZWlnaHQpKVxyXG4gICAgKTtcclxuICB9LFxyXG4gIHsgcGFzc2l2ZTogdHJ1ZSB9XHJcbik7XHJcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJpbWFnZSIsImltcG9ydFNjcmlwdHMiLCJsaWJoZWlmIiwiSGVpZkRlY29kZXIiLCJkZWNvZGVkSW1hZ2UiLCJkZWNvZGUiLCJ3aWR0aCIsImdldF93aWR0aCIsImhlaWdodCIsImdldF9oZWlnaHQiLCJkaXNwbGF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJwb3N0TWVzc2FnZSIsIkltYWdlRGF0YSIsInBhc3NpdmUiXSwibWFwcGluZ3MiOiJBQWVBQSxXQUFXQyxnQkFBZ0IsQ0FDekIsV0FDQSxDQUFDLEVBQUVDLE1BQU1DLEtBQUssRUFBb0I7SUFDaENILFdBQVdJLGFBQWEsQ0FBQztJQUV6QixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHTDtJQUNwQixNQUFNLEVBQUVNLFdBQVcsRUFBRSxHQUFHRDtJQUV4QixNQUFNLENBQUNFLGFBQWEsR0FBRyxJQUFJRCxjQUFjRSxNQUFNLENBQUNMO0lBQ2hELE1BQU1NLFFBQVFGLGFBQWFHLFNBQVM7SUFDcEMsTUFBTUMsU0FBU0osYUFBYUssVUFBVTtJQUV0Q0wsYUFBYU0sT0FBTyxDQUNsQjtRQUNFWCxNQUFNLElBQUlZLGtCQUFrQkwsUUFBUUUsU0FBUztRQUM3Q0E7UUFDQUY7SUFDRixHQUNBLENBQUMsRUFBRVAsSUFBSSxFQUFFLEdBQUtGLFdBQVdlLFdBQVcsQ0FBQyxJQUFJQyxVQUFVZCxNQUFNTyxPQUFPRTtBQUVwRSxHQUNBO0lBQUVNLFNBQVM7QUFBSyIsImZpbGUiOiIocGFnZXMtZGlyLW5vZGUpLy4vdXRpbHMvaGVpYy53b3JrZXIudHMiLCJzb3VyY2VSb290IjoiIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/heic.worker.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["(pages-dir-node)/./utils/heic.worker.ts"]();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;