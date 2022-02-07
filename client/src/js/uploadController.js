"use strict";
import axios from "axios";
import { addFields } from "./api/upload-api/dynamicDescInput";
import { addKpiTable } from "./api/upload-api/dynamicTableInput";
import { inputAuth } from "./api/upload-api/inputAuth";
import { addKpiDesc } from "./api/upload-api/newDescField";

const tableContainer = document.querySelector(".table__container");
const descContaniner = document.querySelector(".descriptions__container");
const specialInput = document.querySelectorAll(".special__input");
const nextBtn = document.querySelector("#next__btn");
const submitBtn = document.querySelector("#submit__btn");
const loggedUser = document.querySelector(".username");

let maxTextField = 5;
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
      addKpiTable(tableField);
      addKpiDesc(descContaniner, fieldCount, "test");
    }

    if (e.target.classList.contains("delete__field")) {
      tableField.lastElementChild.remove();
      descContaniner.lastElementChild.remove();
      if (fieldCount === 2) e.target.classList.add("element-hidden");
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
          ? addFields(parentSelector)
          : addFields(parentSelector, tableSelector);
        tableSelector =
          e.target.parentElement.previousElementSibling.children[0].children[0]
            .children[0].children[0];

        if (tableSelector.childElementCount > maxTextField)
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
        ? addFields(parentSelector)
        : addFields(parentSelector, tableSelector);
      tableSelector =
        e.target.parentElement.previousElementSibling.children[0].children[0]
          .children[0].children[0];

      if (tableSelector.childElementCount > maxTextField)
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

    // axios.post("/upload", dataset).then(() => {
    //   alert("Finish uploading data ! ");
    //   window.location = "/view";
    // });
    console.log(dataset);
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}

async function getLoggedUser() {
  try {
    const response = await axios.get("logged/user");
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
    inputAuth(date);
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
  // getLoggedUser();
}

start();

function go() {
  const date = (document.querySelector("#period").value = "2022-02");

  inputAuth(date);
}

// go();
