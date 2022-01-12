/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/js/tools/dynamicInputField.js":
/*!**************************************************!*\
  !*** ./client/src/js/tools/dynamicInputField.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFields": () => (/* binding */ addFields)
/* harmony export */ });


const addFields = (selector, tableSelector) => {
  const descField = document.querySelector(`.desc__${selector}`);
  let identifier = descField.childElementCount;
  let html;

  if (identifier === 0) {
    html = `<div class="descriptions">
    <div class="table__fields">
      <table class="input__table">
        <tr class="tr__heading">
          <th>NO</th>
          <th>Penyebab</th>
          <th>Penyelesaian</th>
          <th>PIC</th>
          <th>UKT</th>
          <th>DL</th>
          <th>RL</th>
        </tr>
        <tr>
          <td>
            <input
              name="row__${selector}__input__desc__${identifier + 1}"
              type="number"
              min="1"
              value=${identifier + 1}
              id="no__field"
              readonly
            />
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="cause__field"
              class="large__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="solution__field"
              class="large__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="PIC__field"
              class="small__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="UKT__field"
              class="small__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="DL__field"
              class="small__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="RL__field"
              class="small__text__field last"
            ></textarea>
          </td>
        </tr>
      </table>
    </div>
  </div>`;
    descField.insertAdjacentHTML("beforeend", html);
  } else {
    identifier = tableSelector.childElementCount;
    html = `<tr>
      <td>
        <input
          name="row__${selector}__input__desc__${identifier + 1}"
          type="number"
          min="1"
          value=${identifier + 1}
          id="no__field"
          readonly
        />
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="cause__field"
          class="large__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="solution__field"
          class="large__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="PIC__field"
          class="small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="UKT__field"
          class="small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="DL__field"
          class="small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="RL__field"
          class="small__text__field"
        ></textarea>
      </td>
    </tr>`;
    tableSelector.insertAdjacentHTML("beforeend", html);
  }
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./client/src/js/uploadController.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_dynamicInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/dynamicInputField */ "./client/src/js/tools/dynamicInputField.js");



const focusedInput = document.querySelector("#row__1__input__1");
const textFieldParent = document.querySelectorAll(".row");
const specialInput = document.querySelectorAll(".special__input");
const maxTextField = 5;
let tableSelector;

function setSpecialInput(inputs) {
  inputs.forEach((input) => {
    input.setAttribute(
      "oninvalid",
      "this.setCustomValidity('Input ini hanya menerima parameter 0 atau 1')"
    );
    input.setAttribute("oninput", "this.setCustomValidity('')");
  });
}

function textFieldBtnHandler() {
  textFieldParent.forEach((field) => {
    field.addEventListener("click", (e) => {
      const parentSelector = e.target.closest(".row").dataset.id;
      const descField = document.querySelector(`.desc__${parentSelector}`);

      if (e.target.classList.contains("add__field")) {
        e.target.previousElementSibling.classList.remove("element-hidden");
        !tableSelector
          ? (0,_tools_dynamicInputField__WEBPACK_IMPORTED_MODULE_0__.addFields)(parentSelector)
          : (0,_tools_dynamicInputField__WEBPACK_IMPORTED_MODULE_0__.addFields)(parentSelector, tableSelector);
        tableSelector =
          e.target.parentElement.previousElementSibling.children[0].children[0]
            .children[0];

        if (tableSelector.childElementCount === maxTextField)
          e.target.classList.add("element-hidden");
      }

      if (e.target.classList.contains("delete__field")) {
        e.target.nextElementSibling.classList.remove("element-hidden");
        const tableField = descField.children[0].children[0].children;
        tableField[0].children.length === 1
          ? descField.lastElementChild.remove()
          : tableField[0].removeChild(tableField[0].lastElementChild);

        if (!descField.lastElementChild)
          e.target.classList.add("element-hidden");
      }
    });
  });
}

function start() {
  setSpecialInput(specialInput);
  focusedInput.focus();
  textFieldBtnHandler();
}

start();

// ____________________Populate Form (testing tools)_________________________________ //

function placeholderVal() {
  const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const randomData = Math.floor(Math.random() * arr.length);
  return arr[randomData];
}

function placeholderVal2() {
  const arr = [0, 1];
  const randomData = Math.floor(Math.random() * arr.length);
  return arr[randomData];
}

