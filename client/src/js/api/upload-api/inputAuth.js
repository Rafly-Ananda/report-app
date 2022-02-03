"use strict";

import axios from "axios";
import { addKpiTable } from "./dynamicTableInput";
import { addKpiDesc } from "./newDescField";
import { generateUploadInputFields } from "./generateUploadDesc";

const inputField = document.querySelector(".data__input");
const inputsContainer = document.querySelector(".inputs__container");
const descContaniner = document.querySelector(".descriptions__container");
const credentialField = document.querySelector(".credentials__container");
const dateIdentifier = document.querySelector(".date__identifier");
const inputMonthText = document.querySelector(".added__at");
const table = document.querySelector("table").children[0];
const addKPIField = document.querySelector(".add__field");

async function fillData(date) {
  addKPIField.classList.add("element-hidden");
  let tableFieldKPI, tableFieldInputs;
  const response = await axios.get(`/view/data/${date}`);

  const {
    data: {
      kpi_title,
      dataset_length,
      numberFieldData: { allTableData },
      textFieldData,
    },
  } = response;

  // ? Intitializing Table Fields & Desc Fields Before Being Filled
  for (let i = 0; i < dataset_length; i++) {
    addKpiTable(table, "fill"); // ? fill arg used to indicate whether this is a fill operation or just normal add field
    addKpiDesc(descContaniner, i + 1);
  }

  // ? Filling Table Inputs With Previous Data
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

  // ? Filling Table KPI Title Previous Data
  tableFieldKPI = document.querySelectorAll("#KPI__title");
  tableFieldKPI.forEach((input, inputIndex) => {
    input.value = kpi_title[inputIndex];
    input.textContent = kpi_title[inputIndex];
    input.readOnly = true;
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
    const response = await axios.get(`/view/data/${date}`);
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
        "Error, Input Previous Month Data First, Cannot Input Data Before Previous Month is Filled !"
      );
    }
  }
}

export { inputAuth };
