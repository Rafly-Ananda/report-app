"use strict";
import Chart from "chart.js/auto";

const generateChart = (dataset, chartId) => {
  const ctx = document.getElementById(`${chartId}`).getContext("2d");

  const chartConfig = {
    type: "bar",
    data: {
      labels: ["BO1", "BO2", "BO3", "BO4", "BO5", "BO6"],
      datasets: [
        {
          // label: label,
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
          display: false,
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
      scales: {},
    },
  };

  if (chartId === "myChart4" || chartId === "myChart10") {
    chartConfig.options.scales = {
      y: {
        min: 0,
        max: 1,
      },
    };
  } else {
    chartConfig.options.scales = {
      y: {
        min: 0,
        max: 100,
      },
    };
  }

  new Chart(ctx, chartConfig);
};

export { generateChart };
