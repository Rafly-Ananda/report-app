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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxXQUFXLFlBQVksS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsS0FBSyxLQUFLLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLFFBQVEsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxLQUFLLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFlBQVksVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLGFBQWEsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLFVBQVUsV0FBVyxNQUFNLE1BQU0sY0FBYyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FB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ViwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBLE9BQU87O0FBRVA7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBLHVEQUF1RCxFQUFFLGlCQUFpQixFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCwwQkFBMEIsRUFBRSxlQUFlLEVBQUU7QUFDN0M7QUFDQTtBQUNBOztBQUVBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFTO0FBQ3BDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLG9FQUFTO0FBQ2I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLG9FQUFTO0FBQ1g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vY2xpZW50L3NyYy9qcy9hcGkvdXBsb2FkLWFwaS9keW5hbWljRGVzY0lucHV0LmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9jbGllbnQvc3JjL2pzL2FwaS91cGxvYWQtYXBpL2R5bmFtaWNUYWJsZUlucHV0LmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9jbGllbnQvc3JjL2pzL2FwaS91cGxvYWQtYXBpL2dlbmVyYXRlVXBsb2FkRGVzYy5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vY2xpZW50L3NyYy9qcy9hcGkvdXBsb2FkLWFwaS9pbnB1dEF1dGguanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL2NsaWVudC9zcmMvanMvYXBpL3VwbG9hZC1hcGkvbmV3RGVzY0ZpZWxkLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL2NsaWVudC9zcmMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9jbGllbnQvc3JjL2Nzcy9hcHAuY3NzPzE1NWMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlcG9ydC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVwb3J0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlcG9ydC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXBvcnQtYXBwLy4vY2xpZW50L3NyYy9qcy91cGxvYWRDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhZGRGaWVsZHMgPSAoc2VsZWN0b3IsIHRhYmxlU2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlc2NfXyR7c2VsZWN0b3J9YCk7XG4gIGxldCBpZGVudGlmaWVyID0gZGVzY0ZpZWxkLmNoaWxkRWxlbWVudENvdW50O1xuICBsZXQgaHRtbDtcblxuICBpZiAoZGVzY0ZpZWxkLmNoaWxkcmVuWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICBudWxsO1xuICB9IGVsc2Uge1xuICAgIHRhYmxlU2VsZWN0b3IgPSBkZXNjRmllbGQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgaWRlbnRpZmllciA9IHRhYmxlU2VsZWN0b3IuY2hpbGRFbGVtZW50Q291bnQ7XG4gIH1cblxuICBpZiAoaWRlbnRpZmllciA9PT0gMCkge1xuICAgIGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19maWVsZHNcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwiaW5wdXRfX3RhYmxlXCI+XG4gICAgICAgICAgPHRyIGNsYXNzPVwidHJfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgIDx0aD5OTzwvdGg+XG4gICAgICAgICAgICA8dGg+UGVueWViYWI8L3RoPlxuICAgICAgICAgICAgPHRoPlBlbnllbGVzYWlhbjwvdGg+XG4gICAgICAgICAgICA8dGg+UElDPC90aD5cbiAgICAgICAgICAgIDx0aD5VS1Q8L3RoPlxuICAgICAgICAgICAgPHRoPkRMPC90aD5cbiAgICAgICAgICAgIDx0aD5STDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgIHZhbHVlPSR7aWRlbnRpZmllciArIDF9XG4gICAgICAgICAgICAgICAgaWQ9XCJub19fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjYXVzZV9fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gbGFyZ2VfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICBpZD1cInNvbHV0aW9uX19maWVsZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIGlkPVwiUElDX19maWVsZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIGlkPVwiVUtUX19maWVsZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIGlkPVwiRExfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJSTF9fZmllbGRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkIGxhc3RcIlxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgZGVzY0ZpZWxkLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gYDx0cj5cbiAgICAgIDx0ZD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICB2YWx1ZT0ke2lkZW50aWZpZXJ9XG4gICAgICAgICAgaWQ9XCJub19fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllcn1cIlxuICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllcn1cIlxuICAgICAgICAgIGlkPVwiY2F1c2VfX2ZpZWxkXCJcbiAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9IGxhcmdlX190ZXh0X19maWVsZFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICBpZD1cInNvbHV0aW9uX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfSBsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfVwiXG4gICAgICAgICAgaWQ9XCJQSUNfX2ZpZWxkXCJcbiAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICBpZD1cIlVLVF9fZmllbGRcIlxuICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllcn0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllcn1cIlxuICAgICAgICAgIGlkPVwiRExfX2ZpZWxkXCJcbiAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9IHNtYWxsX190ZXh0X19maWVsZFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXJ9XCJcbiAgICAgICAgICBpZD1cIlJMX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5gO1xuICAgIHRhYmxlU2VsZWN0b3IuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xuICB9XG59O1xuXG5leHBvcnQgeyBhZGRGaWVsZHMgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhZGRLcGlUYWJsZSA9ICh0YWJsZVNlbGVjdG9yLCBmaWxsQmVmb3JlKSA9PiB7XG4gIGNvbnN0IGlkZW50aWZpZXIgPSB0YWJsZVNlbGVjdG9yLmNoaWxkRWxlbWVudENvdW50O1xuXG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPHRyIGNsYXNzPVwicm93X18ke2lkZW50aWZpZXJ9XCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRhYmxlX19ub1wiPiR7aWRlbnRpZmllcn08L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ19fS1BJXCI+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBmaWxsQmVmb3JlXG4gICAgICAgICAgICAgICAgPyBgXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dF9fS1BJXCIgaWQ9XCJLUElfX3RpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBgXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0X19LUElcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRfX0tQSVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiS1BJX190aXRsZVwiXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZmlsbEJlZm9yZVxuICAgICAgICAgICAgICAgID8gYDxoMSBjbGFzcz1cIlNNX19zZWxlY3Rvcl9fJHtpZGVudGlmaWVyfVwiIGlkPVwiU01fX2ZpZWxkXCI+PC9oMT5gXG4gICAgICAgICAgICAgICAgOiBgXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiU01fX3NlbGVjdG9yX18ke2lkZW50aWZpZXJ9XCIgaWQ9XCJTTV9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPi08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyY2VudGFnZVwiPjEwMC4wMCU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWVhclwiPjMvdGFodW48L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRfXyR7aWRlbnRpZmllcn1cIlxuICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0X18yXCJcbiAgICAgICAgICAgIGNsYXNzPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dF9fM1wiXG4gICAgICAgICAgICBjbGFzcz1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRfXzRcIlxuICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0X181XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm93X18ke2lkZW50aWZpZXJ9X19pbnB1dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwibGFzdF9faW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInJvd19fJHtpZGVudGlmaWVyfV9faW5wdXRfXzZcIlxuICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7aWRlbnRpZmllcn1fX2lucHV0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+YDtcbiAgdGFibGVTZWxlY3Rvci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbCk7XG59O1xuXG5leHBvcnQgeyBhZGRLcGlUYWJsZSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGdlbmVyYXRlVXBsb2FkSW5wdXRGaWVsZHMgPSAoc2VsZWN0b3IsIC4uLmRhdGEpID0+IHtcbiAgbGV0IGh0bWw7XG4gIGxldCB0YWJsZVNlbGVjdG9yO1xuICBjb25zdCBkZXNjRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGVzY19fJHtzZWxlY3Rvcn1gKTtcbiAgbGV0IGlkZW50aWZpZXIgPSBkZXNjRmllbGQuY2hpbGRFbGVtZW50Q291bnQ7XG5cbiAgaWYgKGRlc2NGaWVsZC5jaGlsZHJlblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB0YWJsZVNlbGVjdG9yID0gZGVzY0ZpZWxkLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgIGlkZW50aWZpZXIgPSB0YWJsZVNlbGVjdG9yLmNoaWxkRWxlbWVudENvdW50O1xuICB9XG5cbiAgaWYgKGlkZW50aWZpZXIgPT09IDApIHtcbiAgICBodG1sID0gYDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2ZpZWxkc1wiPlxuICAgICAgICA8dGFibGUgY2xhc3M9XCJpbnB1dF9fdGFibGVcIj5cbiAgICAgICAgICA8dHIgY2xhc3M9XCJ0cl9faGVhZGluZ1wiPlxuICAgICAgICAgICAgPHRoPk5PPC90aD5cbiAgICAgICAgICAgIDx0aD5QZW55ZWJhYjwvdGg+XG4gICAgICAgICAgICA8dGg+UGVueWVsZXNhaWFuPC90aD5cbiAgICAgICAgICAgIDx0aD5QSUM8L3RoPlxuICAgICAgICAgICAgPHRoPlVLVDwvdGg+XG4gICAgICAgICAgICA8dGg+REw8L3RoPlxuICAgICAgICAgICAgPHRoPlJMPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9JHtpZGVudGlmaWVyICsgMX1cbiAgICAgICAgICAgICAgICBpZD1cIm5vX19maWVsZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgICBpZD1cImNhdXNlX19maWVsZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgICA+JHtkYXRhWzBdWzFdfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibGFyZ2VfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgaWQ9XCJzb2x1dGlvbl9fZmllbGRcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IGxhcmdlX190ZXh0X19maWVsZFwiXG4gICAgICAgICAgICA+JHtkYXRhWzBdWzJdfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgICAgIGlkPVwiUElDX19maWVsZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgID4ke2RhdGFbMF1bM119PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgaWQ9XCJVS1RfX2ZpZWxkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgICAgICAgPiR7ZGF0YVswXVs0XX08L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgICAgICBpZD1cIkRMX19maWVsZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgICAgICAgID4ke2RhdGFbMF1bNV19PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICAgICAgaWQ9XCJSTF9fZmllbGRcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZCBsYXN0XCJcbiAgICAgICAgICAgID4ke2RhdGFbMF1bNl19PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG4gICAgZGVzY0ZpZWxkLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gYFxuICAgIDx0cj5cbiAgICAgIDx0ZD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgdmFsdWU9JHtpZGVudGlmaWVyICsgMX1cbiAgICAgICAgICBpZD1cIm5vX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgICBpZD1cImNhdXNlX19maWVsZFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBsYXJnZV9fdGV4dF9fZmllbGRcIlxuICAgICAgICA+JHtkYXRhWzBdWzFdfTwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwibGFyZ2VfX2ZpZWxkXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgaWQ9XCJzb2x1dGlvbl9fZmllbGRcIlxuICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IGxhcmdlX190ZXh0X19maWVsZFwiXG4gICAgICA+JHtkYXRhWzBdWzJdfTwvdGV4dGFyZWE+XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgbmFtZT1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke2lkZW50aWZpZXIgKyAxfVwiXG4gICAgICAgIGlkPVwiUElDX19maWVsZFwiXG4gICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgID4ke2RhdGFbMF1bM119PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgaWQ9XCJVS1RfX2ZpZWxkXCJcbiAgICAgICAgY2xhc3M9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtcbiAgICAgIGlkZW50aWZpZXIgKyAxXG4gICAgfSBzbWFsbF9fdGV4dF9fZmllbGRcIlxuICAgICAgPiR7ZGF0YVswXVs0XX08L3RleHRhcmVhPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgIG5hbWU9XCJyb3dfXyR7c2VsZWN0b3J9X19pbnB1dF9fZGVzY19fJHtpZGVudGlmaWVyICsgMX1cIlxuICAgICAgICBpZD1cIkRMX19maWVsZFwiXG4gICAgICAgIGNsYXNzPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7XG4gICAgICBpZGVudGlmaWVyICsgMVxuICAgIH0gc21hbGxfX3RleHRfX2ZpZWxkXCJcbiAgICAgID4ke2RhdGFbMF1bNV19PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuYW1lPVwicm93X18ke3NlbGVjdG9yfV9faW5wdXRfX2Rlc2NfXyR7aWRlbnRpZmllciArIDF9XCJcbiAgICAgICAgaWQ9XCJSTF9fZmllbGRcIlxuICAgICAgICBjbGFzcz1cInJvd19fJHtzZWxlY3Rvcn1fX2lucHV0X19kZXNjX18ke1xuICAgICAgaWRlbnRpZmllciArIDFcbiAgICB9IHNtYWxsX190ZXh0X19maWVsZCBsYXN0XCJcbiAgICAgID4ke2RhdGFbMF1bNl19PC90ZXh0YXJlYT5cbiAgICAgIDwvdGQ+XG4gIDwvdHI+YDtcbiAgICB0YWJsZVNlbGVjdG9yLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVVcGxvYWRJbnB1dEZpZWxkcyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGFkZEtwaVRhYmxlIH0gZnJvbSBcIi4vZHluYW1pY1RhYmxlSW5wdXRcIjtcbmltcG9ydCB7IGFkZEtwaURlc2MgfSBmcm9tIFwiLi9uZXdEZXNjRmllbGRcIjtcbmltcG9ydCB7IGdlbmVyYXRlVXBsb2FkSW5wdXRGaWVsZHMgfSBmcm9tIFwiLi9nZW5lcmF0ZVVwbG9hZERlc2NcIjtcblxuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YV9faW5wdXRcIik7XG5jb25zdCBpbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0c19fY29udGFpbmVyXCIpO1xuY29uc3QgZGVzY0NvbnRhbmluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uc19fY29udGFpbmVyXCIpO1xuY29uc3QgY3JlZGVudGlhbEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVkZW50aWFsc19fY29udGFpbmVyXCIpO1xuY29uc3QgZGF0ZUlkZW50aWZpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVfX2lkZW50aWZpZXJcIik7XG5jb25zdCBpbnB1dE1vbnRoVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkZWRfX2F0XCIpO1xuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIikuY2hpbGRyZW5bMF07XG5jb25zdCBhZGRLUElGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX19maWVsZFwiKTtcbmNvbnN0IG91dGVyQm9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRlcl9fYm9yZGVyXCIpO1xuY29uc3QgZHluYW1pY1RhYmxlQnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5keW5hbWljQnRuXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBmaWxsRGF0YShkYXRlKSB7XG4gIGFkZEtQSUZpZWxkLmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgbGV0IHRhYmxlRmllbGRJbnB1dHM7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvdmlldy9kYXRhLyR7ZGF0ZX1gKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBkYXRhc2V0X2xlbmd0aCwgYWxsVGFibGVEYXRhLCB0ZXh0RmllbGREYXRhLCBkYXRhc2V0IH0sXG4gIH0gPSByZXNwb25zZTtcblxuICAvLyA/IEludGl0aWFsaXppbmcgdGFibGUgZmllbGRzICYgZGVzYyBmaWVsZHMgYmVmb3JlIGJlaW5nIGZpbGxlZFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzZXRfbGVuZ3RoOyBpKyspIHtcbiAgICBhZGRLcGlUYWJsZSh0YWJsZSwgXCJmaWxsXCIpOyAvLyA/IGZpbGwgYXJnIHVzZWQgdG8gaW5kaWNhdGUgd2hldGhlciB0aGlzIGlzIGEgZmlsbCBvcGVyYXRpb24gb3IganVzdCBub3JtYWwgYWRkIGZpZWxkXG4gICAgYWRkS3BpRGVzYyhkZXNjQ29udGFuaW5lciwgaSArIDEpO1xuICB9XG5cbiAgLy8gPyBGaWxsaW5nIHRhYmxlIGlucHV0cyB3aXRoIHByZXZpb3VzIGRhdGFcbiAgT2JqZWN0LnZhbHVlcyhhbGxUYWJsZURhdGEpLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgIHRhYmxlRmllbGRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucm93X18ke2luZGV4ICsgMX1fX2lucHV0YCk7XG5cbiAgICB0YWJsZUZpZWxkSW5wdXRzLmZvckVhY2goKGlucHV0LCBpbnB1dEluZGV4KSA9PiB7XG4gICAgICBpZiAoZmllbGRbaW5wdXRJbmRleF0gPT09IFwiXCIpIHtcbiAgICAgICAgbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gZmllbGRbaW5wdXRJbmRleF07XG4gICAgICAgIGlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gPyBGaWxsaW5nIHRhYmxlIEtQSSB0aXRsZSB3aXRoIHByZXZpb3VzIHN0YXRlXG4gIGNvbnN0IHRhYmxlRmllbGRLUEkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI0tQSV9fdGl0bGVcIik7XG4gIHRhYmxlRmllbGRLUEkuZm9yRWFjaCgoaW5wdXQsIGlucHV0SW5kZXgpID0+IHtcbiAgICBpbnB1dC52YWx1ZSA9IGRhdGFzZXRbYHJvd19fJHtpbnB1dEluZGV4ICsgMX1gXS5yb3dUaXRsZTtcbiAgICBpbnB1dC50ZXh0Q29udGVudCA9IGRhdGFzZXRbYHJvd19fJHtpbnB1dEluZGV4ICsgMX1gXS5yb3dUaXRsZTtcbiAgICBpbnB1dC5yZWFkT25seSA9IHRydWU7XG4gIH0pO1xuXG4gIC8vID8gRmlsbGluZyBTTSBmaWVsZCB3aXRoIHByZXZpb3VzIHN0YXRlXG4gIGNvbnN0IHRhYmxlRmllbGRTTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjU01fX2ZpZWxkXCIpO1xuICB0YWJsZUZpZWxkU00uZm9yRWFjaCgoc20sIGlucHV0SW5kZXgpID0+IHtcbiAgICAvLyBUT0RPIDogY2hlY2sgaWYgZGF0YSBnaXZlbiBpcyBpbiBwZXJjZW50YWdlIG9yIHllYXIgYW5kIGFkanVzdCBpdCBoZXJlICgxMDAuMDAlIC8gMy90YWh1bilcblxuICAgIGlmIChkYXRhc2V0W2Byb3dfXyR7aW5wdXRJbmRleCArIDF9YF0uZGF0YV90eXBlID09PSBcInBlcmNlbnRhZ2VcIikge1xuICAgICAgc20udmFsdWUgPSBcInBlcmNlbnRhZ2VcIjtcbiAgICAgIHNtLnRleHRDb250ZW50ID0gXCIxMDAuMDAlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNtLnZhbHVlID0gXCJ5ZWFyXCI7XG4gICAgICBzbS50ZXh0Q29udGVudCA9IFwiMy90YWh1blwiO1xuICAgIH1cbiAgICBzbS5yZWFkT25seSA9IHRydWU7XG4gIH0pO1xuXG4gIC8vICEgUVVFU1RJT05BQkxFIEZFQVRVUkUgPyE/IT9cbiAgLy8gPyBGaWxsaW5nIERlc2MgSW5wdXRzIFdpdGggUHJldmlvdXMgRGF0YVxuICAvLyBPYmplY3QuZW50cmllcyh0ZXh0RmllbGREYXRhKS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gIC8vICAgT2JqZWN0LnZhbHVlcyhkYXRhWzFdKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyAgICAgZ2VuZXJhdGVVcGxvYWRJbnB1dEZpZWxkcyhkYXRhWzBdLnNsaWNlKDUpLCBmaWVsZCk7XG4gIC8vICAgfSk7XG4gIC8vIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQcmV2TW9udGgoZGF0ZSkge1xuICBsZXQgY3Vyck1vbnRoO1xuICBsZXQgcHJldk1vbnRoO1xuICBjb25zdCBtb250aCA9IGRhdGUuc2xpY2UoNSk7XG4gIG1vbnRoLnN0YXJ0c1dpdGgoXCIwXCIpID8gKGN1cnJNb250aCA9ICttb250aC5zbGljZSgxKSkgOiAoY3Vyck1vbnRoID0gK21vbnRoKTtcblxuICBpZiAoY3Vyck1vbnRoID09PSAxKSB7XG4gICAgcHJldk1vbnRoID0gU3RyaW5nKGN1cnJNb250aCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9IGVsc2Uge1xuICAgIHByZXZNb250aCA9IFN0cmluZyhjdXJyTW9udGggLSAxKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cblxuICByZXR1cm4gYCR7ZGF0ZS5zbGljZSgwLCA0KX0tJHtwcmV2TW9udGh9YDtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dE1vbnRoKGRhdGUpIHtcbiAgbGV0IGN1cnJNb250aDtcbiAgbGV0IG5leHRNb250aDtcbiAgbGV0IHllYXIgPSBkYXRlLnNsaWNlKDAsIDQpO1xuICBjb25zdCBtb250aCA9IGRhdGUuc2xpY2UoNSk7XG4gIG1vbnRoLnN0YXJ0c1dpdGgoXCIwXCIpID8gKGN1cnJNb250aCA9ICttb250aC5zbGljZSgxKSkgOiAoY3Vyck1vbnRoID0gK21vbnRoKTtcblxuICBpZiAoY3Vyck1vbnRoID09PSAxMikge1xuICAgIG5leHRNb250aCA9IFN0cmluZyhjdXJyTW9udGgpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfSBlbHNlIHtcbiAgICBuZXh0TW9udGggPSBTdHJpbmcoY3Vyck1vbnRoICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG5cbiAgcmV0dXJuIGAke3llYXJ9LSR7bmV4dE1vbnRofWA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvdmlldy9kYXRhLyR7ZGF0ZX1gKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbnB1dEF1dGgoZGF0ZSkge1xuICAvLyA/IEZvcm1hdCBJbnB1dCBNb250aCBUZXh0XG4gIGNvbnN0IGZvcm1hdHRlciA9IChkYXRhKSA9PiB7XG4gICAgY29uc3Qgc3RyID0gZGF0YS5zcGxpdChcIi1cIik7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXRNb250aCgrc3RyWzFdLnNsaWNlKDEpIC0gMSk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZGVmYXVsdFwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KTtcblxuICAgIGlucHV0TW9udGhUZXh0LnRleHRDb250ZW50ID0gYCR7bW9udGh9ICR7c3RyWzBdfWA7XG4gIH07XG5cbiAgZm9ybWF0dGVyKGRhdGUpO1xuXG4gIC8vID8gQ2hlY2tpbmcgUHJldiwgQ3VyciwgJiBOZXh0IE1vbnRoIFN0YXR1c1xuICBjb25zdCBwcmV2TW9udGggPSBnZXRQcmV2TW9udGgoZGF0ZSk7XG4gIGNvbnN0IGN1cnJNb250aCA9IGRhdGU7XG4gIGNvbnN0IG5leHRNb250aCA9IGdldE5leHRNb250aChkYXRlKTtcbiAgY29uc3QgcHJldk1vbnRoUmVzID0gYXdhaXQgaXNWYWxpZChwcmV2TW9udGgpO1xuICBjb25zdCBjdXJyTW9udGhSZXMgPSBhd2FpdCBpc1ZhbGlkKGN1cnJNb250aCk7XG4gIGNvbnN0IG5leHRNb250aFJlcyA9IGF3YWl0IGlzVmFsaWQobmV4dE1vbnRoKTtcblxuICBjb25zdCB7IGRhdGE6IHByZXZNb250aFN0YXR1cyB9ID0gcHJldk1vbnRoUmVzO1xuICBjb25zdCB7IGRhdGE6IGN1cnJNb250aFN0YXR1cyB9ID0gY3Vyck1vbnRoUmVzO1xuICBjb25zdCB7IGRhdGE6IG5leHRNb250aFN0YXR1cyB9ID0gbmV4dE1vbnRoUmVzO1xuXG4gIGlmIChjdXJyTW9udGguc2xpY2UoNSkgPT09IFwiMDFcIiB8fCBjdXJyTW9udGguc2xpY2UoNSkgPT09IFwiMDdcIikge1xuICAgIGlmIChjdXJyTW9udGhTdGF0dXMpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IsIERhdGEgSW4gVGhpcyBNb250aCBJcyBBbHJlYWR5IEZpbGxlZCAhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRLcGlUYWJsZSh0YWJsZSk7XG4gICAgICBhZGRLcGlEZXNjKGRlc2NDb250YW5pbmVyLCAxKTtcbiAgICAgIG91dGVyQm9yZGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiOHZoXCI7XG4gICAgICBkYXRlSWRlbnRpZmllci5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgIGlucHV0c0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZmxleC1zZXRcIik7XG4gICAgICBpbnB1dHNDb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICAgIGNyZWRlbnRpYWxGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwcmV2TW9udGhTdGF0dXMgJiYgY3Vyck1vbnRoU3RhdHVzICYmIG5leHRNb250aFN0YXR1cykge1xuICAgICAgYWxlcnQoXCJFcnJvciwgRGF0YSBJbiBUaGlzIE1vbnRoIElzIEFscmVhZHkgRmlsbGVkICFcIik7XG4gICAgfVxuXG4gICAgaWYgKHByZXZNb250aFN0YXR1cyAmJiBjdXJyTW9udGhTdGF0dXMgJiYgIW5leHRNb250aFN0YXR1cykge1xuICAgICAgYWxlcnQoXCJFcnJvciwgRGF0YSBJbiBUaGlzIE1vbnRoIElzIEFscmVhZHkgRmlsbGVkICFcIik7XG4gICAgfVxuXG4gICAgaWYgKHByZXZNb250aFN0YXR1cyAmJiAhY3Vyck1vbnRoU3RhdHVzICYmICFuZXh0TW9udGhTdGF0dXMpIHtcbiAgICAgIGZpbGxEYXRhKHByZXZNb250aCk7XG4gICAgICBkeW5hbWljVGFibGVCdG5Db250YWluZXIuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICAgIG91dGVyQm9yZGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiOHZoXCI7XG4gICAgICBkYXRlSWRlbnRpZmllci5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50LWhpZGRlblwiKTtcbiAgICAgIGlucHV0c0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZmxleC1zZXRcIik7XG4gICAgICBpbnB1dHNDb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICAgIGNyZWRlbnRpYWxGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKCFwcmV2TW9udGhTdGF0dXMgJiYgIWN1cnJNb250aFN0YXR1cyAmJiAhbmV4dE1vbnRoU3RhdHVzKSB8fFxuICAgICAgKCFwcmV2TW9udGhTdGF0dXMgJiYgIWN1cnJNb250aFN0YXR1cyAmJiBuZXh0TW9udGhTdGF0dXMpXG4gICAgKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgXCJFcnJvciwgSW5wdXQgRGF0YSBJbiBQcmV2aW91cyBNb250aCBGaXJzdCwgQ2Fubm90IElucHV0IERhdGEgQmVmb3JlIFByZXZpb3VzIE1vbnRoIGlzIEZpbGxlZCAhXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGlucHV0QXV0aCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGFkZEtwaURlc2MgPSAoY29udGFpbmVyLCBpZGVudGlmaWVyKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImZsZXhfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nX19LUElcIj5LUEkgJHtpZGVudGlmaWVyfSBEZXNjcmlwdGlvbjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBkYXRhLWlkPVwiJHtpZGVudGlmaWVyfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NfXyR7aWRlbnRpZmllcn1cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkeW5hbWljX19kZXNjX19idG5fX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxldGVfX2ZpZWxkIGVsZW1lbnQtaGlkZGVuIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTgwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ibHVlLTcwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkZF9fZmllbGQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS03MDAgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcbn07XG5cbmV4cG9ydCB7IGFkZEtwaURlc2MgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL0NhbmNlbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG4gICAgdmFyIHJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgdmFyIG9uQ2FuY2VsZWQ7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8ICByZXNwb25zZVR5cGUgPT09ICdqc29uJyA/XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShmdW5jdGlvbiBfcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgZnVuY3Rpb24gX3JlamVjdChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcbiAgICAgIC8vIFVzZSBvbmxvYWRlbmQgaWYgYXZhaWxhYmxlXG4gICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IG9ubG9hZGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZSB0byBlbXVsYXRlIG9ubG9hZGVuZFxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlYWR5c3RhdGUgaGFuZGxlciBpcyBjYWxsaW5nIGJlZm9yZSBvbmVycm9yIG9yIG9udGltZW91dCBoYW5kbGVycyxcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xuICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZGVuZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcbiAgICAgIHZhciB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyAnRVRJTUVET1VUJyA6ICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4gfHwgY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBmdW5jdGlvbihjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IChjYW5jZWwgJiYgY2FuY2VsLnR5cGUpID8gbmV3IENhbmNlbCgnY2FuY2VsZWQnKSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4gJiYgY29uZmlnLmNhbmNlbFRva2VuLnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwuYWJvcnRlZCA/IG9uQ2FuY2VsZWQoKSA6IGNvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3REYXRhKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcbmF4aW9zLlZFUlNJT04gPSByZXF1aXJlKCcuL2Vudi9kYXRhJykudmVyc2lvbjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuXG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHRoaXMucHJvbWlzZS50aGVuKGZ1bmN0aW9uKGNhbmNlbCkge1xuICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgdmFyIGk7XG4gICAgdmFyIGwgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRva2VuLl9saXN0ZW5lcnNbaV0oY2FuY2VsKTtcbiAgICB9XG4gICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gIH0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHRoaXMucHJvbWlzZS50aGVuID0gZnVuY3Rpb24ob25mdWxmaWxsZWQpIHtcbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xuICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAqL1xuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gIH1cbn07XG5cbi8qKlxuICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICovXG5cbkNhbmNlbFRva2VuLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcbnZhciB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3ZhbGlkYXRvcicpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWw7XG5cbiAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgdmFyIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHZhciBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHZhciByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdmFyIHByb21pc2U7XG5cbiAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuXG4gICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICBjaGFpbiA9IGNoYWluLmNvbmNhdChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuXG4gIHZhciBuZXdDb25maWcgPSBjb25maWc7XG4gIHdoaWxlIChyZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICB2YXIgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpO1xuICAgIHZhciBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB0cnkge1xuICAgICAgbmV3Q29uZmlnID0gb25GdWxmaWxsZWQobmV3Q29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb25SZWplY3RlZChlcnJvcik7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QobmV3Q29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgd2hpbGUgKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCwgb3B0aW9ucykge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZCxcbiAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICBydW5XaGVuOiBvcHRpb25zID8gb3B0aW9ucy5ydW5XaGVuIDogbnVsbFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9DYW5jZWwnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWwoJ2NhbmNlbGVkJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgY29uZmlnLFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMucmVzcG9uc2UgJiYgdGhpcy5yZXNwb25zZS5zdGF0dXMgPyB0aGlzLnJlc3BvbnNlLnN0YXR1cyA6IG51bGxcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGlyZWN0S2V5cyhwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB2YXIgbWVyZ2VNYXAgPSB7XG4gICAgJ3VybCc6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgJ21ldGhvZCc6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgJ2RhdGEnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdiYXNlVVJMJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndHJhbnNmb3JtUmVxdWVzdCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RyYW5zZm9ybVJlc3BvbnNlJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncGFyYW1zU2VyaWFsaXplcic6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RpbWVvdXQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0aW1lb3V0TWVzc2FnZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3dpdGhDcmVkZW50aWFscyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2FkYXB0ZXInOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdyZXNwb25zZVR5cGUnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd4c3JmQ29va2llTmFtZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnb25VcGxvYWRQcm9ncmVzcyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ29uRG93bmxvYWRQcm9ncmVzcyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2RlY29tcHJlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnbWF4Qm9keUxlbmd0aCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RyYW5zcG9ydCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2h0dHBBZ2VudCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2h0dHBzQWdlbnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdjYW5jZWxUb2tlbic6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3NvY2tldFBhdGgnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdyZXNwb25zZUVuY29kaW5nJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndmFsaWRhdGVTdGF0dXMnOiBtZXJnZURpcmVjdEtleXNcbiAgfTtcblxuICB1dGlscy5mb3JFYWNoKE9iamVjdC5rZXlzKGNvbmZpZzEpLmNvbmNhdChPYmplY3Qua2V5cyhjb25maWcyKSksIGZ1bmN0aW9uIGNvbXB1dGVDb25maWdWYWx1ZShwcm9wKSB7XG4gICAgdmFyIG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICB2YXIgY29uZmlnVmFsdWUgPSBtZXJnZShwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIHZhciBjb250ZXh0ID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb250ZXh0LCBkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9jb3JlL2VuaGFuY2VFcnJvcicpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB7XG4gICAgc2lsZW50SlNPTlBhcnNpbmc6IHRydWUsXG4gICAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2VcbiAgfSxcblxuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpIHx8IChoZWFkZXJzICYmIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbicpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICB2YXIgdHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWwgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgIHZhciBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgdmFyIGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICB2YXIgc3RyaWN0SlNPTlBhcnNpbmcgPSAhc2lsZW50SlNPTlBhcnNpbmcgJiYgdGhpcy5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcblxuICAgIGlmIChzdHJpY3RKU09OUGFyc2luZyB8fCAoZm9yY2VkSlNPTlBhcnNpbmcgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgZGF0YS5sZW5ndGgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgZW5oYW5jZUVycm9yKGUsIHRoaXMsICdFX0pTT05fUEFSU0UnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4yNC4wXCJcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JykgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZFUlNJT04gPSByZXF1aXJlKCcuLi9lbnYvZGF0YScpLnZlcnNpb247XG5cbnZhciB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaChmdW5jdGlvbih0eXBlLCBpKSB7XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSB0eXBlIHx8ICdhJyArIChpIDwgMSA/ICduICcgOiAnICcpICsgdHlwZTtcbiAgfTtcbn0pO1xuXG52YXIgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbj99IHZhbGlkYXRvciAtIHNldCB0byBmYWxzZSBpZiB0aGUgdHJhbnNpdGlvbmFsIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb24gLSBkZXByZWNhdGVkIHZlcnNpb24gLyByZW1vdmVkIHNpbmNlIHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvcHQsIG9wdHMpIHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICovXG5cbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIHZhciBvcHQgPSBrZXlzW2ldO1xuICAgIHZhciB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvcHRpb25zW29wdF07XG4gICAgICB2YXIgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiAnICsgb3B0ICsgJyBtdXN0IGJlICcgKyByZXN1bHQpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhbGxvd1Vua25vd24gIT09IHRydWUpIHtcbiAgICAgIHRocm93IEVycm9yKCdVbmtub3duIG9wdGlvbiAnICsgb3B0KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFzc2VydE9wdGlvbnM6IGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnM6IHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci50cmltID8gc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICogQHJldHVybiB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltLFxuICBzdHJpcEJPTTogc3RyaXBCT01cbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwIDAgMTN2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNpZGVfX25hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzU4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxM3Z3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4uc2lkZV9fbmF2IC5saW5rc19fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLnNpZGVfX25hdiAubGlua3NfX2NvbnRhaW5lciBCdXR0b24ge1xcbiAgd2lkdGg6IDh2dztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVlbTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLnNpZGVfX25hdiAubGlua3NfX2NvbnRhaW5lciAubGlua3NfX2NvbnRhaW5lcl9fdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDMwdmg7XFxufVxcbi5zaWRlX19uYXYgLmxpbmtzX19jb250YWluZXIgLmxpbmtzX19jb250YWluZXJfX3RvcCAubG9nZ2VkX191c2VyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgbWF4LXdpZHRoOiAxMHZ3O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uc2lkZV9fbmF2IC5saW5rc19fY29udGFpbmVyIC5saW5rc19fY29udGFpbmVyX190b3AgLmxvZ2dlZF9fdXNlciBoMSB7XFxuICBjb2xvcjogI2YwZmZmZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnNpZGVfX25hdiAubGlua3NfX2NvbnRhaW5lciAubGlua3NfX2NvbnRhaW5lcl9fdG9wIC5sb2dnZWRfX3VzZXIgaDEuc2Vjb25kIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG4uc2lkZV9fbmF2IC5saW5rc19fY29udGFpbmVyIC5saW5rc19fY29udGFpbmVyX19ib3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwIDV2aCAwO1xcbn1cXG4uc2lkZV9fbmF2IC5saW5rc19fY29udGFpbmVyIC5saW5rc19fY29udGFpbmVyX19ib3QgLmxpbmtzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMS41ZW07XFxufVxcblxcbm1haW4gLmRhdGVfX2lkZW50aWZpZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyLjc1dmg7XFxuICBsZWZ0OiAzNi41dnc7XFxufVxcbm1haW4gLmRhdGVfX2lkZW50aWZpZXIgLmRhdGVfX2lkIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmZmO1xcbiAgd2lkdGg6IDQwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMWVtO1xcbn1cXG5tYWluIC5kYXRlX19pZGVudGlmaWVyIC5kYXRlX19pZCBoMSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5tYWluIC5kYXRlX19pZGVudGlmaWVyIC5kYXRlX19pZCBoMS5zZWNvbmQge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjM1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm91dGVyX19ib3JkZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDIwcHggMjBweCA2MHB4ICNjY2Q5ZDksIGluc2V0IC0yMHB4IC0yMHB4IDYwcHggI2ZmZmZmZjtcXG4gIG1heC13aWR0aDogNzB2dztcXG4gIG1heC1oZWlnaHQ6IDc1dmg7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5nb1RvcEJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDk0LjI1dmg7XFxuICBsZWZ0OiA1NnZ3O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG59XFxuLm91dGVyX19ib3JkZXIgLmdvVG9wQnRuIGltZyB7XFxuICB3aWR0aDogMnZ3O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIge1xcbiAgd2lkdGg6IDcydnc7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE1dmg7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5wYWdlX19pZGVudGlmaWVyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMnZoO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjV2dztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiA1dnc7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLnBhZ2VfX2lkZW50aWZpZXIgaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAuY3JlZGVudGlhbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAuY3JlZGVudGlhbHMgLnNlY3Rpb25fX2JvcmRlcl9fY3JlZGVudGlhbCB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZmZmO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS41dnc7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMzAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5jcmVkZW50aWFscyAuc2VjdGlvbl9fYm9yZGVyX19jcmVkZW50aWFsIC5zZXR0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAzMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLmNyZWRlbnRpYWxzIC5zZWN0aW9uX19ib3JkZXJfX2NyZWRlbnRpYWwgLnNldHRlciBpbnB1dCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjIyMjIyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5jcmVkZW50aWFscyAuc2VjdGlvbl9fYm9yZGVyX19jcmVkZW50aWFsIGJ1dHRvbiB7XFxuICB3aWR0aDogNXZ3O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRhdGVfX2lkIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmZmO1xcbiAgd2lkdGg6IDQwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xcbiAgc2Nyb2xsLW1hcmdpbi1ib3R0b206IDIwMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kYXRlX19pZCBoMSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRhdGVfX2lkIGgxLnNlY29uZCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMzVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG4gIG1hcmdpbi10b3A6IDNlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGZmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAzZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgd2lkdGg6IDk5JTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLmhlYWRpbmcge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLmhlYWRpbmcsXFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSAuc3BjX3NtLFxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLnRhYmxlX19ubyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLnRyX19oZWFkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgdHI6bnRoLWNoaWxkKG9kZCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSB0ZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgaW5wdXQge1xcbiAgd2lkdGg6IDR2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSBzZWxlY3QsXFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSBpbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLmxhc3RfX2lucHV0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC5sYXN0X19oZWFkaW5nIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC50YWJsZV9faW5wdXRzIC50YWJsZV9fY29udGFpbmVyIC50YWJsZV9fd3JhcHBlciB0YWJsZSAuaGVhZGluZ19fS1BJIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC5oZWFkaW5nX19LUEkgaDEge1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLnRhYmxlX193cmFwcGVyIHRhYmxlIC5oZWFkaW5nX19LUEkgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyMjIyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAudGFibGVfX2lucHV0cyAudGFibGVfX2NvbnRhaW5lciAudGFibGVfX3dyYXBwZXIgdGFibGUgLmhlYWRpbmdfX0tQSTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLmR5bmFtaWNfX3RhYmxlX19idG5fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIuNWVtIDAgMCAwO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLnRhYmxlX19pbnB1dHMgLnRhYmxlX19jb250YWluZXIgLmR5bmFtaWNfX3RhYmxlX19idG5fX2NvbnRhaW5lciBidXR0b24ge1xcbiAgbWFyZ2luOiAwIDAuNWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZmZmO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciBoMSB7XFxuICBwYWRkaW5nOiAxZW0gMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA0MHZ3O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSB0aCB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSAudHJfX2hlYWRpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSB0cjpudGgtY2hpbGQob2RkKTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlIGlucHV0LFxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmRlc2NyaXB0aW9uc19fY29udGFpbmVyIC5mbGV4X19jb250YWluZXIgLnJvdyAuZGVzY3JpcHRpb25zIC50YWJsZV9fZmllbGRzIHRhYmxlIHRkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSBpbnB1dCB7XFxuICB3aWR0aDogMnZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgdGV4dGFyZWEge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgLmxhcmdlX190ZXh0X19maWVsZCB7XFxuICB3aWR0aDogMTN2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmRlc2NyaXB0aW9ucyAudGFibGVfX2ZpZWxkcyB0YWJsZSAuc21hbGxfX3RleHRfX2ZpZWxkIHtcXG4gIHdpZHRoOiA0dnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5kZXNjcmlwdGlvbnMgLnRhYmxlX19maWVsZHMgdGFibGUgI1JMX19maWVsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLmlucHV0c19fY29udGFpbmVyIC5kZXNjcmlwdGlvbnNfX2NvbnRhaW5lciAuZmxleF9fY29udGFpbmVyIC5yb3cgLmR5bmFtaWNfX2Rlc2NfX2J0bl9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMCAxLjVlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC5pbnB1dHNfX2NvbnRhaW5lciAuZGVzY3JpcHRpb25zX19jb250YWluZXIgLmZsZXhfX2NvbnRhaW5lciAucm93IC5keW5hbWljX19kZXNjX19idG5fX2NvbnRhaW5lciBidXR0b24ge1xcbiAgbWFyZ2luOiAwIDAuNWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAuaW5wdXRzX19jb250YWluZXIgLmJ0bl9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDRweDtcXG59XFxuLm91dGVyX19ib3JkZXIgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIge1xcbiAgd2lkdGg6IDcydnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnNlbGVjdF9fZGF0YV9fc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC5zZWxlY3RfX2RhdGFfX3NlY3Rpb24gLmNyZWRlbnRpYWxzX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNXZoO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC5zZWxlY3RfX2RhdGFfX3NlY3Rpb24gLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAuc2VsZWN0X19kYXRhX19zZWN0aW9uIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAucGFnZV9faWRlbnRpZmllciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZmZmO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzJ2aDtcXG4gIG1hcmdpbi1yaWdodDogMS41dnc7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogNXZ3O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC5zZWxlY3RfX2RhdGFfX3NlY3Rpb24gLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5wYWdlX19pZGVudGlmaWVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnNlbGVjdF9fZGF0YV9fc2VjdGlvbiAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLmNyZWRlbnRpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnNlbGVjdF9fZGF0YV9fc2VjdGlvbiAuY3JlZGVudGlhbHNfX2NvbnRhaW5lciAuY3JlZGVudGlhbHNfX3dyYXBwZXIgLmNyZWRlbnRpYWxzIC5zZWN0aW9uX19ib3JkZXJfX2NyZWRlbnRpYWwge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDMwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAuc2VsZWN0X19kYXRhX19zZWN0aW9uIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAuY3JlZGVudGlhbHMgLnNlY3Rpb25fX2JvcmRlcl9fY3JlZGVudGlhbCAuc2V0dGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMzAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC5zZWxlY3RfX2RhdGFfX3NlY3Rpb24gLmNyZWRlbnRpYWxzX19jb250YWluZXIgLmNyZWRlbnRpYWxzX193cmFwcGVyIC5jcmVkZW50aWFscyAuc2VjdGlvbl9fYm9yZGVyX19jcmVkZW50aWFsIC5zZXR0ZXIgaW5wdXQge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzIyMjIyMjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAuc2VsZWN0X19kYXRhX19zZWN0aW9uIC5jcmVkZW50aWFsc19fY29udGFpbmVyIC5jcmVkZW50aWFsc19fd3JhcHBlciAuY3JlZGVudGlhbHMgLnNlY3Rpb25fX2JvcmRlcl9fY3JlZGVudGlhbCBidXR0b24ge1xcbiAgd2lkdGg6IDV2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjZlbTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBhZGRpbmctYm90dG9tOiA0ZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmV4cG9ydF9fYnRuX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZXhwb3J0X19idG5fX2NvbnRhaW5lciAuZXhwb3J0X19idG4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIG1pbi13aWR0aDogNjV2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3MnZ3O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxLjVlbSAxZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgdGg6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyLjI1ZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuaGVhZGluZyB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuZGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDR2dztcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuaGVhZGluZyxcXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIC5zcGNfc20sXFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAudGFibGVfX25vIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAudHJfX2hlYWRpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSB0cjpudGgtY2hpbGQob2RkKTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIHRkIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuU01fX2VsZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjg1dnc7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlcl9fdGFibGUgLnRhYmxlX19pbnB1dHMgdGFibGUgLkJPIHtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXJfX3RhYmxlIC50YWJsZV9faW5wdXRzIHRhYmxlIC5oZWFkaW5nX19LUEkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIC8qIEZpcmVmb3ggKi9cXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuaGVhZGluZ19fS1BJIGgxIHtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyX190YWJsZSAudGFibGVfX2lucHV0cyB0YWJsZSAuaGVhZGluZ19fS1BJOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLyogQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDRlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLnNlY3Rpb25fX2hlYWRpbmcge1xcbiAgbWFyZ2luOiAzZW0gM2VtIDAgM2VtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmNoYXJ0X19jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2YwZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMi41cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBtYXJnaW46IDIuMjVlbSAwIDNlbSAwO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmNoYXJ0X19jb250YWluZXIgLlBDUF9fMSxcXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmNoYXJ0X19jb250YWluZXIgLlBDUF9fMV9fTlAge1xcbiAgbWFyZ2luOiAyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuY2hhcnRfX2NvbnRhaW5lciBjYW52YXMge1xcbiAgbWFyZ2luOiAyZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICB3aWR0aDogNjB2dztcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIHRkIHtcXG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQgI2YwZmZmZjtcXG4gIGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZCAjZjBmZmZmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSB0aCB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5kZXNjcmlwdGlvbnMgdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIHRyOm50aC1jaGlsZChvZGQpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIC50cl9faGVhZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fZGF0YV9fY29udGFpbmVyIC52aWV3X19zZWN0aW9uIC5kYXRhX19jb250YWluZXIgLmRhdGFfX3dyYXBwZXIgLmRlc2NyaXB0aW9ucyB0YWJsZSAubGFyZ2VfX2ZpZWxkIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIC5ubyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNSU7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIC5jb250ZW50X19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX2RhdGFfX2NvbnRhaW5lciAudmlld19fc2VjdGlvbiAuZGF0YV9fY29udGFpbmVyIC5kYXRhX193cmFwcGVyIC5kZXNjcmlwdGlvbnMgdGFibGUgLmNvbnRlbnRfX2NvbnRhaW5lciAuY29udGVudCB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovXFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19kYXRhX19jb250YWluZXIgLnZpZXdfX3NlY3Rpb24gLmRhdGFfX2NvbnRhaW5lciAuZGF0YV9fd3JhcHBlciAuZGVzY3JpcHRpb25zIHRhYmxlIC5jb250ZW50X19jb250YWluZXIgLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAvKiBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG59XFxuLm91dGVyX19ib3JkZXIgLnZpZXdfX3NlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA0cHg7XFxufVxcbi5vdXRlcl9fYm9yZGVyIC52aWV3X19zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ub3V0ZXJfX2JvcmRlciAudmlld19fc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmVsZW1lbnQtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mbGV4LXNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1hcHAuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NsaWVudC9zcmMvc2Fzcy9hcHAuc2Nzc1wiLFwid2VicGFjazovLy4vY2xpZW50L3NyYy9jc3MvYXBwLmNzc1wiLFwid2VicGFjazovLy4vY2xpZW50L3NyYy9zYXNzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vY2xpZW50L3NyYy9zYXNzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFRVRFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VGU0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJHWlc7RUhhWCxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0dkVTtFSGVWLGFBQUE7RUFDQSxXQUFBO0FDREY7QURHRTtFRTdCQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFRjZCRSxzQkFBQTtF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QUE7RUFDQSxrQkFBQTtBQ3FCaEI7QURsQmM7RUFDRSxjR2hzQkE7RUhpc0JBLFlBQUE7QUNvQmhCO0FEakJjO0VBQ0UseUJHbHNCSjtBRnF0Qlo7QURoQmM7RUFDRSx5Qkd2c0JKO0FGeXRCWjtBRGZjO0VBQ0UseUJHNXNCTjtBRjZ0QlY7QURkYztFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNnQmhCO0FEYmM7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNlaEI7QURaYztFRTl0QlosYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUQ2dUJGO0FEZGdCO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7QUNrQnpDO0FEaEJrQjtFQUNFLGFBQUE7RUFBZSw2QkFBQTtBQ21CbkM7QURSRTtFQUNFLFVBQUE7QUNVSjtBRFBFO0VBQ0UseUJHbHZCUTtFSG12QlIsa0JBQUE7QUNTSjtBRE5FO0VBQ0UseUJHdHZCUTtFSHV2QlIsa0JBQUE7QUNRSjs7QURKQTtFRXR2QkUsYUFBQTtBRDh2QkY7O0FESkE7RUV2d0JFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEK3dCRjs7QUFFQSxrQ0FBa0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgXCIuLi9jc3MvYXBwLmNzc1wiO1xuaW1wb3J0IHsgYWRkRmllbGRzIH0gZnJvbSBcIi4vYXBpL3VwbG9hZC1hcGkvZHluYW1pY0Rlc2NJbnB1dFwiO1xuaW1wb3J0IHsgYWRkS3BpVGFibGUgfSBmcm9tIFwiLi9hcGkvdXBsb2FkLWFwaS9keW5hbWljVGFibGVJbnB1dFwiO1xuaW1wb3J0IHsgaW5wdXRBdXRoIH0gZnJvbSBcIi4vYXBpL3VwbG9hZC1hcGkvaW5wdXRBdXRoXCI7XG5pbXBvcnQgeyBhZGRLcGlEZXNjIH0gZnJvbSBcIi4vYXBpL3VwbG9hZC1hcGkvbmV3RGVzY0ZpZWxkXCI7XG5cbmNvbnN0IHRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fY29udGFpbmVyXCIpO1xuY29uc3QgZGVzY0NvbnRhbmluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uc19fY29udGFpbmVyXCIpO1xuY29uc3Qgc3BlY2lhbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcGVjaWFsX19pbnB1dFwiKTtcbmNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRfX2J0blwiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0X19idG5cIik7XG5jb25zdCBsb2dnZWRVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VybmFtZVwiKTtcblxubGV0IG1pblRhYmxlRmllbGQgPSA0O1xubGV0IG1heFRhYmxlRmllbGQgPSAxMDtcbmxldCBtYXhEZXNjRmllbGQgPSA1O1xubGV0IHRhYmxlU2VsZWN0b3I7XG5cbi8vICEgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyBpbnB1dCBhdXRoXG5mdW5jdGlvbiBzZXRTcGVjaWFsSW5wdXQoaW5wdXRzKSB7XG4gIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcbiAgICAgIFwib25pbnZhbGlkXCIsXG4gICAgICBcInRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJ0lucHV0IGluaSBoYW55YSBtZW5lcmltYSBwYXJhbWV0ZXIgMCBhdGF1IDEnKVwiXG4gICAgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsIFwidGhpcy5zZXRDdXN0b21WYWxpZGl0eSgnJylcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkeW5hbWljVGFibGVIYW5kbGVyKCkge1xuICB0YWJsZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YWJsZUZpZWxkID0gdGFibGVDb250YWluZXIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZmllbGRDb3VudCA9IHRhYmxlRmllbGQuY2hpbGRFbGVtZW50Q291bnQ7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkX19maWVsZFwiKSkge1xuICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgICBhZGRLcGlUYWJsZSh0YWJsZUZpZWxkKTtcbiAgICAgIGFkZEtwaURlc2MoZGVzY0NvbnRhbmluZXIsIGZpZWxkQ291bnQpO1xuICAgICAgaWYgKGZpZWxkQ291bnQgPiBtYXhUYWJsZUZpZWxkKSBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZV9fZmllbGRcIikpIHtcbiAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgICB0YWJsZUZpZWxkLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICBkZXNjQ29udGFuaW5lci5sYXN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgaWYgKGZpZWxkQ291bnQgPCBtaW5UYWJsZUZpZWxkKSBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHluYW1pY0Rlc2NGaWVsZEhhbmRsZXIoKSB7XG4gIGNvbnN0IHRleHRGaWVsZFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93XCIpO1xuICB0ZXh0RmllbGRQYXJlbnQuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFNlbGVjdG9yID0gZS50YXJnZXQuY2xvc2VzdChcIi5yb3dcIikuZGF0YXNldC5pZDtcbiAgICAgIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZXNjX18ke3BhcmVudFNlbGVjdG9yfWApO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkX19maWVsZFwiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgICAhdGFibGVTZWxlY3RvclxuICAgICAgICAgID8gYWRkRmllbGRzKHBhcmVudFNlbGVjdG9yKVxuICAgICAgICAgIDogYWRkRmllbGRzKHBhcmVudFNlbGVjdG9yLCB0YWJsZVNlbGVjdG9yKTtcbiAgICAgICAgdGFibGVTZWxlY3RvciA9XG4gICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG5cbiAgICAgICAgaWYgKHRhYmxlU2VsZWN0b3IuY2hpbGRFbGVtZW50Q291bnQgPiBtYXhEZXNjRmllbGQpXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlX19maWVsZFwiKSkge1xuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgICBjb25zdCB0YWJsZUZpZWxkID1cbiAgICAgICAgICBkZXNjRmllbGQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG5cbiAgICAgICAgdGFibGVGaWVsZC5yZW1vdmVDaGlsZCh0YWJsZUZpZWxkLmxhc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgICAgIGlmICh0YWJsZUZpZWxkLmNoaWxkRWxlbWVudENvdW50ID09PSAxKSB7XG4gICAgICAgICAgZGVzY0ZpZWxkLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hlZEV2ZW50VG9EeW5hbWljRGVzYygpIHtcbiAgZGVzY0NvbnRhbmluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZF9fZmllbGRcIikpIHtcbiAgICAgIGNvbnN0IHBhcmVudFNlbGVjdG9yID0gZS50YXJnZXQuY2xvc2VzdChcIi5yb3dcIikuZGF0YXNldC5pZDtcbiAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgIXRhYmxlU2VsZWN0b3JcbiAgICAgICAgPyBhZGRGaWVsZHMocGFyZW50U2VsZWN0b3IpXG4gICAgICAgIDogYWRkRmllbGRzKHBhcmVudFNlbGVjdG9yLCB0YWJsZVNlbGVjdG9yKTtcbiAgICAgIHRhYmxlU2VsZWN0b3IgPVxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cbiAgICAgICAgICAuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG5cbiAgICAgIGlmICh0YWJsZVNlbGVjdG9yLmNoaWxkRWxlbWVudENvdW50ID4gbWF4RGVzY0ZpZWxkKVxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1oaWRkZW5cIik7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZV9fZmllbGRcIikpIHtcbiAgICAgIGNvbnN0IGRlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuZGVzY19fJHtlLnRhcmdldC5jbG9zZXN0KFwiLnJvd1wiKS5kYXRhc2V0LmlkfWBcbiAgICAgICk7XG4gICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgY29uc3QgdGFibGVGaWVsZCA9XG4gICAgICAgIGRlc2NGaWVsZC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcblxuICAgICAgdGFibGVGaWVsZC5yZW1vdmVDaGlsZCh0YWJsZUZpZWxkLmxhc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgICBpZiAodGFibGVGaWVsZC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xuICAgICAgICBkZXNjRmllbGQubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIocGVyaW9kKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YUNvdW50ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKS5jaGlsZHJlblswXS5jaGlsZEVsZW1lbnRDb3VudCAtIDE7XG5cbiAgICBsZXQgdGVtcCA9IG5ldyBBcnJheSgpO1xuICAgIGNvbnN0IGRhdGFzZXQgPSB7XG4gICAgICBhZGRlZF9hdDogcGVyaW9kLFxuICAgICAgZGF0YXNldF9sZW5ndGg6IGRhdGFDb3VudCxcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF0YUNvdW50OyBpKyspIHtcbiAgICAgIGRhdGFzZXRbYHJvd19fJHtpfWBdID0gbmV3IE9iamVjdCgpO1xuICAgICAgZGF0YXNldFtgcm93X18ke2l9YF0udGFibGVEYXRhID0gbmV3IEFycmF5KCk7XG4gICAgICBkYXRhc2V0W2Byb3dfXyR7aX1gXS5kZXNjRGF0YSA9IG5ldyBPYmplY3QoKTtcblxuICAgICAgLy8gPyBHZXQgS1BJIHRpdGxlXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucm93X18ke2l9X19pbnB1dF9fS1BJYCkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgIGlmIChlbGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgS1BJIGZpZWxkIG11c3QgYmUgZmlsbGVkIVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhc2V0W2Byb3dfXyR7aX1gXS5yb3dUaXRsZSA9IGVsZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vID8gQ2hlY2sgaWYgZGF0YSBpbiBwZXJjZWVudGFnZSBvciB5ZWFyXG4gICAgICBsZXQgU01fX1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlNNX19zZWxlY3Rvcl9fJHtpfWApLnZhbHVlO1xuICAgICAgaWYgKFNNX19TZWxlY3RvciA9PT0gXCItXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWxsIGFsbCBTTSBmaWVsZCB0eXBlIG11c3QgYmUgZmlsbGVkISBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhc2V0W2Byb3dfXyR7aX1gXS5kYXRhX3R5cGUgPSBTTV9fU2VsZWN0b3I7XG4gICAgICB9XG5cbiAgICAgIC8vID8gR2V0IHRhYmxlIGRhdGFcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5yb3dfXyR7aX1fX2lucHV0YCkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgIGlmIChlbGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICBkYXRhc2V0W2Byb3dfXyR7aX1gXS50YWJsZURhdGEucHVzaChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhc2V0W2Byb3dfXyR7aX1gXS50YWJsZURhdGEucHVzaCgrZWxlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vID8gR2V0IGRlc2MgZGF0YSAoIG1heCAxMCBmaWVsZHMgKSA9PiBzYWZlIHZhbHVlIGJlYWNhdXNlIHdlIHNldCBtYXggaW4gRE9NIHRvIDVcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgdGVtcCA9IFtdO1xuICAgICAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucm93X18ke2l9X19pbnB1dF9fZGVzY19fJHtqfWApO1xuICAgICAgICBpZiAoZmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZpZWxkLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICAgICAgdGVtcC5wdXNoKGVsZS52YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGF0YXNldFtgcm93X18ke2l9YF0uZGVzY0RhdGFbYCR7an1gXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBheGlvcy5wb3N0KFwiL3VwbG9hZFwiLCBkYXRhc2V0KS50aGVuKCgpID0+IHtcbiAgICAgIGFsZXJ0KFwiRmluaXNoIHVwbG9hZGluZyBkYXRhICEgXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvdmlld1wiO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9nZ2VkVXNlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImxvZ2dlZC91c2VyXCIpO1xuICAgIGxvZ2dlZFVzZXIudGV4dENvbnRlbnQgPSByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKS52YWx1ZTtcblxuICBpZiAoZGF0ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwicGxlYXNlIGNob29zZSBhIGNvcnJlY3QgcGVyaW9kXCIpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dEF1dGgoZGF0ZSk7XG4gIH1cbn0pO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLnZhbHVlO1xuICBzdWJtaXRIYW5kbGVyKGRhdGUpO1xufSk7XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBzZXRTcGVjaWFsSW5wdXQoc3BlY2lhbElucHV0KTtcbiAgZHluYW1pY1RhYmxlSGFuZGxlcigpO1xuICBkeW5hbWljRGVzY0ZpZWxkSGFuZGxlcigpO1xuICBhdHRhY2hlZEV2ZW50VG9EeW5hbWljRGVzYygpO1xuICBnZXRMb2dnZWRVc2VyKCk7XG59XG5cbnN0YXJ0KCk7XG5cbmZ1bmN0aW9uIGdvKCkge1xuICBjb25zdCBkYXRlID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLnZhbHVlID0gXCIyMDIyLTAyXCIpO1xuXG4gIGlucHV0QXV0aChkYXRlKTtcbn1cblxuLy8gZ28oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==