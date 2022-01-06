"use strict";

import axios from "axios";
const focusedInput = document.querySelector("#row__1__input__1");
const addBtn = document.querySelectorAll(".add__field");

function addFields(selector) {
  const descField = document.querySelector(`.desc__${selector}`);
  const identifier = descField.childElementCount;

  const html = `<div class="descriptions">
  <div class="table__fields">
    <table>
      <tr>
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
            class="small__text__field"
          ></textarea>
        </td>
      </tr>
    </table>
  </div>
</div>`;
  descField.insertAdjacentHTML("beforeend", html);
}

function postRequest() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    console.log(form.elements);

    // ? checking key & values
    // for (var [key, value] of formData.entries()) {
    //   console.log(key + ":" + value);
    // }
    // const formProps = Object.fromEntries(formData);

    // ? post request
    // axios.post("/upload", formData).then((res) => {
    //   console.log(res);
    // });
  });
}

addBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const rowSelector = e.target.closest(".row").dataset.id;
    addFields(rowSelector);
  });
});

function start() {
  focusedInput.focus();
  // postRequest();
}

start();

// ____________________Populate Form (testing tools)_________________________________ //

function placeholderVal() {
  const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const randomData = Math.floor(Math.random() * arr.length);
  return arr[randomData];
}

const generateData = document.querySelector(".populateData");
generateData.addEventListener("click", () => {
  for (let i = 1; i <= 11; i++) {
    for (let j = 1; j <= 6; j++) {
      document.querySelector(`#row__${i}__input__${j}`).value =
        placeholderVal();
    }
  }
});
