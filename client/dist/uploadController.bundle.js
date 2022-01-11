/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/public/js/tools/dynamicTable.js":
/*!************************************************!*\
  !*** ./client/public/js/tools/dynamicTable.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFields\": () => (/* binding */ addFields)\n/* harmony export */ });\n\n\nfunction addFields(selector, tableSelector) {\n  const descField = document.querySelector(`.desc__${selector}`);\n  let identifier = descField.childElementCount;\n  let html;\n\n  if (identifier === 0) {\n    html = `<div class=\"descriptions\">\n    <div class=\"table__fields\">\n      <table class=\"input__table\">\n        <tr class=\"tr__heading\">\n          <th>NO</th>\n          <th>Penyebab</th>\n          <th>Penyelesaian</th>\n          <th>PIC</th>\n          <th>UKT</th>\n          <th>DL</th>\n          <th>RL</th>\n        </tr>\n        <tr>\n          <td>\n            <input\n              name=\"row__${selector}__input__desc__${identifier + 1}\"\n              type=\"number\"\n              min=\"1\"\n              value=${identifier + 1}\n              id=\"no__field\"\n              readonly\n            />\n          </td>\n          <td>\n            <textarea\n              name=\"row__${selector}__input__desc__${identifier + 1}\"\n              id=\"cause__field\"\n              class=\"large__text__field\"\n            ></textarea>\n          </td>\n          <td>\n            <textarea\n              name=\"row__${selector}__input__desc__${identifier + 1}\"\n              id=\"solution__field\"\n              class=\"large__text__field\"\n            ></textarea>\n          </td>\n          <td>\n            <textarea\n              name=\"row__${selector}__input__desc__${identifier + 1}\"\n              id=\"PIC__field\"\n              class=\"small__text__field\"\n            ></textarea>\n          </td>\n          <td>\n            <textarea\n              name=\"row__${selector}__input__desc__${identifier + 1}\"\n              id=\"UKT__field\"\n              class=\"small__text__field\"\n            ></textarea>\n          </td>\n          <td>\n            <textarea\n              name=\"row__${selector}__input__desc__${identifier + 1}\"\n              id=\"DL__field\"\n              class=\"small__text__field\"\n            ></textarea>\n          </td>\n          <td>\n            <textarea\n              name=\"row__${selector}__input__desc__${identifier + 1}\"\n              id=\"RL__field\"\n              class=\"small__text__field last\"\n            ></textarea>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>`;\n    descField.insertAdjacentHTML(\"beforeend\", html);\n  } else {\n    identifier = tableSelector.childElementCount;\n    html = `<tr>\n      <td>\n        <input\n          name=\"row__${selector}__input__desc__${identifier + 1}\"\n          type=\"number\"\n          min=\"1\"\n          value=${identifier + 1}\n          id=\"no__field\"\n          readonly\n        />\n      </td>\n      <td>\n        <textarea\n          name=\"row__${selector}__input__desc__${identifier + 1}\"\n          id=\"cause__field\"\n          class=\"large__text__field\"\n        ></textarea>\n      </td>\n      <td>\n        <textarea\n          name=\"row__${selector}__input__desc__${identifier + 1}\"\n          id=\"solution__field\"\n          class=\"large__text__field\"\n        ></textarea>\n      </td>\n      <td>\n        <textarea\n          name=\"row__${selector}__input__desc__${identifier + 1}\"\n          id=\"PIC__field\"\n          class=\"small__text__field\"\n        ></textarea>\n      </td>\n      <td>\n        <textarea\n          name=\"row__${selector}__input__desc__${identifier + 1}\"\n          id=\"UKT__field\"\n          class=\"small__text__field\"\n        ></textarea>\n      </td>\n      <td>\n        <textarea\n          name=\"row__${selector}__input__desc__${identifier + 1}\"\n          id=\"DL__field\"\n          class=\"small__text__field\"\n        ></textarea>\n      </td>\n      <td>\n        <textarea\n          name=\"row__${selector}__input__desc__${identifier + 1}\"\n          id=\"RL__field\"\n          class=\"small__text__field\"\n        ></textarea>\n      </td>\n    </tr>`;\n    tableSelector.insertAdjacentHTML(\"beforeend\", html);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://app/./client/public/js/tools/dynamicTable.js?");

/***/ }),

