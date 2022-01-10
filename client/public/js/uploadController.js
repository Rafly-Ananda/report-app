"use strict";

const focusedInput = document.querySelector("#row__1__input__1");
const textFieldParent = document.querySelectorAll(".row");
const specialInput = document.querySelectorAll(".special__input");
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

function addFields(selector, tableSelector) {
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
}

function textFieldBtnHandler() {
  textFieldParent.forEach((field) => {
    field.addEventListener("click", (e) => {
      const parentSelector = e.target.closest(".row").dataset.id;
      const descField = document.querySelector(`.desc__${parentSelector}`);

      if (e.target.classList.contains("add__field")) {
        e.target.previousElementSibling.classList.remove("element-hidden");
        !tableSelector
          ? addFields(parentSelector)
          : addFields(parentSelector, tableSelector);
        tableSelector =
          e.target.parentElement.previousElementSibling.children[0].children[0]
            .children[0];
      }

      if (e.target.classList.contains("delete__field")) {
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
