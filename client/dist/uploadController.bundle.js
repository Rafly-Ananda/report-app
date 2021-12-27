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

eval("\n\nconst inputSections = document.querySelectorAll(\".input__section\");\nconst nextBtn = document.querySelector(\"#next__btn\");\nconst prevBtn = document.querySelector(\"#prev__btn\");\nconst submitBtn = document.querySelector(\"#submit__btn\");\n\nfunction sectionNavigation() {\n  let currSection = 1;\n  let maxSection = inputSections.length;\n\n  const goToSection = (section) => {\n    document.querySelector(`.input__row__${section}`).scrollIntoView({\n      behavior: \"smooth\",\n    });\n  };\n\n  const nextSection = () => {\n    currSection === maxSection ? (currSection = 1) : currSection++;\n    if (currSection === 11) {\n      nextBtn.classList.add(\"element-hidden\");\n      submitBtn.classList.remove(\"element-hidden\");\n    }\n    prevBtn.classList.remove(\"element-hidden\");\n    goToSection(currSection);\n  };\n\n  const prevSection = () => {\n    currSection === 1 ? null : currSection--;\n    if (currSection === 1) {\n      prevBtn.classList.add(\"element-hidden\");\n    }\n    nextBtn.classList.remove(\"element-hidden\");\n    submitBtn.classList.add(\"element-hidden\");\n    goToSection(currSection);\n  };\n\n  nextBtn.addEventListener(\"click\", () => {\n    nextSection();\n  });\n\n  prevBtn.addEventListener(\"click\", () => {\n    prevSection();\n  });\n}\n\nfunction observerSubmit() {\n  const options = {\n    threshold: 0.25,\n  };\n\n  const observer = new IntersectionObserver((section) => {\n    if (section[0].isIntersecting) {\n      submitBtn.classList.remove(\"element-hidden\");\n      nextBtn.classList.add(\"element-hidden\");\n    } else {\n      submitBtn.classList.add(\"element-hidden\");\n      nextBtn.classList.remove(\"element-hidden\");\n    }\n  }, options);\n\n  observer.observe(inputSections[10]);\n}\n\nfunction start() {\n  observerSubmit();\n  sectionNavigation();\n}\n\nstart();\n\n// ____________________Populate Form (Developer)_________________________________ //\n\nfunction placeholderVal() {\n  const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\n  const randomData = Math.floor(Math.random() * arr.length);\n  return arr[randomData];\n}\n\nconst generateData = document.querySelector(\".populateData\");\ngenerateData.addEventListener(\"click\", () => {\n  for (let i = 1; i <= 11; i++) {\n    for (let j = 1; j <= 6; j++) {\n      document.querySelector(`#row__${i}__input__${j}`).value =\n        placeholderVal();\n    }\n  }\n});\n\n\n//# sourceURL=webpack://app/./client/public/js/uploadController.js?");

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