/***/ "./client/public/js/uploadController.js":
/*!**********************************************!*\
  !*** ./client/public/js/uploadController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools_dynamicTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/dynamicTable */ \"./client/public/js/tools/dynamicTable.js\");\n\n\n\nconst focusedInput = document.querySelector(\"#row__1__input__1\");\nconst textFieldParent = document.querySelectorAll(\".row\");\nconst specialInput = document.querySelectorAll(\".special__input\");\nlet tableSelector;\n\nfunction setSpecialInput(inputs) {\n  inputs.forEach((input) => {\n    input.setAttribute(\n      \"oninvalid\",\n      \"this.setCustomValidity('Input ini hanya menerima parameter 0 atau 1')\"\n    );\n    input.setAttribute(\"oninput\", \"this.setCustomValidity('')\");\n  });\n}\n\nfunction textFieldBtnHandler() {\n  textFieldParent.forEach((field) => {\n    field.addEventListener(\"click\", (e) => {\n      const parentSelector = e.target.closest(\".row\").dataset.id;\n      const descField = document.querySelector(`.desc__${parentSelector}`);\n\n      if (e.target.classList.contains(\"add__field\")) {\n        e.target.previousElementSibling.classList.remove(\"element-hidden\");\n        !tableSelector\n          ? (0,_tools_dynamicTable__WEBPACK_IMPORTED_MODULE_0__.addFields)(parentSelector)\n          : (0,_tools_dynamicTable__WEBPACK_IMPORTED_MODULE_0__.addFields)(parentSelector, tableSelector);\n        tableSelector =\n          e.target.parentElement.previousElementSibling.children[0].children[0]\n            .children[0];\n\n        if (\n          e.target.parentElement.previousElementSibling.children[0].children[0]\n            .children[0].childElementCount === 10\n        )\n          e.target.classList.add(\"element-hidden\");\n      }\n\n      if (e.target.classList.contains(\"delete__field\")) {\n        e.target.nextElementSibling.classList.remove(\"element-hidden\");\n        const tableField = descField.children[0].children[0].children;\n        tableField[0].children.length === 1\n          ? descField.lastElementChild.remove()\n          : tableField[0].removeChild(tableField[0].lastElementChild);\n\n        if (!descField.lastElementChild)\n          e.target.classList.add(\"element-hidden\");\n      }\n    });\n  });\n}\n\nfunction start() {\n  setSpecialInput(specialInput);\n  focusedInput.focus();\n  textFieldBtnHandler();\n}\n\nstart();\n\n// ____________________Populate Form (testing tools)_________________________________ //\n\nfunction placeholderVal() {\n  const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\n  const randomData = Math.floor(Math.random() * arr.length);\n  return arr[randomData];\n}\n\nfunction placeholderVal2() {\n  const arr = [0, 1];\n  const randomData = Math.floor(Math.random() * arr.length);\n  return arr[randomData];\n}\n\nconst generateData = document.querySelector(\".populateData\");\ngenerateData.addEventListener(\"click\", () => {\n  function percentageRow() {\n    for (let i = 1; i <= 11; i++) {\n      for (let j = 1; j <= 6; j++) {\n        if (!document.querySelector(`#row__${i}__input__${j}`)) {\n          continue;\n        } else {\n          document.querySelector(`#row__${i}__input__${j}`).value =\n            placeholderVal();\n        }\n      }\n    }\n  }\n\n  function notPercentageRow() {\n    for (let i = 1; i <= 11; i++) {\n      for (let j = 1; j <= 6; j++) {\n        if (!document.querySelector(`#row__${i}__input__${j}__spc`)) {\n          continue;\n        } else {\n          document.querySelector(`#row__${i}__input__${j}__spc`).value =\n            placeholderVal2();\n        }\n      }\n    }\n  }\n\n  percentageRow();\n  notPercentageRow();\n});\n\n\n//# sourceURL=webpack://app/./client/public/js/uploadController.js?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/public/js/uploadController.js");
/******/ 	
/******/ })()
;