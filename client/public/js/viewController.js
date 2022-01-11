"use strict";
import axios from "axios";
import { generateChart, title } from "./tools/generateChart";

const findBtn = document.querySelector(".find__data__btn");
const selectDataSection = document.querySelector(".select__data__wrapper");
const viewSection = document.querySelector(".view__section");
const userSelectOptions = document.querySelector("#user");
const headingPercentage = document.querySelectorAll(".PCP__1");
const headingYear = document.querySelectorAll(".PCP__1__NP");

const getData = async (user, period) => {
  try {
    const response = await axios.get(`/view/data/${user}/${period}`);
    const { data: xoxo } = response;
    console.log(xoxo);
    const data = Object.entries(response.data.chartData);
    const dataPercentage = Object.values(
      response.data.numberFieldData.dataInPercentage
    );
    const dataYear = Object.values(
      response.data.numberFieldData.dataNotInPercentage
    );

    // ? Calculate PCP Percentage
    dataPercentage.forEach((data, index) => {
      const temp = data.map((ele) => Number(ele)).filter((ele) => ele > 0);
      const result =
        temp.reduce((prev, next) => {
          return prev + next;
        }) / temp.length;
      headingPercentage[index].textContent = `PCP I = ${result.toFixed(2)}%`;
    });

    // ? Calculate PCP Year
    dataYear.forEach((data, index) => {
      const temp = data.map((ele) => Number(ele));
      const result = temp.reduce((prev, next) => {
        return prev + next;
      });
      headingYear[index].textContent = `PCP I = ${result}`;
    });

    // ? Generate Chart
    data.forEach((element, index) => {
      generateChart(title[index], element[1], `myChart${index + 1}`);
    });

    selectDataSection.classList.add("element-hidden");
    viewSection.classList.remove("element-hidden");
  } catch (err) {
    alert("Data not found!");
    console.error(err);
  }
};

async function getUser() {
  const response = await axios.get("/view/data/user");
  const data = Object.values(response.data);

  data[0].forEach((ele) => {
    userSelectOptions.insertAdjacentHTML(
      "beforeend",
      `<option value="${ele}">${ele}</option>`
    );
  });
}

findBtn.addEventListener("click", () => {
  const user = document.querySelector("#user").value;
  const date = document.querySelector("#period").value;

  user != "-" && date != ""
    ? getData(user, date)
    : alert("please choose a correct user and period");
});

function start() {
  getUser();
}

start();
