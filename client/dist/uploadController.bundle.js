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

eval("\n\nconst inputSection = document.querySelectorAll(\".input__section\");\nconst nextBtn = document.querySelector(\"#next__btn\");\nconst prevBtn = document.querySelector(\"#prev__btn\");\nconst submitBtn = document.querySelector(\"#submit__btn\");\n\nlet currSection = 1;\nlet maxSection = inputSection.length;\n\nconst goToSection = (section) => {\n  document.querySelector(`.input__row__${section}`).scrollIntoView({\n    behavior: \"smooth\",\n  });\n};\n\nconst nextSection = () => {\n  currSection === maxSection ? (currSection = 1) : currSection++;\n  if (currSection === 11) submitBtn.classList.remove(\"element-hidden\");\n  goToSection(currSection);\n};\n\nconst prevSection = () => {\n  currSection === 1 ? (currSection = maxSection) : currSection--;\n  goToSection(currSection);\n};\n\nnextBtn.addEventListener(\"click\", () => {\n  nextSection();\n});\n\nprevBtn.addEventListener(\"click\", () => {\n  prevSection();\n});\n\n\n//# sourceURL=webpack://app/./client/public/js/uploadController.js?");

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