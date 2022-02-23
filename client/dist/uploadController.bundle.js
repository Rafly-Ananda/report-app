/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/js/api/upload-api/dynamicDescInput.js":
/*!**********************************************************!*\
  !*** ./client/src/js/api/upload-api/dynamicDescInput.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFields": () => (/* binding */ addFields)
/* harmony export */ });


const addFields = (selector, tableSelector) => {
  const descField = document.querySelector(`.desc__${selector}`);
  let identifier = descField.childElementCount;
  let html;

  if (descField.children[0] === undefined) {
    null;
  } else {
    tableSelector = descField.children[0].children[0].children[0].children[0];
    identifier = tableSelector.childElementCount;
  }

  if (identifier === 0) {
    html = `
    <div class="descriptions">
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
                class="row__${selector}__input__desc__${identifier + 1}"
                readonly
              />
            </td>
            <td>
              <textarea
                name="row__${selector}__input__desc__${identifier + 1}"
                id="cause__field"
                class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
              ></textarea>
            </td>
            <td>
              <textarea
                name="row__${selector}__input__desc__${identifier + 1}"
                id="solution__field"
                class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
              ></textarea>
            </td>
            <td>
              <textarea
                name="row__${selector}__input__desc__${identifier + 1}"
                id="PIC__field"
                class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
              ></textarea>
            </td>
            <td>
              <textarea
                name="row__${selector}__input__desc__${identifier + 1}"
                id="UKT__field"
                class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
              ></textarea>
            </td>
            <td>
              <textarea
                name="row__${selector}__input__desc__${identifier + 1}"
                id="DL__field"
                class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
              ></textarea>
            </td>
            <td>
              <textarea
                name="row__${selector}__input__desc__${identifier + 1}"
                id="RL__field"
                class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field last"
              ></textarea>
            </td>
          </tr>
        </table>
      </div>
    </div>`;
    descField.insertAdjacentHTML("beforeend", html);
  } else {
    html = `<tr>
      <td>
        <input
          name="row__${selector}__input__desc__${identifier}"
          type="number"
          min="1"
          value=${identifier}
          id="no__field"
          class="row__${selector}__input__desc__${identifier}"
          readonly
        />
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier}"
          id="cause__field"
          class="row__${selector}__input__desc__${identifier} large__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier}"
          id="solution__field"
          class="row__${selector}__input__desc__${identifier} large__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier}"
          id="PIC__field"
          class="row__${selector}__input__desc__${identifier} small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier}"
          id="UKT__field"
          class="row__${selector}__input__desc__${identifier} small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier}"
          id="DL__field"
          class="row__${selector}__input__desc__${identifier} small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier}"
          id="RL__field"
          class="row__${selector}__input__desc__${identifier} small__text__field"
        ></textarea>
      </td>
    </tr>`;
    tableSelector.insertAdjacentHTML("beforeend", html);
  }
};




/***/ }),

/***/ "./client/src/js/api/upload-api/dynamicTableInput.js":
/*!***********************************************************!*\
  !*** ./client/src/js/api/upload-api/dynamicTableInput.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKpiTable": () => (/* binding */ addKpiTable)
/* harmony export */ });


const addKpiTable = (tableSelector, fillBefore) => {
  const identifier = tableSelector.childElementCount;

  const html = `
    <tr class="row__${identifier}">
        <td class="table__no">${identifier}</td>
        <td>
            <div class="heading__KPI">
            ${
              fillBefore
                ? `
                <h1 class="row__${identifier}__input__KPI" id="KPI__title"></h1>
                `
                : `
                <textarea
                    name="row__${identifier}__input__KPI"
                    class="row__${identifier}__input__KPI"
                    id="KPI__title"
                ></textarea>`
            }

            </div>
        </td>
        <td>
            ${
              fillBefore
                ? `<h1 class="SM__selector__${identifier}" id="SM__field"></h1>`
                : `
            <select class="SM__selector__${identifier}" id="SM__field">
                <option>-</option>
                <option value="percentage">100.00%</option>
                <option value="year">3/tahun</option>
            </select>
            `
            }

        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__${identifier}"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__2"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__3"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__4"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__5"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td class="last__input">
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__6"
            class="row__${identifier}__input"
            required
            />
        </td>
    </tr>`;
  tableSelector.insertAdjacentHTML("beforeend", html);
};




/***/ }),

/***/ "./client/src/js/api/upload-api/generateUploadDesc.js":
/*!************************************************************!*\
  !*** ./client/src/js/api/upload-api/generateUploadDesc.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateUploadInputFields": () => (/* binding */ generateUploadInputFields)
/* harmony export */ });


