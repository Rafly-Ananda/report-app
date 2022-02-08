"use strict";

const generateDOMContainer = (title, index) => {
  const section = document.querySelector(".view__section");

  const html = `            
  <div class="data__container">
    <div class="data__wrapper">
      <h1 class="section__heading">${title}</h1>
      <div class="chart__container">
        <canvas class="bar__chart" id="myChart${index + 1}"></canvas>
      </div>
      <div class="desc__container desc__${index + 1} " data-desc-id=${
    index + 1
  }></div>
    </div>
  </div>`;

  section.insertAdjacentHTML("beforeend", html);
};

export { generateDOMContainer };
