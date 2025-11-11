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

/***/ "(pages-dir-node)/./utils/resizeImage.worker.ts":
/*!*************************************!*\
  !*** ./utils/resizeImage.worker.ts ***!
  \*************************************/
/***/ (() => {

eval("globalThis.addEventListener(\"message\", async ({ data: { blob, canvas, maxDimension } })=>{\n    if (blob instanceof Blob && canvas instanceof OffscreenCanvas) {\n        const ctx = canvas.getContext(\"2d\");\n        if (!ctx) return;\n        const bitmap = await createImageBitmap(blob);\n        if (!bitmap) return;\n        const offscreenCanvas = canvas;\n        const ratio = Math.min(maxDimension / bitmap.width, maxDimension / bitmap.height);\n        const dw = Math.round(bitmap.width * ratio);\n        const dh = Math.round(bitmap.height * ratio);\n        offscreenCanvas.width = dw;\n        offscreenCanvas.height = dh;\n        ctx.drawImage(bitmap, 0, 0, dw, dh);\n        globalThis.postMessage(await offscreenCanvas.convertToBlob({\n            type: \"image/png\"\n        }));\n    }\n}, {\n    passive: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxTaXRlc1xcU2l0ZXNcXGVtIGRlc2Vudm9sdmltZW50b1xcUG9ydGZvbGlvMlxcdXRpbHNcXHJlc2l6ZUltYWdlLndvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFJlc2l6ZUltYWdlV29ya2VyRGF0YSA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBibG9iOiBCbG9iO1xyXG4gICAgY2FudmFzOiBPZmZzY3JlZW5DYW52YXM7XHJcbiAgICBtYXhEaW1lbnNpb246IG51bWJlcjtcclxuICB9O1xyXG59O1xyXG5cclxuZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFxyXG4gIFwibWVzc2FnZVwiLFxyXG4gIGFzeW5jICh7XHJcbiAgICBkYXRhOiB7IGJsb2IsIGNhbnZhcywgbWF4RGltZW5zaW9uIH0sXHJcbiAgfTogUmVzaXplSW1hZ2VXb3JrZXJEYXRhKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZiAoYmxvYiBpbnN0YW5jZW9mIEJsb2IgJiYgY2FudmFzIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzKSB7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgYml0bWFwID0gYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYik7XHJcblxyXG4gICAgICBpZiAoIWJpdG1hcCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3Qgb2Zmc2NyZWVuQ2FudmFzID0gY2FudmFzO1xyXG4gICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKFxyXG4gICAgICAgIG1heERpbWVuc2lvbiAvIGJpdG1hcC53aWR0aCxcclxuICAgICAgICBtYXhEaW1lbnNpb24gLyBiaXRtYXAuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGR3ID0gTWF0aC5yb3VuZChiaXRtYXAud2lkdGggKiByYXRpbyk7XHJcbiAgICAgIGNvbnN0IGRoID0gTWF0aC5yb3VuZChiaXRtYXAuaGVpZ2h0ICogcmF0aW8pO1xyXG5cclxuICAgICAgb2Zmc2NyZWVuQ2FudmFzLndpZHRoID0gZHc7XHJcbiAgICAgIG9mZnNjcmVlbkNhbnZhcy5oZWlnaHQgPSBkaDtcclxuXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwLCBkdywgZGgpO1xyXG5cclxuICAgICAgZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZShcclxuICAgICAgICBhd2FpdCBvZmZzY3JlZW5DYW52YXMuY29udmVydFRvQmxvYih7IHR5cGU6IFwiaW1hZ2UvcG5nXCIgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHsgcGFzc2l2ZTogdHJ1ZSB9XHJcbik7XHJcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJibG9iIiwiY2FudmFzIiwibWF4RGltZW5zaW9uIiwiQmxvYiIsIk9mZnNjcmVlbkNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJiaXRtYXAiLCJjcmVhdGVJbWFnZUJpdG1hcCIsIm9mZnNjcmVlbkNhbnZhcyIsInJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRoIiwiaGVpZ2h0IiwiZHciLCJyb3VuZCIsImRoIiwiZHJhd0ltYWdlIiwicG9zdE1lc3NhZ2UiLCJjb252ZXJ0VG9CbG9iIiwidHlwZSIsInBhc3NpdmUiXSwibWFwcGluZ3MiOiJBQVFBQSxXQUFXQyxnQkFBZ0IsQ0FDekIsV0FDQSxPQUFPLEVBQ0xDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxFQUNkO0lBQ3RCLElBQUlGLGdCQUFnQkcsUUFBUUYsa0JBQWtCRyxpQkFBaUI7UUFDN0QsTUFBTUMsTUFBTUosT0FBT0ssVUFBVSxDQUFDO1FBRTlCLElBQUksQ0FBQ0QsS0FBSztRQUVWLE1BQU1FLFNBQVMsTUFBTUMsa0JBQWtCUjtRQUV2QyxJQUFJLENBQUNPLFFBQVE7UUFFYixNQUFNRSxrQkFBa0JSO1FBQ3hCLE1BQU1TLFFBQVFDLEtBQUtDLEdBQUcsQ0FDcEJWLGVBQWVLLE9BQU9NLEtBQUssRUFDM0JYLGVBQWVLLE9BQU9PLE1BQU07UUFFOUIsTUFBTUMsS0FBS0osS0FBS0ssS0FBSyxDQUFDVCxPQUFPTSxLQUFLLEdBQUdIO1FBQ3JDLE1BQU1PLEtBQUtOLEtBQUtLLEtBQUssQ0FBQ1QsT0FBT08sTUFBTSxHQUFHSjtRQUV0Q0QsZ0JBQWdCSSxLQUFLLEdBQUdFO1FBQ3hCTixnQkFBZ0JLLE1BQU0sR0FBR0c7UUFFekJaLElBQUlhLFNBQVMsQ0FBQ1gsUUFBUSxHQUFHLEdBQUdRLElBQUlFO1FBRWhDcEIsV0FBV3NCLFdBQVcsQ0FDcEIsTUFBTVYsZ0JBQWdCVyxhQUFhLENBQUM7WUFBRUMsTUFBTTtRQUFZO0lBRTVEO0FBQ0YsR0FDQTtJQUFFQyxTQUFTO0FBQUsiLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL3Jlc2l6ZUltYWdlLndvcmtlci50cyIsInNvdXJjZVJvb3QiOiIiLCJpZ25vcmVMaXN0IjpbXX0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/resizeImage.worker.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["(pages-dir-node)/./utils/resizeImage.worker.ts"]();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;