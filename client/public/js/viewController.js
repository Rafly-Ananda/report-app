"use strict";
import axios from "axios";
import Chart from "chart.js/auto";

const findBtn = document.querySelector(".find__data__btn");
const selectDataSection = document.querySelector(".select__data__wrapper");
const viewSection = document.querySelector(".view__section");

const generateChart = (label, dataset, chartId) => {
  const ctx = document.getElementById(`${chartId}`).getContext("2d");
  const chartConfig = {
    type: "bar",
    data: {
      labels: ["BO1", "BO2", "BO3", "BO4", "BO5", "BO6"],
      datasets: [
        {
          label: label,
          data: dataset,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 0,
            textAlign: "center",
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
        },
      },
    },
  };

  new Chart(ctx, chartConfig);
};

const getData = async (user) => {
  const title = [
    "Menyelesaikan Prototype dan dokumen GPDP serta 3x produksi konsisten (Tepat Time To Market)",
    "Mencapai target zero complain desain produk vs URS sampai 1 tahun",
    [
      ["Mencapai Jumlah kelulusan training prosedur pembuatan"],
      // [
      //   ", QC material dan produk manual book alat (NM assembly, instalasi & QC, ETC, FMS staff terkait)",
      // ],
    ],
    "Ketersediaan tools data collection performa produk sesuai target",
    "Mencapai target improvement product",
    "Closing STCS (major) max 1 th & closing project",
    "Memastikan proses kerja sesuai standar ISO (Menekan temuan audit status NC & PNC)",
    "Memenuhi gap kompetensi sesuai target",
    "Mencapai kebersihan bangunan 100%  dan 6S (5S & safety)",
    "Mengikuti KS (3 Per semester)",
    "CMM",
  ];

  try {
    const resp = await axios.get(`/view/${user}`);
    const entries = Object.entries(resp.data.dataset);
    const values = Object.values(resp.data.dataset);
    const heading = document.querySelectorAll(".PCP__1");

    // ? Calculate PCP
    values.forEach((data, index) => {
      const temp = data.map((ele) => Number(ele)).filter((ele) => ele > 0);
      const result =
        temp.reduce((prev, next) => {
          return prev + next;
        }) / temp.length;
      heading[index].textContent = `PCP I = ${result.toFixed(1)}%`;
      console.log(result);
    });

    // ? Generate Chart
    entries.forEach((element, index) => {
      generateChart(title[index], element[1], `myChart${index + 1}`);
    });

    selectDataSection.classList.add("element-hidden");
    viewSection.classList.remove("element-hidden");
  } catch (err) {
    console.error(err);
  }
};

findBtn.addEventListener("click", () => {
  const user = document.querySelector("#user").value;
  user === "" ? alert("please choose a user") : getData(user);
});
