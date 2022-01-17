"use strict";
import axios from "axios";
import { addFields } from "./tools/dynamicInputField";
import { generateUploadInputFields } from "./tools/generateUploadInput";

const focusedInput = document.querySelector("#row__1__input__1");
const textFieldParent = document.querySelectorAll(".row");
const specialInput = document.querySelectorAll(".special__input");
const nextBtn = document.querySelector("#next__btn");
const submitBtn = document.querySelector("#submit__btn");
const maxTextField = 5;
let tableSelector;

// ? Credentials Selector
const inputField = document.querySelector(".data__input");
const inputsContainer = document.querySelector(".inputs__container");
const credentialField = document.querySelector(".credentials__container");

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

function dateParser(date) {
  let currMonth;
  let prevMonth;
  const getPrevMonth = date.slice(5);
  getPrevMonth.startsWith("0")
    ? (currMonth = +getPrevMonth.slice(1))
    : (currMonth = +getPrevMonth);

  if (currMonth - 1 < 10) {
    if (currMonth === 1) {
      prevMonth = String(currMonth).padStart(2, "0");
    } else {
      prevMonth = String(currMonth - 1).padStart(2, "0");
    }
  } else {
    currMonth - 1;
  }

  return `${date.slice(0, 4)}-${prevMonth}`;
}

async function isValid(user, date) {
  try {
    const response = await axios.get(`/view/data/${user}/${date}`);
    if (response.data.added_at.length > 0) return false;
  } catch (err) {
    return true;
  }
}

function submitHandler(user, period) {
  try {
    let temp = new Array();
    const dataset = {
      added_at: period,
      added_by: user,
    };

    for (let i = 1; i <= 11; i++) {
      dataset[`row__${i}`] = new Object();
      dataset[`row__${i}`].tableData = new Array();
      dataset[`row__${i}`].descData = new Object();

      // ? To Get Table Data
      document.querySelectorAll(`.row__${i}__input`).forEach((ele) => {
        if (ele.value === "") {
          dataset[`row__${i}`].tableData.push("");
        } else {
          dataset[`row__${i}`].tableData.push(+ele.value);
        }
      });

      // ? To Get Desc Data
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

    axios.post("/upload", dataset).then(() => {
      alert("Finish uploading data ! ");
      window.location = "/view";
    });
  } catch (error) {
    console.log(error);
  }
}

async function fillData(user, date) {
  const prevMonth = dateParser(date);
  const {
    data: {
      numberFieldData: { allTableData },
      textFieldData,
    },
  } = await axios.get(`/view/data/${user}/${prevMonth}`);

  // ? Filling Table Inputs With Previous Data
  Object.values(allTableData).forEach((field, index) => {
    console.log(field);
    let tableFieldInputs = document.querySelectorAll(
      `.row__${index + 1}__input`
    );
    tableFieldInputs.forEach((input, inputIndex) => {
      if (field[inputIndex] === "") {
        null;
      } else {
        input.value = field[inputIndex];
        input.readOnly = true;
      }
    });
  });

  // ? Filling Desc Inputs With Previous Data
  Object.entries(textFieldData).forEach((data) => {
    Object.values(data[1]).forEach((field) => {
      generateUploadInputFields(data[0].slice(5), field);
    });
  });
}

nextBtn.addEventListener("click", async () => {
  const user = document.querySelector("#user").value;
  const date = document.querySelector("#period").value;

  // const user = (document.querySelector("#user").value = "test");
  // const date = (document.querySelector("#period").value = "2022-02");

  if (user === "" || date === "") {
    alert("please choose a correct user and period");
    return;
  } else {
    const response = await isValid(user, date);
    if (response === false) {
      alert("Data In This Month Is Already Filled, Select Different Month ! ");
      return;
    } else {
      fillData(user, date);
      inputField.classList.remove("element-hidden");
      inputsContainer.classList.remove("flex-set");
      credentialField.classList.add("element-hidden");
    }
  }
});

submitBtn.addEventListener("click", () => {
  const user = document.querySelector("#user").value;
  const date = document.querySelector("#period").value;

  submitHandler(user, date);
});

function start() {
  focusedInput.focus();
  setSpecialInput(specialInput);
  textFieldBtnHandler();
}

start();
