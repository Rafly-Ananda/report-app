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

/***/ "./client/public/js/uploadController.js":
/*!**********************************************!*\
  !*** ./client/public/js/uploadController.js ***!
  \**********************************************/
/***/ (() => {

eval("\nconst focusedInput = document.querySelector(\"#row__1__input__1\");\nconst textFieldParent = document.querySelectorAll(\".row\");\nconst specialInput = document.querySelectorAll(\".special__input\");\n\nfunction setSpecialInput(inputs) {\n  inputs.forEach((input) => {\n    input.setAttribute(\n      \"oninvalid\",\n      \"this.setCustomValidity('Input ini hanya menerima parameter 0 atau 1')\"\n    );\n    input.setAttribute(\"oninput\", \"this.setCustomValidity('')\");\n  });\n}\n\nfunction addFields(selector) {\n  const descField = document.querySelector(`.desc__${selector}`);\n  const identifier = descField.childElementCount;\n\n  const html = `<div class=\"descriptions\">\n  <div class=\"table__fields\">\n    <table>\n      <tr>\n        <th>NO</th>\n        <th>Penyebab</th>\n        <th>Penyelesaian</th>\n        <th>PIC</th>\n        <th>UKT</th>\n        <th>DL</th>\n        <th>RL</th>\n      </tr>\n      <tr>\n        <td>\n          <input\n            name=\"row__${selector}__input__desc__${identifier + 1}\"\n            type=\"number\"\n            min=\"1\"\n            value=${identifier + 1}\n            id=\"no__field\"\n            readonly\n          />\n        </td>\n        <td>\n          <textarea\n            name=\"row__${selector}__input__desc__${identifier + 1}\"\n            id=\"cause__field\"\n            class=\"large__text__field\"\n          ></textarea>\n        </td>\n        <td>\n          <textarea\n            name=\"row__${selector}__input__desc__${identifier + 1}\"\n            id=\"solution__field\"\n            class=\"large__text__field\"\n          ></textarea>\n        </td>\n        <td>\n          <textarea\n            name=\"row__${selector}__input__desc__${identifier + 1}\"\n            id=\"PIC__field\"\n            class=\"small__text__field\"\n          ></textarea>\n        </td>\n        <td>\n          <textarea\n            name=\"row__${selector}__input__desc__${identifier + 1}\"\n            id=\"UKT__field\"\n            class=\"small__text__field\"\n          ></textarea>\n        </td>\n        <td>\n          <textarea\n            name=\"row__${selector}__input__desc__${identifier + 1}\"\n            id=\"DL__field\"\n            class=\"small__text__field\"\n          ></textarea>\n        </td>\n        <td>\n          <textarea\n            name=\"row__${selector}__input__desc__${identifier + 1}\"\n            id=\"RL__field\"\n            class=\"small__text__field\"\n          ></textarea>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>`;\n  descField.insertAdjacentHTML(\"beforeend\", html);\n}\n\nfunction textFieldBtnHandler() {\n  textFieldParent.forEach((field) => {\n    field.addEventListener(\"click\", (e) => {\n      const parentSelector = e.target.closest(\".row\").dataset.id;\n      const descField = document.querySelector(`.desc__${parentSelector}`);\n\n      if (e.target.classList.contains(\"add__field\")) {\n        e.target.previousElementSibling.classList.remove(\"element-hidden\");\n        addFields(parentSelector);\n      }\n\n      if (e.target.classList.contains(\"delete__field\")) {\n        descField.lastElementChild.remove();\n        if (!descField.lastElementChild)\n          e.target.classList.add(\"element-hidden\");\n      }\n    });\n  });\n}\n\nfunction start() {\n  setSpecialInput(specialInput);\n  focusedInput.focus();\n  textFieldBtnHandler();\n}\n\nstart();\n\n// ____________________Populate Form (testing tools)_________________________________ //\n\nfunction placeholderVal() {\n  const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\n  const randomData = Math.floor(Math.random() * arr.length);\n  return arr[randomData];\n}\n\nfunction placeholderVal2() {\n  const arr = [0, 1];\n  const randomData = Math.floor(Math.random() * arr.length);\n  return arr[randomData];\n}\n\nconst generateData = document.querySelector(\".populateData\");\ngenerateData.addEventListener(\"click\", () => {\n  function percentageRow() {\n    for (let i = 1; i <= 11; i++) {\n      for (let j = 1; j <= 6; j++) {\n        if (!document.querySelector(`#row__${i}__input__${j}`)) {\n          continue;\n        } else {\n          document.querySelector(`#row__${i}__input__${j}`).value =\n            placeholderVal();\n        }\n      }\n    }\n  }\n\n  function notPercentageRow() {\n    for (let i = 1; i <= 11; i++) {\n      for (let j = 1; j <= 6; j++) {\n        if (!document.querySelector(`#row__${i}__input__${j}__spc`)) {\n          continue;\n        } else {\n          document.querySelector(`#row__${i}__input__${j}__spc`).value =\n            placeholderVal2();\n        }\n      }\n    }\n  }\n\n  percentageRow();\n  notPercentageRow();\n});\n\n\n//# sourceURL=webpack://app/./client/public/js/uploadController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/public/js/uploadController.js"]();
/******/ 	
/******/ })()
;