const generateData = document.querySelector(".populateData");
generateData.addEventListener("click", () => {
  function percentageRow() {
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 6; j++) {
        if (!document.querySelector(`#row__${i}__input__${j}`)) {
          continue;
        } else {
          document.querySelector(`#row__${i}__input__${j}`).value =
            placeholderVal();
        }
      }
    }
  }

  function notPercentageRow() {
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 6; j++) {
        if (!document.querySelector(`#row__${i}__input__${j}__spc`)) {
          continue;
        } else {
          document.querySelector(`#row__${i}__input__${j}__spc`).value =
            placeholderVal2();
        }
      }
    }
  }

  percentageRow();
  notPercentageRow();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztBQUM3QixzQkFBc0IsUUFBUTtBQUM5Qiw2Q0FBNkMsRUFBRSxXQUFXLEVBQUU7QUFDNUQ7QUFDQSxVQUFVO0FBQ1YsMENBQTBDLEVBQUUsV0FBVyxFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixzQkFBc0IsUUFBUTtBQUM5Qiw2Q0FBNkMsRUFBRSxXQUFXLEVBQUU7QUFDNUQ7QUFDQSxVQUFVO0FBQ1YsMENBQTBDLEVBQUUsV0FBVyxFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jbGllbnQvc3JjL2pzL3Rvb2xzL2R5bmFtaWNJbnB1dEZpZWxkLmpzIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcC8uL2NsaWVudC9zcmMvanMvdXBsb2FkQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYWRkRmllbGRzID0gKHNlbGVjdG9yLCB0YWJsZVNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZXNjX18ke3NlbGVjdG9yfWApO1xuICBsZXQgaWRlbnRpZmllciA9IGRlc2NGaWVsZC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgbGV0IGh0bWw7XG5cbiAgaWYgKGlkZW50aWZpZXIgPT09IDApIHtcbiAgICBodG1sID0gYDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2ZpZWxkc1wiPlxuICAgICAgPHRhYmxlIGNsYXNzPVwiaW5wdXRfX3RhYmxlXCI+XG4gICAgICAgIDx0ciBjbGFzcz1cInRyX19oZWFkaW5nXCI+XG4gICAgICAgICAgPHRoPk5PPC90aD5cbiAgICAgICAgICA8dGg+UGVueWViYWI8L3RoPlxuICAgICAgICAgIDx0aD5QZW55ZWxlc2FpYW48L3RoPlxuICAgICAgICAgIDx0aD5QSUM8L3RoPlxuICAgICAgICAgIDx0aD5VS1Q8L3RoPlxuICAgICAgICAgIDx0aD5ETDwvdGg+XG4gICAgICAgICAgPHRoPlJMPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICB2YWx1ZT0ke2lkZW50aWZpZXIgKyAxfVxuICAgICAgICAgICAgICBpZD1cIm5vX19maWVsZFwiXG4gICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICBpZD1cImNhdXNlX19maWVsZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICBpZD1cInNvbHV0aW9uX19maWVsZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICBpZD1cIlBJQ19fZmllbGRcIlxuICAgICAgICAgICAgICBjbGFzcz1cInNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgaWQ9XCJVS1RfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgIGlkPVwiRExfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgIGlkPVwiUkxfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzbWFsbF9fdGV4dF9fZmllbGQgbGFzdFwiXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgICBkZXNjRmllbGQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xuICB9IGVsc2Uge1xuICAgIGlkZW50aWZpZXIgPSB0YWJsZVNlbGVjdG9yLmNoaWxkRWxlbWVudENvdW50O1xuICAgIGh0bWwgPSBgPHRyPlxuICAgICAgPHRkPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICB2YWx1ZT0ke2lkZW50aWZpZXIgKyAxfVxuICAgICAgICAgIGlkPVwibm9fX2ZpZWxkXCJcbiAgICAgICAgICByZWFkb25seVxuICAgICAgICAvPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgaWQ9XCJjYXVzZV9fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwibGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICBpZD1cInNvbHV0aW9uX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgIGlkPVwiUElDX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgIGlkPVwiVUtUX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgIGlkPVwiRExfX2ZpZWxkXCJcbiAgICAgICAgICBjbGFzcz1cInNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgaWQ9XCJSTF9fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwic21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+YDtcbiAgICB0YWJsZVNlbGVjdG9yLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgYWRkRmllbGRzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgYWRkRmllbGRzIH0gZnJvbSBcIi4vdG9vbHMvZHluYW1pY0lucHV0RmllbGRcIjtcblxuY29uc3QgZm9jdXNlZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3dfXzFfX2lucHV0X18xXCIpO1xuY29uc3QgdGV4dEZpZWxkUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb3dcIik7XG5jb25zdCBzcGVjaWFsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNwZWNpYWxfX2lucHV0XCIpO1xuY29uc3QgbWF4VGV4dEZpZWxkID0gNTtcbmxldCB0YWJsZVNlbGVjdG9yO1xuXG5mdW5jdGlvbiBzZXRTcGVjaWFsSW5wdXQoaW5wdXRzKSB7XG4gIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcbiAgICAgIFwib25pbnZhbGlkXCIsXG4gICAgICBcInRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJ0lucHV0IGluaSBoYW55YSBtZW5lcmltYSBwYXJhbWV0ZXIgMCBhdGF1IDEnKVwiXG4gICAgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsIFwidGhpcy5zZXRDdXN0b21WYWxpZGl0eSgnJylcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0ZXh0RmllbGRCdG5IYW5kbGVyKCkge1xuICB0ZXh0RmllbGRQYXJlbnQuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFNlbGVjdG9yID0gZS50YXJnZXQuY2xvc2VzdChcIi5yb3dcIikuZGF0YXNldC5pZDtcbiAgICAgIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZXNjX18ke3BhcmVudFNlbGVjdG9yfWApO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkX19maWVsZFwiKSkge1xuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgICAgIXRhYmxlU2VsZWN0b3JcbiAgICAgICAgICA/IGFkZEZpZWxkcyhwYXJlbnRTZWxlY3RvcilcbiAgICAgICAgICA6IGFkZEZpZWxkcyhwYXJlbnRTZWxlY3RvciwgdGFibGVTZWxlY3Rvcik7XG4gICAgICAgIHRhYmxlU2VsZWN0b3IgPVxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIGlmICh0YWJsZVNlbGVjdG9yLmNoaWxkRWxlbWVudENvdW50ID09PSBtYXhUZXh0RmllbGQpXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlX19maWVsZFwiKSkge1xuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgICBjb25zdCB0YWJsZUZpZWxkID0gZGVzY0ZpZWxkLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuICAgICAgICB0YWJsZUZpZWxkWzBdLmNoaWxkcmVuLmxlbmd0aCA9PT0gMVxuICAgICAgICAgID8gZGVzY0ZpZWxkLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgICA6IHRhYmxlRmllbGRbMF0ucmVtb3ZlQ2hpbGQodGFibGVGaWVsZFswXS5sYXN0RWxlbWVudENoaWxkKTtcblxuICAgICAgICBpZiAoIWRlc2NGaWVsZC5sYXN0RWxlbWVudENoaWxkKVxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBzZXRTcGVjaWFsSW5wdXQoc3BlY2lhbElucHV0KTtcbiAgZm9jdXNlZElucHV0LmZvY3VzKCk7XG4gIHRleHRGaWVsZEJ0bkhhbmRsZXIoKTtcbn1cblxuc3RhcnQoKTtcblxuLy8gX19fX19fX19fX19fX19fX19fX19Qb3B1bGF0ZSBGb3JtICh0ZXN0aW5nIHRvb2xzKV9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAvL1xuXG5mdW5jdGlvbiBwbGFjZWhvbGRlclZhbCgpIHtcbiAgY29uc3QgYXJyID0gWzAsIDEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MCwgOTAsIDEwMF07XG4gIGNvbnN0IHJhbmRvbURhdGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgcmV0dXJuIGFycltyYW5kb21EYXRhXTtcbn1cblxuZnVuY3Rpb24gcGxhY2Vob2xkZXJWYWwyKCkge1xuICBjb25zdCBhcnIgPSBbMCwgMV07XG4gIGNvbnN0IHJhbmRvbURhdGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgcmV0dXJuIGFycltyYW5kb21EYXRhXTtcbn1cblxuY29uc3QgZ2VuZXJhdGVEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1bGF0ZURhdGFcIik7XG5nZW5lcmF0ZURhdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZnVuY3Rpb24gcGVyY2VudGFnZVJvdygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA2OyBqKyspIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcm93X18ke2l9X19pbnB1dF9fJHtqfWApKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jvd19fJHtpfV9faW5wdXRfXyR7an1gKS52YWx1ZSA9XG4gICAgICAgICAgICBwbGFjZWhvbGRlclZhbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm90UGVyY2VudGFnZVJvdygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA2OyBqKyspIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcm93X18ke2l9X19pbnB1dF9fJHtqfV9fc3BjYCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcm93X18ke2l9X19pbnB1dF9fJHtqfV9fc3BjYCkudmFsdWUgPVxuICAgICAgICAgICAgcGxhY2Vob2xkZXJWYWwyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwZXJjZW50YWdlUm93KCk7XG4gIG5vdFBlcmNlbnRhZ2VSb3coKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9