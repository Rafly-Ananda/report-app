"use strict";
import axios from "axios";
import { addFields } from "./tools/dynamicInputField";

const focusedInput = document.querySelector("#row__1__input__1");
const textFieldParent = document.querySelectorAll(".row");
const specialInput = document.querySelectorAll(".special__input");
const submitBtn = document.querySelector("#submit__btn");
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
    field.addEventListener("hover", (e) => {
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

document.querySelector("#validate__btn").addEventListener("click", () => {
  const data = document.querySelector("#period").value;
  axios
    .post("/upload/validate", {
      month: data,
    })
    .then(() => {
      alert("Validated");
      submitBtn.disabled = false;
      submitBtn.classList.add("hover:bg-green-700");
    })
    .catch((err) => {
      alert("Data with that date already exist, please choose different date!");
    });
});

function start() {
  submitBtn.disabled = true;
  focusedInput.focus();
  setSpecialInput(specialInput);
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
