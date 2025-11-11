"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_pages-dir-node_utils_sheetjs_ts";
exports.ids = ["_pages-dir-node_utils_sheetjs_ts"];
exports.modules = {

/***/ "(pages-dir-node)/./utils/sheetjs.ts":
/*!**************************!*\
  !*** ./utils/sheetjs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertSheet: () => (/* binding */ convertSheet)\n/* harmony export */ });\n/* harmony import */ var utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/functions */ \"(pages-dir-node)/./utils/functions.ts\");\n\nconst getSheetJs = async ()=>{\n    if (!window.XLSX) {\n        await (0,utils_functions__WEBPACK_IMPORTED_MODULE_0__.loadFiles)([\n            \"/System/SheetJS/xlsx.full.min.js\"\n        ]);\n    }\n    return window.XLSX;\n};\nconst convertSheet = async (fileData, extension)=>{\n    const sheetJs = await getSheetJs();\n    let numbers;\n    if (extension === \"numbers\") {\n        await (0,utils_functions__WEBPACK_IMPORTED_MODULE_0__.loadFiles)([\n            \"/System/SheetJS/xlsx.zahl.js\"\n        ]);\n        if (!window.XLSX_ZAHL_PAYLOAD) return Buffer.from(\"\");\n        numbers = window.XLSX_ZAHL_PAYLOAD;\n    }\n    return sheetJs.write(sheetJs.read(fileData), {\n        bookType: extension,\n        numbers,\n        type: \"buffer\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL3NoZWV0anMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDNEM7QUFTNUMsTUFBTUMsYUFBYTtJQUNqQixJQUFJLENBQUNDLE9BQU9DLElBQUksRUFBRTtRQUNoQixNQUFNSCwwREFBU0EsQ0FBQztZQUFDO1NBQW1DO0lBQ3REO0lBRUEsT0FBT0UsT0FBT0MsSUFBSTtBQUNwQjtBQUVPLE1BQU1DLGVBQWUsT0FDMUJDLFVBQ0FDO0lBRUEsTUFBTUMsVUFBVSxNQUFNTjtJQUN0QixJQUFJTztJQUVKLElBQUlGLGNBQWMsV0FBVztRQUMzQixNQUFNTiwwREFBU0EsQ0FBQztZQUFDO1NBQStCO1FBRWhELElBQUksQ0FBQ0UsT0FBT08saUJBQWlCLEVBQUUsT0FBT0MsT0FBT0MsSUFBSSxDQUFDO1FBRWxESCxVQUFVTixPQUFPTyxpQkFBaUI7SUFDcEM7SUFFQSxPQUFPRixRQUFRSyxLQUFLLENBQUNMLFFBQVFNLElBQUksQ0FBQ1IsV0FBVztRQUMzQ1MsVUFBVVI7UUFDVkU7UUFDQU8sTUFBTTtJQUNSO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXFNpdGVzXFxTaXRlc1xcZW0gZGVzZW52b2x2aW1lbnRvXFxQb3J0Zm9saW8yXFx1dGlsc1xcc2hlZXRqcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcclxuaW1wb3J0IHsgbG9hZEZpbGVzIH0gZnJvbSBcInV0aWxzL2Z1bmN0aW9uc1wiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgWExTWDogdHlwZW9mIFhMU1g7XHJcbiAgICBYTFNYX1pBSExfUEFZTE9BRD86IHN0cmluZztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFNoZWV0SnMgPSBhc3luYyAoKTogUHJvbWlzZTx0eXBlb2YgWExTWD4gPT4ge1xyXG4gIGlmICghd2luZG93LlhMU1gpIHtcclxuICAgIGF3YWl0IGxvYWRGaWxlcyhbXCIvU3lzdGVtL1NoZWV0SlMveGxzeC5mdWxsLm1pbi5qc1wiXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luZG93LlhMU1g7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udmVydFNoZWV0ID0gYXN5bmMgKFxyXG4gIGZpbGVEYXRhOiBCdWZmZXIsXHJcbiAgZXh0ZW5zaW9uOiBzdHJpbmdcclxuKTogUHJvbWlzZTxVaW50OEFycmF5PiA9PiB7XHJcbiAgY29uc3Qgc2hlZXRKcyA9IGF3YWl0IGdldFNoZWV0SnMoKTtcclxuICBsZXQgbnVtYmVyczogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBpZiAoZXh0ZW5zaW9uID09PSBcIm51bWJlcnNcIikge1xyXG4gICAgYXdhaXQgbG9hZEZpbGVzKFtcIi9TeXN0ZW0vU2hlZXRKUy94bHN4LnphaGwuanNcIl0pO1xyXG5cclxuICAgIGlmICghd2luZG93LlhMU1hfWkFITF9QQVlMT0FEKSByZXR1cm4gQnVmZmVyLmZyb20oXCJcIik7XHJcblxyXG4gICAgbnVtYmVycyA9IHdpbmRvdy5YTFNYX1pBSExfUEFZTE9BRDtcclxuICB9XHJcblxyXG4gIHJldHVybiBzaGVldEpzLndyaXRlKHNoZWV0SnMucmVhZChmaWxlRGF0YSksIHtcclxuICAgIGJvb2tUeXBlOiBleHRlbnNpb24gYXMgWExTWC5Cb29rVHlwZSxcclxuICAgIG51bWJlcnMsXHJcbiAgICB0eXBlOiBcImJ1ZmZlclwiLFxyXG4gIH0pIGFzIFVpbnQ4QXJyYXk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJsb2FkRmlsZXMiLCJnZXRTaGVldEpzIiwid2luZG93IiwiWExTWCIsImNvbnZlcnRTaGVldCIsImZpbGVEYXRhIiwiZXh0ZW5zaW9uIiwic2hlZXRKcyIsIm51bWJlcnMiLCJYTFNYX1pBSExfUEFZTE9BRCIsIkJ1ZmZlciIsImZyb20iLCJ3cml0ZSIsInJlYWQiLCJib29rVHlwZSIsInR5cGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/sheetjs.ts\n");

/***/ })

};
;