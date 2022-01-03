"use strict";

import axios from "axios";
const nameInput = document.querySelector("#user");
const focusedInput = document.querySelector("#row__1__input__1");

function postRequest() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    // ? checking key & values
    // for (var [key, value] of formData.entries()) {
    //   console.log(key + ":" + value);
    // }
    // const formProps = Object.fromEntries(formData);
    // ? post request
    axios.post("/upload", formData).then((res) => {
      console.log(res);
    });
  });
}

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
