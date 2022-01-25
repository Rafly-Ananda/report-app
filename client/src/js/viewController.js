"use strict";
import axios from "axios";
import { generateChart } from "./api/view-api/generateViewChart";
import { generateFields } from "./api/view-api/generateViewInputField";
import { generateTable } from "./api/view-api/generateViewTable";
import { exportToPdf } from "./api/view-api/exportToPdf";

const findBtn = document.querySelector(".find__data__btn");
const exportBtn = document.querySelector(".export__btn");
const selectDataSection = document.querySelector(".select__data__wrapper");
const viewSection = document.querySelector(".view__section");
const addedAtText = document.querySelector(".added__at");
const loggedUser = document.querySelector(".username");
const goTopBtn = document.querySelector(".goTopBtn");
const topSection = document.querySelector(".date__id");

function observerSubmit() {
  const observer = new IntersectionObserver((section) => {
    if (section[0].isIntersecting) {
      goTopBtn.style.opacity = "0";
      goTopBtn.style.pointerEvents = "none";
    } else {
      goTopBtn.style.opacity = "1";
      goTopBtn.style.pointerEvents = "initial";
    }
  });

  observer.observe(topSection);
}

const getData = async (date) => {
  try {
    const {
      data: {
        added_at,
        numberFieldData: {
          allTableData,
          dataInPercentage,
          dataNotInPercentage,
        },
        textFieldData,
      },
    } = await axios.get(`/view/data/${date}`);

    const tableEntries = Object.entries(allTableData);
    const dataPercentage = Object.values(dataInPercentage);
    const dataYear = Object.values(dataNotInPercentage);
    const dataText = Object.entries(textFieldData);
    addedAtText.textContent = added_at;
    const pcp = new Array();
    const pcpYear = new Array();

    // ? Format AddedAtText
    const formatter = (data) => {
      const str = data.split("-");
      const date = new Date();
      date.setMonth(+str[1].slice(1) - 1);
      const month = date.toLocaleString("default", { month: "long" });
      addedAtText.textContent = `${month} ${str[0]}`;
    };

    formatter(added_at);

    // ? Calculate PCP Percentage
    dataPercentage.forEach((data, index) => {
      const temp = data.map((ele) => Number(ele)).filter((ele) => ele > 0);
      const result =
        temp.reduce((prev, next) => {
          return prev + next;
        }) / temp.length;
      pcp.push(result.toFixed(2));
    });

    // ? Calculate PCP Year
    dataYear.forEach((data, index) => {
      const temp = data.map((ele) => Number(ele));
      const result = temp.reduce((prev, next) => {
        return prev + next;
      });
      pcpYear.push(result);
    });

    pcp.splice(3, 0, pcpYear[0]);
    pcp.splice(9, 0, pcpYear[1]);

    // ? Generate Chart && Table Data
    tableEntries.forEach((element, index) => {
      generateChart(element[1], `myChart${index + 1}`, index, pcp[index]);
      generateTable(index + 1, pcp[index], Object.values(element[1]));
    });

    // ? Generate Textfield Data
    dataText.forEach((row) => {
      Object.values(row[1]).forEach((field) => {
        generateFields(row[0].slice(5), field);
      });
    });

    selectDataSection.classList.add("element-hidden");
    viewSection.classList.remove("element-hidden");
  } catch (err) {
    alert("Data Not Found, Try Other !");
    throw "Data does not exist in database ..";
  }
};

async function getLoggedUser() {
  try {
    const response = await axios.get("logged/user");
    loggedUser.textContent = response.data;
  } catch (error) {
    console.log(error);
  }
}

findBtn.addEventListener("click", () => {
  const date = document.querySelector("#period").value;

  date != "" ? getData(date) : alert("please choose a correct user and period");
});

exportBtn.addEventListener("click", () => {
  // ** Data Table Selector
  const tableInputs = document.querySelector("#dataTable");
  // ** Canvas Selector
  const graphs = document.querySelectorAll(".bar__chart");
  // ** Desc Field Selector
  const descs = document.querySelectorAll(".input__table");

  // TODO change this ('test') to currently logged in user
  exportToPdf(tableInputs, "test", graphs, descs);
});

goTopBtn.addEventListener("click", () => {
  topSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

const start = () => {
  // getLoggedUser();
  observerSubmit();
};

start();

function go() {
  const date = (document.querySelector("#period").value = "2022-03");

  getData(date);
}

go();