const generateUploadInputFields = (selector, ...data) => {
  let html;
  let tableSelector;
  const descField = document.querySelector(`.desc__${selector}`);
  let identifier = descField.childElementCount;

  if (descField.children[0] === undefined) {
    null;
  } else {
    tableSelector = descField.children[0].children[0].children[0];
    identifier = tableSelector.childElementCount;
  }

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
                class="row__${selector}__input__desc__${identifier + 1}"
                readonly
              />
            </td>
            <td>
              <textarea
                name="row__${selector}__input__desc__${identifier + 1}"
                id="cause__field"
                class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
              >${data[0][1]}</textarea>
            </td>
            <td class="large__field">
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="solution__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
            >${data[0][2]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="PIC__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            >${data[0][3]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="UKT__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            >${data[0][4]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="DL__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            >${data[0][5]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="RL__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field last"
            >${data[0][6]}</textarea>
            </td>
          </tr>
        </table>
    </div>
</div>`;
    descField.insertAdjacentHTML("beforeend", html);
  } else {
    html = `
    <tr>
      <td>
        <input
          name="row__${selector}__input__desc__${identifier + 1}"
          type="number"
          min="1"
          value=${identifier + 1}
          id="no__field"
          class="row__${selector}__input__desc__${identifier + 1}"
          readonly
        />
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="cause__field"
          class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
        >${data[0][1]}</textarea>
      </td>
      <td class="large__field">
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="solution__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
      >${data[0][2]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="PIC__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
      >${data[0][3]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="UKT__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
      >${data[0][4]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="DL__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
      >${data[0][5]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="RL__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field last"
      >${data[0][6]}</textarea>
      </td>
  </tr>`;
    tableSelector.insertAdjacentHTML("beforeend", html);
  }
};




/***/ }),

/***/ "./client/src/js/api/upload-api/inputAuth.js":
/*!***************************************************!*\
  !*** ./client/src/js/api/upload-api/inputAuth.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputAuth": () => (/* binding */ inputAuth)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dynamicTableInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamicTableInput */ "./client/src/js/api/upload-api/dynamicTableInput.js");
/* harmony import */ var _newDescField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newDescField */ "./client/src/js/api/upload-api/newDescField.js");
/* harmony import */ var _generateUploadDesc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateUploadDesc */ "./client/src/js/api/upload-api/generateUploadDesc.js");







const inputField = document.querySelector(".data__input");
const inputsContainer = document.querySelector(".inputs__container");
const descContaniner = document.querySelector(".descriptions__container");
const credentialField = document.querySelector(".credentials__container");
const dateIdentifier = document.querySelector(".date__identifier");
const inputMonthText = document.querySelector(".added__at");
const table = document.querySelector("table").children[0];
const addKPIField = document.querySelector(".add__field");
const outerBorder = document.querySelector(".outer__border");
const dynamicTableBtnContainer = document.querySelector(".dynamicBtn");

async function fillData(date) {
  addKPIField.classList.add("element-hidden");
  let tableFieldInputs;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/view/data/${date}`);

  const {
    data: { dataset_length, allTableData, textFieldData, dataset },
  } = response;

  // ? Intitializing table fields & desc fields before being filled
  for (let i = 0; i < dataset_length; i++) {
    (0,_dynamicTableInput__WEBPACK_IMPORTED_MODULE_1__.addKpiTable)(table, "fill"); // ? fill arg used to indicate whether this is a fill operation or just normal add field
    (0,_newDescField__WEBPACK_IMPORTED_MODULE_2__.addKpiDesc)(descContaniner, i + 1);
  }

  // ? Filling table inputs with previous data
  Object.values(allTableData).forEach((field, index) => {
    tableFieldInputs = document.querySelectorAll(`.row__${index + 1}__input`);

    tableFieldInputs.forEach((input, inputIndex) => {
      if (field[inputIndex] === "") {
        null;
      } else {
        input.value = field[inputIndex];
        input.readOnly = true;
      }
    });
  });

  // ? Filling table KPI title with previous state
  const tableFieldKPI = document.querySelectorAll("#KPI__title");
  tableFieldKPI.forEach((input, inputIndex) => {
    input.value = dataset[`row__${inputIndex + 1}`].rowTitle;
    input.textContent = dataset[`row__${inputIndex + 1}`].rowTitle;
    input.readOnly = true;
  });

  // ? Filling SM field with previous state
  const tableFieldSM = document.querySelectorAll("#SM__field");
  tableFieldSM.forEach((sm, inputIndex) => {
    // TODO : check if data given is in percentage or year and adjust it here (100.00% / 3/tahun)

    if (dataset[`row__${inputIndex + 1}`].data_type === "percentage") {
      sm.value = "percentage";
      sm.textContent = "100.00%";
    } else {
      sm.value = "year";
      sm.textContent = "3/tahun";
    }
    sm.readOnly = true;
  });

  // ! QUESTIONABLE FEATURE ?!?!?
  // ? Filling Desc Inputs With Previous Data
  // Object.entries(textFieldData).forEach((data) => {
  //   Object.values(data[1]).forEach((field) => {
  //     generateUploadInputFields(data[0].slice(5), field);
  //   });
  // });
}

function getPrevMonth(date) {
  let currMonth;
  let prevMonth;
  const month = date.slice(5);
  month.startsWith("0") ? (currMonth = +month.slice(1)) : (currMonth = +month);

  if (currMonth === 1) {
    prevMonth = String(currMonth).padStart(2, "0");
  } else {
    prevMonth = String(currMonth - 1).padStart(2, "0");
  }

  return `${date.slice(0, 4)}-${prevMonth}`;
}

function getNextMonth(date) {
  let currMonth;
  let nextMonth;
  let year = date.slice(0, 4);
  const month = date.slice(5);
  month.startsWith("0") ? (currMonth = +month.slice(1)) : (currMonth = +month);

  if (currMonth === 12) {
    nextMonth = String(currMonth).padStart(2, "0");
  } else {
    nextMonth = String(currMonth + 1).padStart(2, "0");
  }

  return `${year}-${nextMonth}`;
}

async function isValid(date) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/view/data/${date}`);
    return response;
  } catch (err) {
    return false;
  }
}

async function inputAuth(date) {
  // ? Format Input Month Text
  const formatter = (data) => {
    const str = data.split("-");
    const date = new Date();
    date.setMonth(+str[1].slice(1) - 1);
    const month = date.toLocaleString("default", { month: "long" });

    inputMonthText.textContent = `${month} ${str[0]}`;
  };

  formatter(date);

  // ? Checking Prev, Curr, & Next Month Status
  const prevMonth = getPrevMonth(date);
  const currMonth = date;
  const nextMonth = getNextMonth(date);
  const prevMonthRes = await isValid(prevMonth);
  const currMonthRes = await isValid(currMonth);
  const nextMonthRes = await isValid(nextMonth);

  const { data: prevMonthStatus } = prevMonthRes;
  const { data: currMonthStatus } = currMonthRes;
  const { data: nextMonthStatus } = nextMonthRes;

  if (currMonth.slice(5) === "01" || currMonth.slice(5) === "07") {
    if (currMonthStatus) {
      alert("Error, Data In This Month Is Already Filled !");
    } else {
      (0,_dynamicTableInput__WEBPACK_IMPORTED_MODULE_1__.addKpiTable)(table);
      (0,_newDescField__WEBPACK_IMPORTED_MODULE_2__.addKpiDesc)(descContaniner, 1);
      outerBorder.style.marginTop = "8vh";
      dateIdentifier.classList.remove("element-hidden");
      inputField.classList.remove("element-hidden");
      inputsContainer.classList.remove("flex-set");
      inputsContainer.style.overflowY = "scroll";
      credentialField.classList.add("element-hidden");
    }
  } else {
    if (prevMonthStatus && currMonthStatus && nextMonthStatus) {
      alert("Error, Data In This Month Is Already Filled !");
    }

    if (prevMonthStatus && currMonthStatus && !nextMonthStatus) {
      alert("Error, Data In This Month Is Already Filled !");
    }

    if (prevMonthStatus && !currMonthStatus && !nextMonthStatus) {
      fillData(prevMonth);
      dynamicTableBtnContainer.style.marginTop = 0;
      outerBorder.style.marginTop = "8vh";
      dateIdentifier.classList.remove("element-hidden");
      inputField.classList.remove("element-hidden");
      inputsContainer.classList.remove("flex-set");
      inputsContainer.style.overflowY = "scroll";
      credentialField.classList.add("element-hidden");
    }

    if (
      (!prevMonthStatus && !currMonthStatus && !nextMonthStatus) ||
      (!prevMonthStatus && !currMonthStatus && nextMonthStatus)
    ) {
      alert(
        "Error, Input Data In Previous Month First, Cannot Input Data Before Previous Month is Filled !"
      );
    }
  }
}




/***/ }),

/***/ "./client/src/js/api/upload-api/newDescField.js":
/*!******************************************************!*\
  !*** ./client/src/js/api/upload-api/newDescField.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKpiDesc": () => (/* binding */ addKpiDesc)
/* harmony export */ });


const addKpiDesc = (container, identifier) => {
  const html = `
    <div class="flex__container">
        <h1 class="heading__KPI">KPI ${identifier} Description</h1>
        <div class="row" data-id="${identifier}">
            <div class="desc__${identifier}"></div>
            <div class="dynamic__desc__btn__container">
                <button
                    class="delete__field element-hidden bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
                    type="button"
                >
                    -
                </button>
                <button
                    class="add__field bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
                    type="button"
                >
                    +
                </button>
            </div>
        </div>
    </div>
`;
  container.insertAdjacentHTML("beforeend", html);
};




/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.24.0"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/css/app.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/css/app.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 0 13vw;\n  height: 100vh;\n  background-color: #f0ffff;\n  font-family: \"Poppins\", sans-serif;\n  scroll-behavior: smooth;\n  overflow: hidden;\n}\n\n.side__nav {\n  position: fixed;\n  background-color: #0b3c58;\n  top: 0;\n  left: 0;\n  width: 13vw;\n  height: 100vh;\n  z-index: 10;\n}\n.side__nav .links__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n}\n.side__nav .links__container Button {\n  width: 8vw;\n  border-radius: 0.75em;\n  font-size: medium;\n  font-weight: 400;\n}\n.side__nav .links__container .links__container__top {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: space-around;\n  flex-direction: column;\n  height: 30vh;\n}\n.side__nav .links__container .links__container__top .logged__user {\n  border-radius: 0.5em;\n  max-width: 10vw;\n  padding: 1em;\n  word-wrap: break-word;\n}\n.side__nav .links__container .links__container__top .logged__user h1 {\n  color: #f0ffff;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n.side__nav .links__container .links__container__top .logged__user h1.second {\n  margin-top: 0.5em;\n}\n.side__nav .links__container .links__container__bot {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 5vh 0;\n}\n.side__nav .links__container .links__container__bot .links {\n  text-decoration: none;\n  margin: 1.5em;\n}\n\nmain .date__identifier {\n  position: absolute;\n  top: 2.75vh;\n  left: 36.5vw;\n}\nmain .date__identifier .date__id {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f0ffff;\n  width: 40vw;\n  height: 10vh;\n  border-top-left-radius: 1em;\n  border-bottom-right-radius: 1em;\n}\nmain .date__identifier .date__id h1 {\n  display: inline;\n  font-weight: 400;\n  font-size: 1.25rem;\n}\nmain .date__identifier .date__id h1.second {\n  font-weight: 500;\n  margin-left: 0.35em;\n  text-decoration: underline;\n}\n\n.outer__border {\n  border-radius: 5px;\n  background: #f0ffff;\n  box-shadow: inset 20px 20px 60px #ccd9d9, inset -20px -20px 60px #ffffff;\n  max-width: 70vw;\n  max-height: 75vh;\n}\n.outer__border .goTopBtn {\n  position: absolute;\n  top: 94.25vh;\n  left: 56vw;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.outer__border .goTopBtn img {\n  width: 2vw;\n}\n.outer__border .inputs__container {\n  width: 72vw;\n  height: 75vh;\n  overflow-y: hidden;\n}\n.outer__border .inputs__container .credentials__container {\n  width: 100%;\n  margin-top: 15vh;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper .page__identifier {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  top: 32vh;\n  margin-right: 1.5vw;\n  width: 30vw;\n  height: 5vw;\n  padding: 1em;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper .page__identifier h1 {\n  font-size: 2rem;\n  font-weight: 400;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper .credentials {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper .credentials .section__border__credential {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 1em;\n  padding: 2em;\n  margin-right: 1.5vw;\n  width: 30vw;\n  height: 30%;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper .credentials .section__border__credential .setter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30vw;\n  height: 30%;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper .credentials .section__border__credential .setter input {\n  border: 2px solid #222222;\n  border-radius: 0.25em;\n  background: #ffffff;\n  margin: 1em;\n}\n.outer__border .inputs__container .credentials__container .credentials__wrapper .credentials .section__border__credential button {\n  width: 5vw;\n}\n.outer__border .inputs__container .date__id {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f0ffff;\n  width: 40vw;\n  height: 10vh;\n  margin: 2em auto 2em auto;\n  scroll-margin-bottom: 200px;\n  padding: 1em;\n  border-top-left-radius: 1em;\n  border-bottom-right-radius: 1em;\n}\n.outer__border .inputs__container .date__id h1 {\n  display: inline;\n  font-weight: 400;\n  font-size: 1.25rem;\n}\n.outer__border .inputs__container .date__id h1.second {\n  font-weight: 500;\n  margin-left: 0.35em;\n  text-decoration: underline;\n}\n.outer__border .inputs__container .table__inputs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 3em;\n  margin-top: 3em;\n}\n.outer__border .inputs__container .table__inputs .table__container {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  width: 90%;\n  padding: 3em;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  width: 99%;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table {\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 0.5em;\n  overflow: hidden;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .heading {\n  color: #ffffff;\n  padding: 1em;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .heading,\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .spc_sm,\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .table__no {\n  text-align: center;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .tr__heading {\n  background-color: #0c4a6e;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table tr:nth-child(even) {\n  background-color: #e2e8f0;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table tr:nth-child(odd):not(:first-child) {\n  background-color: #f1f5f9;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table td {\n  text-align: left;\n  padding: 0.5em;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table input {\n  width: 4vw;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table select,\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table input {\n  border-radius: 0.2em;\n  text-align: center;\n  border: 1px solid #222222;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table input::-webkit-outer-spin-button,\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .last__input {\n  padding-right: 1.5em;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .last__heading {\n  padding-right: 2vw;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .heading__KPI {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-start;\n  height: 10vh;\n  width: 100%;\n  padding: 0.5em 0;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .heading__KPI h1 {\n  margin: auto 0;\n  text-align: left;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .heading__KPI textarea {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #222222;\n  border-radius: 0.2em;\n  resize: none;\n}\n.outer__border .inputs__container .table__inputs .table__container .table__wrapper table .heading__KPI::-webkit-scrollbar {\n  display: none;\n  /* Chrome, Safari and Opera */\n}\n.outer__border .inputs__container .table__inputs .table__container .dynamic__table__btn__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 2.5em 0 0 0;\n}\n.outer__border .inputs__container .table__inputs .table__container .dynamic__table__btn__container button {\n  margin: 0 0.5em;\n}\n.outer__border .inputs__container .descriptions__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 2em;\n}\n.outer__border .inputs__container .descriptions__container .flex__container {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-width: 90%;\n  margin: 0 0 1em 0;\n}\n.outer__border .inputs__container .descriptions__container .flex__container h1 {\n  padding: 1em 2em;\n  font-weight: 600;\n  margin: 1em;\n  text-align: center;\n  max-width: 40vw;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  margin-bottom: 1.5em;\n  background-color: #e2e8f0;\n  border-radius: 1em;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table {\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 0.5em;\n  overflow: hidden;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table th {\n  color: #ffffff;\n  padding: 1em;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table .tr__heading {\n  background-color: #0c4a6e;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table tr:nth-child(even) {\n  background-color: #e2e8f0;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table tr:nth-child(odd):not(:first-child) {\n  background-color: #f1f5f9;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table input,\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table textarea {\n  border: 1px solid #222222;\n  margin: 1em;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table td {\n  text-align: center;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table input {\n  width: 2vw;\n  border-radius: 0.2em;\n  text-align: center;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table input::-webkit-outer-spin-button,\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table textarea {\n  border-radius: 0.2em;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table .large__text__field {\n  width: 13vw;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table .small__text__field {\n  width: 4vw;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .descriptions .table__fields table #RL__field {\n  margin-right: 1em;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .dynamic__desc__btn__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 1.5em 0;\n  width: 100%;\n}\n.outer__border .inputs__container .descriptions__container .flex__container .row .dynamic__desc__btn__container button {\n  margin: 0 0.5em;\n}\n.outer__border .inputs__container .btn__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 3em;\n}\n.outer__border ::-webkit-scrollbar {\n  width: 4px;\n}\n.outer__border ::-webkit-scrollbar-track {\n  background-color: #cbd5e1;\n  border-radius: 1em;\n}\n.outer__border ::-webkit-scrollbar-thumb {\n  background-color: #64748b;\n  border-radius: 1em;\n}\n.outer__border .view__data__container {\n  width: 72vw;\n  height: 80vh;\n}\n.outer__border .view__data__container .select__data__section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 75vh;\n}\n.outer__border .view__data__container .select__data__section .credentials__container {\n  width: 100%;\n  margin-top: 15vh;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper .page__identifier {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  top: 32vh;\n  margin-right: 1.5vw;\n  width: 30vw;\n  height: 5vw;\n  padding: 1em;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper .page__identifier h1 {\n  font-size: 2rem;\n  font-weight: 400;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper .credentials {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper .credentials .section__border__credential {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 1em;\n  padding: 2em;\n  margin-right: 1.5vw;\n  width: 30vw;\n  height: 30%;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper .credentials .section__border__credential .setter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30vw;\n  height: 30%;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper .credentials .section__border__credential .setter input {\n  border: 2px solid #222222;\n  border-radius: 0.25em;\n  background: #ffffff;\n  margin: 1em;\n}\n.outer__border .view__data__container .select__data__section .credentials__container .credentials__wrapper .credentials .section__border__credential button {\n  width: 5vw;\n}\n.outer__border .view__data__container .view__section {\n  height: 75vh;\n  padding-right: 1.6em;\n  overflow-y: scroll;\n  padding-bottom: 4em;\n}\n.outer__border .view__data__container .view__section .export__btn__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2em;\n}\n.outer__border .view__data__container .view__section .export__btn__container .export__btn {\n  text-align: center;\n}\n.outer__border .view__data__container .view__section .data__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 80vh;\n  min-width: 65vw;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 72vw;\n  min-height: 100%;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  margin: 1.5em 1em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  width: 90%;\n  border-collapse: collapse;\n  border-radius: 0.5em;\n  overflow: hidden;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table th:last-child {\n  padding-right: 2.25em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table td:last-child {\n  padding-right: 1.5em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .heading {\n  color: #ffffff;\n  padding: 1em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .data {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4vw;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .heading,\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .spc_sm,\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .table__no {\n  text-align: center;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .tr__heading {\n  background-color: #0c4a6e;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table tr:nth-child(even) {\n  background-color: #e2e8f0;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table tr:nth-child(odd):not(:first-child) {\n  background-color: #f1f5f9;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table td {\n  text-align: left;\n  padding: 0.5em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table input::-webkit-outer-spin-button,\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .SM__ele {\n  padding-right: 1.85vw;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .BO {\n  padding-left: 1vw;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .heading__KPI {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-start;\n  height: 10vh;\n  width: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .heading__KPI h1 {\n  margin: auto 0;\n  text-align: left;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper__table .table__inputs table .heading__KPI::-webkit-scrollbar {\n  display: none;\n  /* Chrome, Safari and Opera */\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  flex-direction: column;\n  margin-top: 4em;\n  width: 90%;\n  min-height: 100%;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .section__heading {\n  margin: 3em 3em 0 3em;\n  font-weight: 600;\n  text-decoration: underline;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .chart__container {\n  background: #f0ffff;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(12.5px);\n  -webkit-backdrop-filter: blur(12.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  width: 50vw;\n  margin: 2.25em 0 3em 0;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .chart__container .PCP__1,\n.outer__border .view__data__container .view__section .data__container .data__wrapper .chart__container .PCP__1__NP {\n  margin: 2em;\n  font-weight: 600;\n  text-decoration: underline;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .chart__container canvas {\n  margin: 2em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 3em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table {\n  background-color: #e2e8f0;\n  width: 60vw;\n  border-collapse: collapse;\n  border-radius: 0.5em;\n  overflow: hidden;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table td {\n  border-right: 1.5px solid #f0ffff;\n  border-left: 1.5px solid #f0ffff;\n  padding: 1em;\n  text-align: center;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table th {\n  color: #ffffff;\n  padding: 1em;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table tr:nth-child(even) {\n  background-color: #e2e8f0;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table tr:nth-child(odd):not(:first-child) {\n  background-color: #f1f5f9;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table .tr__heading {\n  background-color: #0c4a6e;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table .large__field {\n  text-align: start;\n  width: 30%;\n  height: 100px;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table .no {\n  text-align: center;\n  width: 5%;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table .content__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table .content__container .content {\n  height: 10vh;\n  width: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n.outer__border .view__data__container .view__section .data__container .data__wrapper .descriptions table .content__container .content::-webkit-scrollbar {\n  display: none;\n  /* Chrome, Safari and Opera */\n}\n.outer__border .view__section::-webkit-scrollbar {\n  width: 4px;\n}\n.outer__border .view__section::-webkit-scrollbar-track {\n  background-color: #cbd5e1;\n  border-radius: 1em;\n}\n.outer__border .view__section::-webkit-scrollbar-thumb {\n  background-color: #64748b;\n  border-radius: 1em;\n}\n\n.element-hidden {\n  display: none;\n}\n\n.flex-set {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=app.css.map */\n", "",{"version":3,"sources":["webpack://./client/src/sass/app.scss","webpack://./client/src/css/app.css","webpack://./client/src/sass/_mixins.scss","webpack://./client/src/sass/_variables.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./client/src/css/app.css":
/*!********************************!*\
  !*** ./client/src/css/app.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./client/src/css/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./client/src/js/uploadController.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/app.css */ "./client/src/css/app.css");
/* harmony import */ var _api_upload_api_dynamicDescInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/upload-api/dynamicDescInput */ "./client/src/js/api/upload-api/dynamicDescInput.js");
/* harmony import */ var _api_upload_api_dynamicTableInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/upload-api/dynamicTableInput */ "./client/src/js/api/upload-api/dynamicTableInput.js");
/* harmony import */ var _api_upload_api_inputAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/upload-api/inputAuth */ "./client/src/js/api/upload-api/inputAuth.js");
/* harmony import */ var _api_upload_api_newDescField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/upload-api/newDescField */ "./client/src/js/api/upload-api/newDescField.js");








const tableContainer = document.querySelector(".table__container");
const descContaniner = document.querySelector(".descriptions__container");
const specialInput = document.querySelectorAll(".special__input");
const nextBtn = document.querySelector("#next__btn");
const submitBtn = document.querySelector("#submit__btn");
const loggedUser = document.querySelector(".username");

let minTableField = 4;
let maxTableField = 10;
let maxDescField = 5;
let tableSelector;

// ! need to implement this input auth
function setSpecialInput(inputs) {
  inputs.forEach((input) => {
    input.setAttribute(
      "oninvalid",
      "this.setCustomValidity('Input ini hanya menerima parameter 0 atau 1')"
    );
    input.setAttribute("oninput", "this.setCustomValidity('')");
  });
}

function dynamicTableHandler() {
  tableContainer.addEventListener("click", (e) => {
    const tableField = tableContainer.children[0].children[0].children[0];
    const fieldCount = tableField.childElementCount;

    if (e.target.classList.contains("add__field")) {
      e.target.previousElementSibling.classList.remove("element-hidden");
      (0,_api_upload_api_dynamicTableInput__WEBPACK_IMPORTED_MODULE_3__.addKpiTable)(tableField);
      (0,_api_upload_api_newDescField__WEBPACK_IMPORTED_MODULE_5__.addKpiDesc)(descContaniner, fieldCount);
      if (fieldCount > maxTableField) e.target.classList.add("element-hidden");
    }

    if (e.target.classList.contains("delete__field")) {
      e.target.nextElementSibling.classList.remove("element-hidden");
      tableField.lastElementChild.remove();
      descContaniner.lastElementChild.remove();
      if (fieldCount < minTableField) e.target.classList.add("element-hidden");
    }
  });
}

function dynamicDescFieldHandler() {
  const textFieldParent = document.querySelectorAll(".row");
  textFieldParent.forEach((field) => {
    field.addEventListener("click", (e) => {
      const parentSelector = e.target.closest(".row").dataset.id;
      const descField = document.querySelector(`.desc__${parentSelector}`);

      if (e.target.classList.contains("add__field")) {
        console.log("clicked");
        e.target.previousElementSibling.classList.remove("element-hidden");
        !tableSelector
          ? (0,_api_upload_api_dynamicDescInput__WEBPACK_IMPORTED_MODULE_2__.addFields)(parentSelector)
          : (0,_api_upload_api_dynamicDescInput__WEBPACK_IMPORTED_MODULE_2__.addFields)(parentSelector, tableSelector);
        tableSelector =
          e.target.parentElement.previousElementSibling.children[0].children[0]
            .children[0].children[0];

        if (tableSelector.childElementCount > maxDescField)
          e.target.classList.add("element-hidden");
      }

      if (e.target.classList.contains("delete__field")) {
        e.target.nextElementSibling.classList.remove("element-hidden");
        const tableField =
          descField.children[0].children[0].children[0].children[0];

        tableField.removeChild(tableField.lastElementChild);

        if (tableField.childElementCount === 1) {
          descField.lastElementChild.remove();
          e.target.classList.add("element-hidden");
        }
      }
    });
  });
}

function attachedEventToDynamicDesc() {
  descContaniner.addEventListener("click", (e) => {
    if (e.target.classList.contains("add__field")) {
      const parentSelector = e.target.closest(".row").dataset.id;
      e.target.previousElementSibling.classList.remove("element-hidden");
      !tableSelector
        ? (0,_api_upload_api_dynamicDescInput__WEBPACK_IMPORTED_MODULE_2__.addFields)(parentSelector)
        : (0,_api_upload_api_dynamicDescInput__WEBPACK_IMPORTED_MODULE_2__.addFields)(parentSelector, tableSelector);
      tableSelector =
        e.target.parentElement.previousElementSibling.children[0].children[0]
          .children[0].children[0];

      if (tableSelector.childElementCount > maxDescField)
        e.target.classList.add("element-hidden");
    }

    if (e.target.classList.contains("delete__field")) {
      const descField = document.querySelector(
        `.desc__${e.target.closest(".row").dataset.id}`
      );
      e.target.nextElementSibling.classList.remove("element-hidden");
      const tableField =
        descField.children[0].children[0].children[0].children[0];

      tableField.removeChild(tableField.lastElementChild);

      if (tableField.childElementCount === 1) {
        descField.lastElementChild.remove();
        e.target.classList.add("element-hidden");
      }
    }
  });
}

function submitHandler(period) {
  try {
    const dataCount =
      document.querySelector("table").children[0].childElementCount - 1;

    let temp = new Array();
    const dataset = {
      added_at: period,
      dataset_length: dataCount,
    };

    for (let i = 1; i <= dataCount; i++) {
      dataset[`row__${i}`] = new Object();
      dataset[`row__${i}`].tableData = new Array();
      dataset[`row__${i}`].descData = new Object();

      // ? Get KPI title
      document.querySelectorAll(`.row__${i}__input__KPI`).forEach((ele) => {
        if (ele.value === "") {
          throw new Error("All KPI field must be filled!");
        } else {
          dataset[`row__${i}`].rowTitle = ele.value;
        }
      });

      // ? Check if data in perceentage or year
      let SM__Selector = document.querySelector(`.SM__selector__${i}`).value;
      if (SM__Selector === "-") {
        throw new Error("All all SM field type must be filled! ");
      } else {
        dataset[`row__${i}`].data_type = SM__Selector;
      }

      // ? Get table data
      document.querySelectorAll(`.row__${i}__input`).forEach((ele) => {
        if (ele.value === "") {
          dataset[`row__${i}`].tableData.push("");
        } else {
          dataset[`row__${i}`].tableData.push(+ele.value);
        }
      });

      // ? Get desc data ( max 10 fields ) => safe value beacause we set max in DOM to 5
      for (let j = 1; j <= 10; j++) {
        temp = [];
        let field = document.querySelectorAll(`.row__${i}__input__desc__${j}`);
        if (field.length > 0) {
          field.forEach((ele) => {
            temp.push(ele.value);
          });
          dataset[`row__${i}`].descData[`${j}`] = temp;
        }
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().post("/upload", dataset).then(() => {
      alert("Finish uploading data ! ");
      window.location = "/view";
    });
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}

async function getLoggedUser() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("logged/user");
    loggedUser.textContent = response.data;
  } catch (error) {
    console.log(error);
  }
}

nextBtn.addEventListener("click", async () => {
  const date = document.querySelector("#period").value;

  if (date === "") {
    alert("please choose a correct period");
    return;
  } else {
    (0,_api_upload_api_inputAuth__WEBPACK_IMPORTED_MODULE_4__.inputAuth)(date);
  }
});

submitBtn.addEventListener("click", () => {
  const date = document.querySelector("#period").value;
  submitHandler(date);
});

function start() {
  setSpecialInput(specialInput);
  dynamicTableHandler();
  dynamicDescFieldHandler();
  attachedEventToDynamicDesc();
  getLoggedUser();
}

start();

function go() {
  const date = (document.querySelector("#period").value = "2022-02");

  (0,_api_upload_api_inputAuth__WEBPACK_IMPORTED_MODULE_4__.inputAuth)(date);
}

// go();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxXQUFXLFlBQVksS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLFFBQVEsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxLQUFLLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFlBQVksVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLGFBQWEsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLFVBQVUsV0FBVyxNQUFNLE1BQU0sY0FBYyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FB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ViwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBLE9BQU87O0FBRVA7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBLHVEQUF1RCxFQUFFLGlCQUFpQixFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCwwQkFBMEIsRUFBRSxlQUFlLEVBQUU7QUFDN0M7QUFDQTtBQUNBOztBQUVBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFTO0FBQ3BDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLG9FQUFTO0FBQ2I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLG9FQUFTO0FBQ1g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jbGllbnQvc3JjL2pzL2FwaS91cGxvYWQtYXBpL2R5bmFtaWNEZXNjSW5wdXQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vY2xpZW50L3NyYy9qcy9hcGkvdXBsb2FkLWFwaS9keW5hbWljVGFibGVJbnB1dC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9jbGllbnQvc3JjL2pzL2FwaS91cGxvYWQtYXBpL2dlbmVyYXRlVXBsb2FkRGVzYy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9jbGllbnQvc3JjL2pzL2FwaS91cGxvYWQtYXBpL2lucHV0QXV0aC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9jbGllbnQvc3JjL2pzL2FwaS91cGxvYWQtYXBpL25ld0Rlc2NGaWVsZC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9jbGllbnQvc3JjL2Nzcy9hcHAuY3NzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vY2xpZW50L3NyYy9jc3MvYXBwLmNzcz8xNTVjIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcC8uL2NsaWVudC9zcmMvanMvdXBsb2FkQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYWRkRmllbGRzID0gKHNlbGVjdG9yLCB0YWJsZVNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZXNjX18ke3NlbGVjdG9yfWApO1xuICBsZXQgaWRlbnRpZmllciA9IGRlc2NGaWVsZC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgbGV0IGh0bWw7XG5cbiAgaWYgKGRlc2NGaWVsZC5jaGlsZHJlblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB0YWJsZVNlbGVjdG9yID0gZGVzY0ZpZWxkLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgIGlkZW50aWZpZXIgPSB0YWJsZVNlbGVjdG9yLmNoaWxkRWxlbWVudENvdW50O1xuICB9XG5cbiAgaWYgKGlkZW50aWZpZXIgPT09IDApIHtcbiAgICBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fZmllbGRzXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cImlucHV0X190YWJsZVwiPlxuICAgICAgICAgIDx0ciBjbGFzcz1cInRyX19oZWFkaW5nXCI+XG4gICAgICAgICAgICA8dGg+Tk88L3RoPlxuICAgICAgICAgICAgPHRoPlBlbnllYmFiPC90aD5cbiAgICAgICAgICAgIDx0aD5QZW55ZWxlc2FpYW48L3RoPlxuICAgICAgICAgICAgPHRoPlBJQzwvdGg+XG4gICAgICAgICAgICA8dGg+VUtUPC90aD5cbiAgICAgICAgICAgIDx0aD5ETDwvdGg+XG4gICAgICAgICAgICA8dGg+Ukw8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT0ke2lkZW50aWZpZXIgKyAxfVxuICAgICAgICAgICAgICAgIGlkPVwibm9fX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIGlkPVwiY2F1c2VfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IGxhcmdlX190ZXh0X19maWVsZFwiXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzb2x1dGlvbl9fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gbGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICBpZD1cIlBJQ19fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICBpZD1cIlVLVF9fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICBpZD1cIkRMX19maWVsZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIGlkPVwiUkxfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZCBsYXN0XCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgIGRlc2NGaWVsZC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGA8dHI+XG4gICAgICA8dGQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgdmFsdWU9JHtpZGVudGlmaWVyfVxuICAgICAgICAgIGlkPVwibm9fX2ZpZWxkXCJcbiAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICByZWFkb25seVxuICAgICAgICAvPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICBpZD1cImNhdXNlX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfSBsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfVwiXG4gICAgICAgICAgaWQ9XCJzb2x1dGlvbl9fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllcn0gbGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllcn1cIlxuICAgICAgICAgIGlkPVwiUElDX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfVwiXG4gICAgICAgICAgaWQ9XCJVS1RfX2ZpZWxkXCJcbiAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICBpZD1cIkRMX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfVwiXG4gICAgICAgICAgaWQ9XCJSTF9fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllcn0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+YDtcbiAgICB0YWJsZVNlbGVjdG9yLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgYWRkRmllbGRzIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYWRkS3BpVGFibGUgPSAodGFibGVTZWxlY3RvciwgZmlsbEJlZm9yZSkgPT4ge1xuICBjb25zdCBpZGVudGlmaWVyID0gdGFibGVTZWxlY3Rvci5jaGlsZEVsZW1lbnRDb3VudDtcblxuICBjb25zdCBodG1sID0gYFxuICAgIDx0ciBjbGFzcz1cInJvd19fJHtpZGVudGlmaWVyfVwiPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0YWJsZV9fbm9cIj4ke2lkZW50aWZpZXJ9PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdfX0tQSVwiPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZmlsbEJlZm9yZVxuICAgICAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRfX0tQSVwiIGlkPVwiS1BJX190aXRsZVwiPjwvaDE+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogYFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dF9fS1BJXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0X19LUElcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIktQSV9fdGl0bGVcIlxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPmBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGZpbGxCZWZvcmVcbiAgICAgICAgICAgICAgICA/IGA8aDEgY2xhc3M9XCJTTV9fc2VsZWN0b3JfXyR7aWRlbnRpZmllcn1cIiBpZD1cIlNNX19maWVsZFwiPjwvaDE+YFxuICAgICAgICAgICAgICAgIDogYFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIlNNX19zZWxlY3Rvcl9fJHtpZGVudGlmaWVyfVwiIGlkPVwiU01fX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcmNlbnRhZ2VcIj4xMDAuMDAlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInllYXJcIj4zL3RhaHVuPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cblxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0X18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dF9fMlwiXG4gICAgICAgICAgICBjbGFzcz1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRfXzNcIlxuICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0X180XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dF9fNVwiXG4gICAgICAgICAgICBjbGFzcz1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxhc3RfX2lucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0X182XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPmA7XG4gIHRhYmxlU2VsZWN0b3IuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xufTtcblxuZXhwb3J0IHsgYWRkS3BpVGFibGUgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBnZW5lcmF0ZVVwbG9hZElucHV0RmllbGRzID0gKHNlbGVjdG9yLCAuLi5kYXRhKSA9PiB7XG4gIGxldCBodG1sO1xuICBsZXQgdGFibGVTZWxlY3RvcjtcbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlc2NfXyR7c2VsZWN0b3J9YCk7XG4gIGxldCBpZGVudGlmaWVyID0gZGVzY0ZpZWxkLmNoaWxkRWxlbWVudENvdW50O1xuXG4gIGlmIChkZXNjRmllbGQuY2hpbGRyZW5bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdGFibGVTZWxlY3RvciA9IGRlc2NGaWVsZC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICBpZGVudGlmaWVyID0gdGFibGVTZWxlY3Rvci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgfVxuXG4gIGlmIChpZGVudGlmaWVyID09PSAwKSB7XG4gICAgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25zXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhYmxlX19maWVsZHNcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwiaW5wdXRfX3RhYmxlXCI+XG4gICAgICAgICAgPHRyIGNsYXNzPVwidHJfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgIDx0aD5OTzwvdGg+XG4gICAgICAgICAgICA8dGg+UGVueWViYWI8L3RoPlxuICAgICAgICAgICAgPHRoPlBlbnllbGVzYWlhbjwvdGg+XG4gICAgICAgICAgICA8dGg+UElDPC90aD5cbiAgICAgICAgICAgIDx0aD5VS1Q8L3RoPlxuICAgICAgICAgICAgPHRoPkRMPC90aD5cbiAgICAgICAgICAgIDx0aD5STDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgIHZhbHVlPSR7aWRlbnRpZmllciArIDF9XG4gICAgICAgICAgICAgICAgaWQ9XCJub19fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjYXVzZV9fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gbGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgPiR7ZGF0YVswXVsxXX08L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImxhcmdlX19maWVsZFwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgIGlkPVwic29sdXRpb25fX2ZpZWxkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgPiR7ZGF0YVswXVsyXX08L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICBpZD1cIlBJQ19fZmllbGRcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgICAgICA+JHtkYXRhWzBdWzNdfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgIGlkPVwiVUtUX19maWVsZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgID4ke2RhdGFbMF1bNF19PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgaWQ9XCJETF9fZmllbGRcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgICAgICA+JHtkYXRhWzBdWzVdfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgIGlkPVwiUkxfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBzbWFsbF9fdGV4dF9fZmllbGQgbGFzdFwiXG4gICAgICAgICAgICA+JHtkYXRhWzBdWzZdfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuICAgIGRlc2NGaWVsZC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGBcbiAgICA8dHI+XG4gICAgICA8dGQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgIHZhbHVlPSR7aWRlbnRpZmllciArIDF9XG4gICAgICAgICAgaWQ9XCJub19fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICByZWFkb25seVxuICAgICAgICAvPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgaWQ9XCJjYXVzZV9fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gbGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgPiR7ZGF0YVswXVsxXX08L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImxhcmdlX19maWVsZFwiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgIGlkPVwic29sdXRpb25fX2ZpZWxkXCJcbiAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgPiR7ZGF0YVswXVsyXX08L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICBpZD1cIlBJQ19fZmllbGRcIlxuICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICA+JHtkYXRhWzBdWzNdfTwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgIGlkPVwiVUtUX19maWVsZFwiXG4gICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgID4ke2RhdGFbMF1bNF19PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgaWQ9XCJETF9fZmllbGRcIlxuICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICA+JHtkYXRhWzBdWzVdfTwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgIGlkPVwiUkxfX2ZpZWxkXCJcbiAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBzbWFsbF9fdGV4dF9fZmllbGQgbGFzdFwiXG4gICAgICA+JHtkYXRhWzBdWzZdfTwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICA8L3RyPmA7XG4gICAgdGFibGVTZWxlY3Rvci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdlbmVyYXRlVXBsb2FkSW5wdXRGaWVsZHMgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhZGRLcGlUYWJsZSB9IGZyb20gXCIuL2R5bmFtaWNUYWJsZUlucHV0XCI7XG5pbXBvcnQgeyBhZGRLcGlEZXNjIH0gZnJvbSBcIi4vbmV3RGVzY0ZpZWxkXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVVwbG9hZElucHV0RmllbGRzIH0gZnJvbSBcIi4vZ2VuZXJhdGVVcGxvYWREZXNjXCI7XG5cbmNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGFfX2lucHV0XCIpO1xuY29uc3QgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dHNfX2NvbnRhaW5lclwiKTtcbmNvbnN0IGRlc2NDb250YW5pbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lclwiKTtcbmNvbnN0IGNyZWRlbnRpYWxGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlZGVudGlhbHNfX2NvbnRhaW5lclwiKTtcbmNvbnN0IGRhdGVJZGVudGlmaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlX19pZGVudGlmaWVyXCIpO1xuY29uc3QgaW5wdXRNb250aFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZGVkX19hdFwiKTtcbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpLmNoaWxkcmVuWzBdO1xuY29uc3QgYWRkS1BJRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9fZmllbGRcIik7XG5jb25zdCBvdXRlckJvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0ZXJfX2JvcmRlclwiKTtcbmNvbnN0IGR5bmFtaWNUYWJsZUJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHluYW1pY0J0blwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZmlsbERhdGEoZGF0ZSkge1xuICBhZGRLUElGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gIGxldCB0YWJsZUZpZWxkSW5wdXRzO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL3ZpZXcvZGF0YS8ke2RhdGV9YCk7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgZGF0YXNldF9sZW5ndGgsIGFsbFRhYmxlRGF0YSwgdGV4dEZpZWxkRGF0YSwgZGF0YXNldCB9LFxuICB9ID0gcmVzcG9uc2U7XG5cbiAgLy8gPyBJbnRpdGlhbGl6aW5nIHRhYmxlIGZpZWxkcyAmIGRlc2MgZmllbGRzIGJlZm9yZSBiZWluZyBmaWxsZWRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhc2V0X2xlbmd0aDsgaSsrKSB7XG4gICAgYWRkS3BpVGFibGUodGFibGUsIFwiZmlsbFwiKTsgLy8gPyBmaWxsIGFyZyB1c2VkIHRvIGluZGljYXRlIHdoZXRoZXIgdGhpcyBpcyBhIGZpbGwgb3BlcmF0aW9uIG9yIGp1c3Qgbm9ybWFsIGFkZCBmaWVsZFxuICAgIGFkZEtwaURlc2MoZGVzY0NvbnRhbmluZXIsIGkgKyAxKTtcbiAgfVxuXG4gIC8vID8gRmlsbGluZyB0YWJsZSBpbnB1dHMgd2l0aCBwcmV2aW91cyBkYXRhXG4gIE9iamVjdC52YWx1ZXMoYWxsVGFibGVEYXRhKS5mb3JFYWNoKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICB0YWJsZUZpZWxkSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJvd19fJHtpbmRleCArIDF9X19pbnB1dGApO1xuXG4gICAgdGFibGVGaWVsZElucHV0cy5mb3JFYWNoKChpbnB1dCwgaW5wdXRJbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkW2lucHV0SW5kZXhdID09PSBcIlwiKSB7XG4gICAgICAgIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGZpZWxkW2lucHV0SW5kZXhdO1xuICAgICAgICBpbnB1dC5yZWFkT25seSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vID8gRmlsbGluZyB0YWJsZSBLUEkgdGl0bGUgd2l0aCBwcmV2aW91cyBzdGF0ZVxuICBjb25zdCB0YWJsZUZpZWxkS1BJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNLUElfX3RpdGxlXCIpO1xuICB0YWJsZUZpZWxkS1BJLmZvckVhY2goKGlucHV0LCBpbnB1dEluZGV4KSA9PiB7XG4gICAgaW5wdXQudmFsdWUgPSBkYXRhc2V0W2Byb3dfXyR7aW5wdXRJbmRleCArIDF9YF0ucm93VGl0bGU7XG4gICAgaW5wdXQudGV4dENvbnRlbnQgPSBkYXRhc2V0W2Byb3dfXyR7aW5wdXRJbmRleCArIDF9YF0ucm93VGl0bGU7XG4gICAgaW5wdXQucmVhZE9ubHkgPSB0cnVlO1xuICB9KTtcblxuICAvLyA/IEZpbGxpbmcgU00gZmllbGQgd2l0aCBwcmV2aW91cyBzdGF0ZVxuICBjb25zdCB0YWJsZUZpZWxkU00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1NNX19maWVsZFwiKTtcbiAgdGFibGVGaWVsZFNNLmZvckVhY2goKHNtLCBpbnB1dEluZGV4KSA9PiB7XG4gICAgLy8gVE9ETyA6IGNoZWNrIGlmIGRhdGEgZ2l2ZW4gaXMgaW4gcGVyY2VudGFnZSBvciB5ZWFyIGFuZCBhZGp1c3QgaXQgaGVyZSAoMTAwLjAwJSAvIDMvdGFodW4pXG5cbiAgICBpZiAoZGF0YXNldFtgcm93X18ke2lucHV0SW5kZXggKyAxfWBdLmRhdGFfdHlwZSA9PT0gXCJwZXJjZW50YWdlXCIpIHtcbiAgICAgIHNtLnZhbHVlID0gXCJwZXJjZW50YWdlXCI7XG4gICAgICBzbS50ZXh0Q29udGVudCA9IFwiMTAwLjAwJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbS52YWx1ZSA9IFwieWVhclwiO1xuICAgICAgc20udGV4dENvbnRlbnQgPSBcIjMvdGFodW5cIjtcbiAgICB9XG4gICAgc20ucmVhZE9ubHkgPSB0cnVlO1xuICB9KTtcblxuICAvLyAhIFFVRVNUSU9OQUJMRSBGRUFUVVJFID8hPyE/XG4gIC8vID8gRmlsbGluZyBEZXNjIElucHV0cyBXaXRoIFByZXZpb3VzIERhdGFcbiAgLy8gT2JqZWN0LmVudHJpZXModGV4dEZpZWxkRGF0YSkuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAvLyAgIE9iamVjdC52YWx1ZXMoZGF0YVsxXSkuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gICAgIGdlbmVyYXRlVXBsb2FkSW5wdXRGaWVsZHMoZGF0YVswXS5zbGljZSg1KSwgZmllbGQpO1xuICAvLyAgIH0pO1xuICAvLyB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJldk1vbnRoKGRhdGUpIHtcbiAgbGV0IGN1cnJNb250aDtcbiAgbGV0IHByZXZNb250aDtcbiAgY29uc3QgbW9udGggPSBkYXRlLnNsaWNlKDUpO1xuICBtb250aC5zdGFydHNXaXRoKFwiMFwiKSA/IChjdXJyTW9udGggPSArbW9udGguc2xpY2UoMSkpIDogKGN1cnJNb250aCA9ICttb250aCk7XG5cbiAgaWYgKGN1cnJNb250aCA9PT0gMSkge1xuICAgIHByZXZNb250aCA9IFN0cmluZyhjdXJyTW9udGgpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwcmV2TW9udGggPSBTdHJpbmcoY3Vyck1vbnRoIC0gMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG5cbiAgcmV0dXJuIGAke2RhdGUuc2xpY2UoMCwgNCl9LSR7cHJldk1vbnRofWA7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRNb250aChkYXRlKSB7XG4gIGxldCBjdXJyTW9udGg7XG4gIGxldCBuZXh0TW9udGg7XG4gIGxldCB5ZWFyID0gZGF0ZS5zbGljZSgwLCA0KTtcbiAgY29uc3QgbW9udGggPSBkYXRlLnNsaWNlKDUpO1xuICBtb250aC5zdGFydHNXaXRoKFwiMFwiKSA/IChjdXJyTW9udGggPSArbW9udGguc2xpY2UoMSkpIDogKGN1cnJNb250aCA9ICttb250aCk7XG5cbiAgaWYgKGN1cnJNb250aCA9PT0gMTIpIHtcbiAgICBuZXh0TW9udGggPSBTdHJpbmcoY3Vyck1vbnRoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH0gZWxzZSB7XG4gICAgbmV4dE1vbnRoID0gU3RyaW5nKGN1cnJNb250aCArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuXG4gIHJldHVybiBgJHt5ZWFyfS0ke25leHRNb250aH1gO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL3ZpZXcvZGF0YS8ke2RhdGV9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5wdXRBdXRoKGRhdGUpIHtcbiAgLy8gPyBGb3JtYXQgSW5wdXQgTW9udGggVGV4dFxuICBjb25zdCBmb3JtYXR0ZXIgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHN0ciA9IGRhdGEuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0TW9udGgoK3N0clsxXS5zbGljZSgxKSAtIDEpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImRlZmF1bHRcIiwgeyBtb250aDogXCJsb25nXCIgfSk7XG5cbiAgICBpbnB1dE1vbnRoVGV4dC50ZXh0Q29udGVudCA9IGAke21vbnRofSAke3N0clswXX1gO1xuICB9O1xuXG4gIGZvcm1hdHRlcihkYXRlKTtcblxuICAvLyA/IENoZWNraW5nIFByZXYsIEN1cnIsICYgTmV4dCBNb250aCBTdGF0dXNcbiAgY29uc3QgcHJldk1vbnRoID0gZ2V0UHJldk1vbnRoKGRhdGUpO1xuICBjb25zdCBjdXJyTW9udGggPSBkYXRlO1xuICBjb25zdCBuZXh0TW9udGggPSBnZXROZXh0TW9udGgoZGF0ZSk7XG4gIGNvbnN0IHByZXZNb250aFJlcyA9IGF3YWl0IGlzVmFsaWQocHJldk1vbnRoKTtcbiAgY29uc3QgY3Vyck1vbnRoUmVzID0gYXdhaXQgaXNWYWxpZChjdXJyTW9udGgpO1xuICBjb25zdCBuZXh0TW9udGhSZXMgPSBhd2FpdCBpc1ZhbGlkKG5leHRNb250aCk7XG5cbiAgY29uc3QgeyBkYXRhOiBwcmV2TW9udGhTdGF0dXMgfSA9IHByZXZNb250aFJlcztcbiAgY29uc3QgeyBkYXRhOiBjdXJyTW9udGhTdGF0dXMgfSA9IGN1cnJNb250aFJlcztcbiAgY29uc3QgeyBkYXRhOiBuZXh0TW9udGhTdGF0dXMgfSA9IG5leHRNb250aFJlcztcblxuICBpZiAoY3Vyck1vbnRoLnNsaWNlKDUpID09PSBcIjAxXCIgfHwgY3Vyck1vbnRoLnNsaWNlKDUpID09PSBcIjA3XCIpIHtcbiAgICBpZiAoY3Vyck1vbnRoU3RhdHVzKSB7XG4gICAgICBhbGVydChcIkVycm9yLCBEYXRhIEluIFRoaXMgTW9udGggSXMgQWxyZWFkeSBGaWxsZWQgIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkS3BpVGFibGUodGFibGUpO1xuICAgICAgYWRkS3BpRGVzYyhkZXNjQ29udGFuaW5lciwgMSk7XG4gICAgICBvdXRlckJvcmRlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjh2aFwiO1xuICAgICAgZGF0ZUlkZW50aWZpZXIuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgICBpbnB1dHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZsZXgtc2V0XCIpO1xuICAgICAgaW5wdXRzQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgICBjcmVkZW50aWFsRmllbGQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocHJldk1vbnRoU3RhdHVzICYmIGN1cnJNb250aFN0YXR1cyAmJiBuZXh0TW9udGhTdGF0dXMpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IsIERhdGEgSW4gVGhpcyBNb250aCBJcyBBbHJlYWR5IEZpbGxlZCAhXCIpO1xuICAgIH1cblxuICAgIGlmIChwcmV2TW9udGhTdGF0dXMgJiYgY3Vyck1vbnRoU3RhdHVzICYmICFuZXh0TW9udGhTdGF0dXMpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IsIERhdGEgSW4gVGhpcyBNb250aCBJcyBBbHJlYWR5IEZpbGxlZCAhXCIpO1xuICAgIH1cblxuICAgIGlmIChwcmV2TW9udGhTdGF0dXMgJiYgIWN1cnJNb250aFN0YXR1cyAmJiAhbmV4dE1vbnRoU3RhdHVzKSB7XG4gICAgICBmaWxsRGF0YShwcmV2TW9udGgpO1xuICAgICAgZHluYW1pY1RhYmxlQnRuQ29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgICBvdXRlckJvcmRlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjh2aFwiO1xuICAgICAgZGF0ZUlkZW50aWZpZXIuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgICBpbnB1dHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZsZXgtc2V0XCIpO1xuICAgICAgaW5wdXRzQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgICBjcmVkZW50aWFsRmllbGQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICghcHJldk1vbnRoU3RhdHVzICYmICFjdXJyTW9udGhTdGF0dXMgJiYgIW5leHRNb250aFN0YXR1cykgfHxcbiAgICAgICghcHJldk1vbnRoU3RhdHVzICYmICFjdXJyTW9udGhTdGF0dXMgJiYgbmV4dE1vbnRoU3RhdHVzKVxuICAgICkge1xuICAgICAgYWxlcnQoXG4gICAgICAgIFwiRXJyb3IsIElucHV0IERhdGEgSW4gUHJldmlvdXMgTW9udGggRmlyc3QsIENhbm5vdCBJbnB1dCBEYXRhIEJlZm9yZSBQcmV2aW91cyBNb250aCBpcyBGaWxsZWQgIVwiXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBpbnB1dEF1dGggfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhZGRLcGlEZXNjID0gKGNvbnRhaW5lciwgaWRlbnRpZmllcikgPT4ge1xuICBjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJmbGV4X19jb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGluZ19fS1BJXCI+S1BJICR7aWRlbnRpZmllcn0gRGVzY3JpcHRpb248L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgZGF0YS1pZD1cIiR7aWRlbnRpZmllcn1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjX18ke2lkZW50aWZpZXJ9XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHluYW1pY19fZGVzY19fYnRuX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVsZXRlX19maWVsZCBlbGVtZW50LWhpZGRlbiBiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC04MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS03MDAgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhZGRfX2ZpZWxkIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNzAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XG59O1xuXG5leHBvcnQgeyBhZGRLcGlEZXNjIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9DYW5jZWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICAgIHZhciByZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIHZhciBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgZnVuY3Rpb24gb25sb2FkZW5kKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09ICd0ZXh0JyB8fCAgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICB2YXIgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gJ0VUSU1FRE9VVCcgOiAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gZnVuY3Rpb24oY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCAoY2FuY2VsICYmIGNhbmNlbC50eXBlKSA/IG5ldyBDYW5jZWwoJ2NhbmNlbGVkJykgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5heGlvcy5WRVJTSU9OID0gcmVxdWlyZSgnLi9lbnYvZGF0YScpLnZlcnNpb247XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0F4aW9zRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcblxuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbihmdW5jdGlvbihjYW5jZWwpIHtcbiAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgIHZhciBpO1xuICAgIHZhciBsID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgfVxuICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbiA9IGZ1bmN0aW9uKG9uZnVsZmlsbGVkKSB7XG4gICAgdmFyIF9yZXNvbHZlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gKi9cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICB9XG59O1xuXG4vKipcbiAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAqL1xuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG52YXIgdmFsaWRhdG9yID0gcmVxdWlyZSgnLi4vaGVscGVycy92YWxpZGF0b3InKTtcblxudmFyIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsO1xuXG4gIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gIHZhciByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICB2YXIgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBpbnRlcmNlcHRvci5ydW5XaGVuID09PSAnZnVuY3Rpb24nICYmIGludGVyY2VwdG9yLnJ1bldoZW4oY29uZmlnKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB2YXIgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHZhciBwcm9taXNlO1xuXG4gIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcblxuICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgY2hhaW4gPSBjaGFpbi5jb25jYXQocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcblxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cblxuICB2YXIgbmV3Q29uZmlnID0gY29uZmlnO1xuICB3aGlsZSAocmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoKSB7XG4gICAgdmFyIG9uRnVsZmlsbGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB2YXIgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCk7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG9uUmVqZWN0ZWQoZXJyb3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBwcm9taXNlID0gZGlzcGF0Y2hSZXF1ZXN0KG5ld0NvbmZpZyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG4gIHdoaWxlIChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWQsXG4gICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvQ2FuY2VsJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsKCdjYW5jZWxlZCcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2Uuc3RhdHVzID8gdGhpcy5yZXNwb25zZS5zdGF0dXMgOiBudWxsXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG1lcmdlTWFwID0ge1xuICAgICd1cmwnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdtZXRob2QnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdkYXRhJzogdmFsdWVGcm9tQ29uZmlnMixcbiAgICAnYmFzZVVSTCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RyYW5zZm9ybVJlcXVlc3QnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc2Zvcm1SZXNwb25zZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3BhcmFtc1NlcmlhbGl6ZXInOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0aW1lb3V0JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndGltZW91dE1lc3NhZ2UnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd3aXRoQ3JlZGVudGlhbHMnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdhZGFwdGVyJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncmVzcG9uc2VUeXBlJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAneHNyZkNvb2tpZU5hbWUnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd4c3JmSGVhZGVyTmFtZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ29uVXBsb2FkUHJvZ3Jlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdvbkRvd25sb2FkUHJvZ3Jlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdkZWNvbXByZXNzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnbWF4Q29udGVudExlbmd0aCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ21heEJvZHlMZW5ndGgnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc3BvcnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwQWdlbnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwc0FnZW50JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnY2FuY2VsVG9rZW4nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdzb2NrZXRQYXRoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncmVzcG9uc2VFbmNvZGluZyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJzogbWVyZ2VEaXJlY3RLZXlzXG4gIH07XG5cbiAgdXRpbHMuZm9yRWFjaChPYmplY3Qua2V5cyhjb25maWcxKS5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIHZhciBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgdmFyIGNvbmZpZ1ZhbHVlID0gbWVyZ2UocHJvcCk7XG4gICAgKHV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZ1ZhbHVlKSAmJiBtZXJnZSAhPT0gbWVyZ2VEaXJlY3RLZXlzKSB8fCAoY29uZmlnW3Byb3BdID0gY29uZmlnVmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICB2YXIgY29udGV4dCA9IHRoaXMgfHwgZGVmYXVsdHM7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuLmNhbGwoY29udGV4dCwgZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vY29yZS9lbmhhbmNlRXJyb3InKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkocmF3VmFsdWUsIHBhcnNlciwgZW5jb2Rlcikge1xuICBpZiAodXRpbHMuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzLnRyaW0ocmF3VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuXG4gIHRyYW5zaXRpb25hbDoge1xuICAgIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICAgIGZvcmNlZEpTT05QYXJzaW5nOiB0cnVlLFxuICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG4gIH0sXG5cbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSB8fCAoaGVhZGVycyAmJiBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgdmFyIHRyYW5zaXRpb25hbCA9IHRoaXMudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICB2YXIgc2lsZW50SlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLnNpbGVudEpTT05QYXJzaW5nO1xuICAgIHZhciBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgdmFyIHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcgfHwgKGZvcmNlZEpTT05QYXJzaW5nICYmIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmIGRhdGEubGVuZ3RoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGVuaGFuY2VFcnJvcihlLCB0aGlzLCAnRV9KU09OX1BBUlNFJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidmVyc2lvblwiOiBcIjAuMjQuMFwiXG59OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuICh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWRVJTSU9OID0gcmVxdWlyZSgnLi4vZW52L2RhdGEnKS52ZXJzaW9uO1xuXG52YXIgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goZnVuY3Rpb24odHlwZSwgaSkge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxudmFyIGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3B0LCBvcHRzKSB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSkpO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICB2YXIgb3B0ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3NlcnRPcHRpb25zOiBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzOiB2YWxpZGF0b3JzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIudHJpbSA/IHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMCAwIDEzdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWRlX19uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M1ODtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTN2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLnNpZGVfX25hdiAubGlua3NfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5zaWRlX19uYXYgLmxpbmtzX19jb250YWluZXIgQnV0dG9uIHtcXG4gIHdpZHRoOiA4dnc7XFxuICBib3JkZXItcmFkaXVzOiAwLjc1ZW07XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5zaWRlX19uYXYgLmxpbmtzX19jb250YWluZXIgLmxpbmtzX19jb250YWluZXJfX3RvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAzMHZoO1xcbn1cXG4uc2lkZV9fbmF2IC5saW5rc19fY29udGFpbmVyIC5saW5rc19fY29udGFpbmVyX190b3AgLmxvZ2dlZF9fdXNlciB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIG1heC13aWR0aDogMTB2dztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLnNpZGVfX25hdiAubGlua3NfX2NvbnRhaW5lciAubGlua3NfX2NvbnRhaW5lcl9fdG9wIC5sb2dnZWRfX3VzZXIgaDEge1xcbiAgY29sb3I6ICNmMGZmZmY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5zaWRlX19uYXYgLmxpbmtzX19jb250YWluZXIgLmxpbmtzX19jb250YWluZXJfX3RvcCAubG9nZ2VkX191c2VyIGgxLnNlY29uZCB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG59XFxuLnNpZGVfX25hdiAubGlua3NfX2NvbnRhaW5lciAubGlua3NfX2NvbnRhaW5lcl9fYm90IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMCA1dmggMDtcXG59XFxuLnNpZGVfX25hdiAubGlua3NfX2NvbnRhaW5lciAubGlua3NfX2NvbnRhaW5lcl9fYm90IC5saW5rcyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDEuNWVtO1xcbn1cXG5cXG5tYWluIC5kYXRlX19pZGVudGlmaWVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMi43NXZoO1xcbiAgbGVmdDogMzYuNXZ3O1xcbn1cXG5tYWluIC5kYXRlX19pZGVudGlmaWVyIC5kYXRlX19pZCB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZmZmO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmZjtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFlbTtcXG59XFxubWFpbiAuZGF0ZV9faWRlbnRpZmllciAuZGF0ZV9faWQgaDEge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxubWFpbiAuZGF0ZV9faWRlbnRpZmllciAuZGF0ZV9faWQgaDEuc2Vjb25kIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tbGVmdDogMC4zNWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5vdXRlcl9fYm9yZGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDIwcHggNjBweCAjY2NkOWQ5LCBpbnNldCAtMjBweCAtMjBweCA2MHB4ICNmZmZmZmY7XFxuICBtYXgtd2lkdGg6IDcwdnc7XFxuICBtYXgtaGVpZ2h0OiA3NXZoO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuZ29Ub3BCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5NC4yNXZoO1xcbiAgbGVmdDogNTZ2dztcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5nb1RvcEJ0biBpbWcge1xcbiAgd2lkdGg6IDJ2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MnZ3O1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNXZoO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAucGFnZV9faWRlbnRpZmllciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZmZmO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzJ2aDtcXG4gIG1hcmdpbi1yaWdodDogMS41dnc7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogNXZ3O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5wYWdlX19pZGVudGlmaWVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLmNyZWRlbnRpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLmNyZWRlbnRpYWxzIC5zZWN0aW9uX19ib3JkZXJfX2NyZWRlbnRpYWwge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDMwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAuY3JlZGVudGlhbHMgLnNlY3Rpb25fX2JvcmRlcl9fY3JlZGVudGlhbCAuc2V0dGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMzAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5jcmVkZW50aWFscyAuc2VjdGlvbl9fYm9yZGVyX19jcmVkZW50aWFsIC5zZXR0ZXIgaW5wdXQge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzIyMjIyMjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAuY3JlZGVudGlhbHMgLnNlY3Rpb25fX2JvcmRlcl9fY3JlZGVudGlhbCBidXR0b24ge1xcbiAgd2lkdGg6IDV2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kYXRlX19pZCB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZmZmO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmZjtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcXG4gIHNjcm9sbC1tYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGF0ZV9faWQgaDEge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kYXRlX19pZCBoMS5zZWNvbmQge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjM1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICBtYXJnaW4tdG9wOiAzZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZmZmO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogM2VtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIHdpZHRoOiA5OSU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC5oZWFkaW5nIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC5oZWFkaW5nLFxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLnNwY19zbSxcXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC50YWJsZV9fbm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC50cl9faGVhZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIHRyOm50aC1jaGlsZChvZGQpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgdGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIGlucHV0IHtcXG4gIHdpZHRoOiA0dnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgc2VsZWN0LFxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyMjIyO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC5sYXN0X19pbnB1dCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSAubGFzdF9faGVhZGluZyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAydnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLmhlYWRpbmdfX0tQSSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIC8qIEZpcmVmb3ggKi9cXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSAuaGVhZGluZ19fS1BJIGgxIHtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSAuaGVhZGluZ19fS1BJIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC5oZWFkaW5nX19LUEk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAvKiBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC5keW5hbWljX190YWJsZV9fYnRuX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyLjVlbSAwIDAgMDtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC5keW5hbWljX190YWJsZV9fYnRuX19jb250YWluZXIgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCAwLjVlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCAwIDFlbSAwO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgaDEge1xcbiAgcGFkZGluZzogMWVtIDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNDB2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgdGgge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgLnRyX19oZWFkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgdHI6bnRoLWNoaWxkKG9kZCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSBpbnB1dCxcXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSB0ZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgaW5wdXQge1xcbiAgd2lkdGg6IDJ2dztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlIHRleHRhcmVhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlIC5sYXJnZV9fdGV4dF9fZmllbGQge1xcbiAgd2lkdGg6IDEzdnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgLnNtYWxsX190ZXh0X19maWVsZCB7XFxuICB3aWR0aDogNHZ3O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlICNSTF9fZmllbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5keW5hbWljX19kZXNjX19idG5fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZHluYW1pY19fZGVzY19fYnRuX19jb250YWluZXIgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCAwLjVlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5idG5fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA0cHg7XFxufVxcbi5vdXRlcl9fYm9yZGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MnZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC5zZWxlY3RfX2RhdGFfX3NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzV2aDtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAuc2VsZWN0X19kYXRhX19zZWN0aW9uIC5jcmVkZW50aWFsc19fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTV2aDtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAuc2VsZWN0X19kYXRhX19zZWN0aW9uIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnNlbGVjdF9fZGF0YV9fc2VjdGlvbiAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLnBhZ2VfX2lkZW50aWZpZXIge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMydmg7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDV2dztcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAuc2VsZWN0X19kYXRhX19zZWN0aW9uIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAucGFnZV9faWRlbnRpZmllciBoMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC5zZWxlY3RfX2RhdGFfX3NlY3Rpb24gLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5jcmVkZW50aWFscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC5zZWxlY3RfX2RhdGFfX3NlY3Rpb24gLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5jcmVkZW50aWFscyAuc2VjdGlvbl9fYm9yZGVyX19jcmVkZW50aWFsIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjV2dztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAzMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnNlbGVjdF9fZGF0YV9fc2VjdGlvbiAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLmNyZWRlbnRpYWxzIC5zZWN0aW9uX19ib3JkZXJfX2NyZWRlbnRpYWwgLnNldHRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDMwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAuc2VsZWN0X19kYXRhX19zZWN0aW9uIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAuY3JlZGVudGlhbHMgLnNlY3Rpb25fX2JvcmRlcl9fY3JlZGVudGlhbCAuc2V0dGVyIGlucHV0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMjIyMjI7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnNlbGVjdF9fZGF0YV9fc2VjdGlvbiAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLmNyZWRlbnRpYWxzIC5zZWN0aW9uX19ib3JkZXJfX2NyZWRlbnRpYWwgYnV0dG9uIHtcXG4gIHdpZHRoOiA1dnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24ge1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgcGFkZGluZy1yaWdodDogMS42ZW07XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBwYWRkaW5nLWJvdHRvbTogNGVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5leHBvcnRfX2J0bl9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmV4cG9ydF9fYnRuX19jb250YWluZXIgLmV4cG9ydF9fYnRuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBtaW4td2lkdGg6IDY1dnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNzJ2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMS41ZW0gMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIHRoOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMi4yNWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIHRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMS41ZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLmhlYWRpbmcge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLmRhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0dnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLmhlYWRpbmcsXFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuc3BjX3NtLFxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLnRhYmxlX19ubyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLnRyX19oZWFkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgdHI6bnRoLWNoaWxkKG9kZCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSB0ZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLlNNX19lbGUge1xcbiAgcGFkZGluZy1yaWdodDogMS44NXZ3O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIC5CTyB7XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuaGVhZGluZ19fS1BJIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovXFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLmhlYWRpbmdfX0tQSSBoMSB7XFxuICBtYXJnaW46IGF1dG8gMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLmhlYWRpbmdfX0tQSTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA0ZW07XFxuICB3aWR0aDogOTAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5zZWN0aW9uX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogM2VtIDNlbSAwIDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5jaGFydF9fY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgbWFyZ2luOiAyLjI1ZW0gMCAzZW0gMDtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5jaGFydF9fY29udGFpbmVyIC5QQ1BfXzEsXFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5jaGFydF9fY29udGFpbmVyIC5QQ1BfXzFfX05QIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmNoYXJ0X19jb250YWluZXIgY2FudmFzIHtcXG4gIG1hcmdpbjogMmVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSB0ZCB7XFxuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNmMGZmZmY7XFxuICBib3JkZXItbGVmdDogMS41cHggc29saWQgI2YwZmZmZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5kZXNjcmlwdGlvbnMgdGFibGUgdGgge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSB0cjpudGgtY2hpbGQob2RkKTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSAudHJfX2hlYWRpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5kZXNjcmlwdGlvbnMgdGFibGUgLmxhcmdlX19maWVsZCB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSAubm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDUlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSAuY29udGVudF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIC5jb250ZW50X19jb250YWluZXIgLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSAuY29udGVudF9fY29udGFpbmVyIC5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLyogQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNHB4O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX3NlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5lbGVtZW50LWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmxleC1zZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9YXBwLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jbGllbnQvc3JjL3Nhc3MvYXBwLnNjc3NcIixcIndlYnBhY2s6Ly8uL2NsaWVudC9zcmMvY3NzL2FwcC5jc3NcIixcIndlYnBhY2s6Ly8uL2NsaWVudC9zcmMvc2Fzcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL2NsaWVudC9zcmMvc2Fzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUVURSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFRlNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCR1pXO0VIYVgsa0NBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdHZFU7RUhlVixhQUFBO0VBQ0EsV0FBQTtBQ0RGO0FER0U7RUU3QkEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUY2QkUsc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VFN0JGLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUQrQkY7QURESTtFRXZDRixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFRnVDSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0tOO0FESE07RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNLUjtBREhRO0VBQ0UsY0duREc7RUhvREgsaUJBQUE7RUFDQSxnQkFBQTtBQ0tWO0FESFU7RUFDRSxpQkFBQTtBQ0taO0FEQ0k7RUUvREYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUYrREksaUJBQUE7QUNHTjtBRERNO0VBQ0UscUJBQUE7RUFDQSxh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a0I7RUFDRSxhQUFBO0VBQWUsNkJBQUE7QUNtQm5DO0FEUkU7RUFDRSxVQUFBO0FDVUo7QURQRTtFQUNFLHlCR2x2QlE7RUhtdkJSLGtCQUFBO0FDU0o7QURORTtFQUNFLHlCR3R2QlE7RUh1dkJSLGtCQUFBO0FDUUo7O0FESkE7RUV0dkJFLGFBQUE7QUQ4dkJGOztBREpBO0VFdndCRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRCt3QkY7O0FBRUEsa0NBQWtDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2FwcC5jc3NcIjtcbmltcG9ydCB7IGFkZEZpZWxkcyB9IGZyb20gXCIuL2FwaS91cGxvYWQtYXBpL2R5bmFtaWNEZXNjSW5wdXRcIjtcbmltcG9ydCB7IGFkZEtwaVRhYmxlIH0gZnJvbSBcIi4vYXBpL3VwbG9hZC1hcGkvZHluYW1pY1RhYmxlSW5wdXRcIjtcbmltcG9ydCB7IGlucHV0QXV0aCB9IGZyb20gXCIuL2FwaS91cGxvYWQtYXBpL2lucHV0QXV0aFwiO1xuaW1wb3J0IHsgYWRkS3BpRGVzYyB9IGZyb20gXCIuL2FwaS91cGxvYWQtYXBpL25ld0Rlc2NGaWVsZFwiO1xuXG5jb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2NvbnRhaW5lclwiKTtcbmNvbnN0IGRlc2NDb250YW5pbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lclwiKTtcbmNvbnN0IHNwZWNpYWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3BlY2lhbF9faW5wdXRcIik7XG5jb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0X19idG5cIik7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdF9fYnRuXCIpO1xuY29uc3QgbG9nZ2VkVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcm5hbWVcIik7XG5cbmxldCBtaW5UYWJsZUZpZWxkID0gNDtcbmxldCBtYXhUYWJsZUZpZWxkID0gMTA7XG5sZXQgbWF4RGVzY0ZpZWxkID0gNTtcbmxldCB0YWJsZVNlbGVjdG9yO1xuXG4vLyAhIG5lZWQgdG8gaW1wbGVtZW50IHRoaXMgaW5wdXQgYXV0aFxuZnVuY3Rpb24gc2V0U3BlY2lhbElucHV0KGlucHV0cykge1xuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcIm9uaW52YWxpZFwiLFxuICAgICAgXCJ0aGlzLnNldEN1c3RvbVZhbGlkaXR5KCdJbnB1dCBpbmkgaGFueWEgbWVuZXJpbWEgcGFyYW1ldGVyIDAgYXRhdSAxJylcIlxuICAgICk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwib25pbnB1dFwiLCBcInRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJycpXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHluYW1pY1RhYmxlSGFuZGxlcigpIHtcbiAgdGFibGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgdGFibGVGaWVsZCA9IHRhYmxlQ29udGFpbmVyLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGZpZWxkQ291bnQgPSB0YWJsZUZpZWxkLmNoaWxkRWxlbWVudENvdW50O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZF9fZmllbGRcIikpIHtcbiAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgYWRkS3BpVGFibGUodGFibGVGaWVsZCk7XG4gICAgICBhZGRLcGlEZXNjKGRlc2NDb250YW5pbmVyLCBmaWVsZENvdW50KTtcbiAgICAgIGlmIChmaWVsZENvdW50ID4gbWF4VGFibGVGaWVsZCkgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVfX2ZpZWxkXCIpKSB7XG4gICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgdGFibGVGaWVsZC5sYXN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgZGVzY0NvbnRhbmluZXIubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgIGlmIChmaWVsZENvdW50IDwgbWluVGFibGVGaWVsZCkgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR5bmFtaWNEZXNjRmllbGRIYW5kbGVyKCkge1xuICBjb25zdCB0ZXh0RmllbGRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvd1wiKTtcbiAgdGV4dEZpZWxkUGFyZW50LmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRTZWxlY3RvciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucm93XCIpLmRhdGFzZXQuaWQ7XG4gICAgICBjb25zdCBkZXNjRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGVzY19fJHtwYXJlbnRTZWxlY3Rvcn1gKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZF9fZmllbGRcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgICAgIXRhYmxlU2VsZWN0b3JcbiAgICAgICAgICA/IGFkZEZpZWxkcyhwYXJlbnRTZWxlY3RvcilcbiAgICAgICAgICA6IGFkZEZpZWxkcyhwYXJlbnRTZWxlY3RvciwgdGFibGVTZWxlY3Rvcik7XG4gICAgICAgIHRhYmxlU2VsZWN0b3IgPVxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIGlmICh0YWJsZVNlbGVjdG9yLmNoaWxkRWxlbWVudENvdW50ID4gbWF4RGVzY0ZpZWxkKVxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZV9fZmllbGRcIikpIHtcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgICAgY29uc3QgdGFibGVGaWVsZCA9XG4gICAgICAgICAgZGVzY0ZpZWxkLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIHRhYmxlRmllbGQucmVtb3ZlQ2hpbGQodGFibGVGaWVsZC5sYXN0RWxlbWVudENoaWxkKTtcblxuICAgICAgICBpZiAodGFibGVGaWVsZC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xuICAgICAgICAgIGRlc2NGaWVsZC5sYXN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoZWRFdmVudFRvRHluYW1pY0Rlc2MoKSB7XG4gIGRlc2NDb250YW5pbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGRfX2ZpZWxkXCIpKSB7XG4gICAgICBjb25zdCBwYXJlbnRTZWxlY3RvciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucm93XCIpLmRhdGFzZXQuaWQ7XG4gICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgICF0YWJsZVNlbGVjdG9yXG4gICAgICAgID8gYWRkRmllbGRzKHBhcmVudFNlbGVjdG9yKVxuICAgICAgICA6IGFkZEZpZWxkcyhwYXJlbnRTZWxlY3RvciwgdGFibGVTZWxlY3Rvcik7XG4gICAgICB0YWJsZVNlbGVjdG9yID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG4gICAgICAgICAgLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuXG4gICAgICBpZiAodGFibGVTZWxlY3Rvci5jaGlsZEVsZW1lbnRDb3VudCA+IG1heERlc2NGaWVsZClcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVfX2ZpZWxkXCIpKSB7XG4gICAgICBjb25zdCBkZXNjRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmRlc2NfXyR7ZS50YXJnZXQuY2xvc2VzdChcIi5yb3dcIikuZGF0YXNldC5pZH1gXG4gICAgICApO1xuICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgIGNvbnN0IHRhYmxlRmllbGQgPVxuICAgICAgICBkZXNjRmllbGQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG5cbiAgICAgIHRhYmxlRmllbGQucmVtb3ZlQ2hpbGQodGFibGVGaWVsZC5sYXN0RWxlbWVudENoaWxkKTtcblxuICAgICAgaWYgKHRhYmxlRmllbGQuY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgZGVzY0ZpZWxkLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRIYW5kbGVyKHBlcmlvZCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGFDb3VudCA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIikuY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQgLSAxO1xuXG4gICAgbGV0IHRlbXAgPSBuZXcgQXJyYXkoKTtcbiAgICBjb25zdCBkYXRhc2V0ID0ge1xuICAgICAgYWRkZWRfYXQ6IHBlcmlvZCxcbiAgICAgIGRhdGFzZXRfbGVuZ3RoOiBkYXRhQ291bnQsXG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRhdGFDb3VudDsgaSsrKSB7XG4gICAgICBkYXRhc2V0W2Byb3dfXyR7aX1gXSA9IG5ldyBPYmplY3QoKTtcbiAgICAgIGRhdGFzZXRbYHJvd19fJHtpfWBdLnRhYmxlRGF0YSA9IG5ldyBBcnJheSgpO1xuICAgICAgZGF0YXNldFtgcm93X18ke2l9YF0uZGVzY0RhdGEgPSBuZXcgT2JqZWN0KCk7XG5cbiAgICAgIC8vID8gR2V0IEtQSSB0aXRsZVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJvd19fJHtpfV9faW5wdXRfX0tQSWApLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBpZiAoZWxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWxsIEtQSSBmaWVsZCBtdXN0IGJlIGZpbGxlZCFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YXNldFtgcm93X18ke2l9YF0ucm93VGl0bGUgPSBlbGUudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyA/IENoZWNrIGlmIGRhdGEgaW4gcGVyY2VlbnRhZ2Ugb3IgeWVhclxuICAgICAgbGV0IFNNX19TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5TTV9fc2VsZWN0b3JfXyR7aX1gKS52YWx1ZTtcbiAgICAgIGlmIChTTV9fU2VsZWN0b3IgPT09IFwiLVwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFsbCBhbGwgU00gZmllbGQgdHlwZSBtdXN0IGJlIGZpbGxlZCEgXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YXNldFtgcm93X18ke2l9YF0uZGF0YV90eXBlID0gU01fX1NlbGVjdG9yO1xuICAgICAgfVxuXG4gICAgICAvLyA/IEdldCB0YWJsZSBkYXRhXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucm93X18ke2l9X19pbnB1dGApLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBpZiAoZWxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgZGF0YXNldFtgcm93X18ke2l9YF0udGFibGVEYXRhLnB1c2goXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YXNldFtgcm93X18ke2l9YF0udGFibGVEYXRhLnB1c2goK2VsZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyA/IEdldCBkZXNjIGRhdGEgKCBtYXggMTAgZmllbGRzICkgPT4gc2FmZSB2YWx1ZSBiZWFjYXVzZSB3ZSBzZXQgbWF4IGluIERPTSB0byA1XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgIHRlbXAgPSBbXTtcbiAgICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJvd19fJHtpfV9faW5wdXRfX2Rlc2NfXyR7an1gKTtcbiAgICAgICAgaWYgKGZpZWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmaWVsZC5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgICAgIHRlbXAucHVzaChlbGUudmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRhdGFzZXRbYHJvd19fJHtpfWBdLmRlc2NEYXRhW2Ake2p9YF0gPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXhpb3MucG9zdChcIi91cGxvYWRcIiwgZGF0YXNldCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIkZpbmlzaCB1cGxvYWRpbmcgZGF0YSAhIFwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL3ZpZXdcIjtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvZ2dlZFVzZXIoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJsb2dnZWQvdXNlclwiKTtcbiAgICBsb2dnZWRVc2VyLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJpb2RcIikudmFsdWU7XG5cbiAgaWYgKGRhdGUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcInBsZWFzZSBjaG9vc2UgYSBjb3JyZWN0IHBlcmlvZFwiKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgaW5wdXRBdXRoKGRhdGUpO1xuICB9XG59KTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKS52YWx1ZTtcbiAgc3VibWl0SGFuZGxlcihkYXRlKTtcbn0pO1xuXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgc2V0U3BlY2lhbElucHV0KHNwZWNpYWxJbnB1dCk7XG4gIGR5bmFtaWNUYWJsZUhhbmRsZXIoKTtcbiAgZHluYW1pY0Rlc2NGaWVsZEhhbmRsZXIoKTtcbiAgYXR0YWNoZWRFdmVudFRvRHluYW1pY0Rlc2MoKTtcbiAgZ2V0TG9nZ2VkVXNlcigpO1xufVxuXG5zdGFydCgpO1xuXG5mdW5jdGlvbiBnbygpIHtcbiAgY29uc3QgZGF0ZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKS52YWx1ZSA9IFwiMjAyMi0wMlwiKTtcblxuICBpbnB1dEF1dGgoZGF0ZSk7XG59XG5cbi8vIGdvKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=