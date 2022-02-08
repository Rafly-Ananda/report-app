"use strict";

const generateTable = (index, pcp, pcpType, title, ...data) => {
  let html;
  let htmlSelector = document.querySelector(`.table__inputs`);

  htmlSelector.children[0] === undefined
    ? null
    : (htmlSelector = htmlSelector.children[0].children[0]);

  if (htmlSelector.childElementCount === 0) {
    html = `
      <table id="dataTable">
          <tr class="tr__heading">
              <th class="heading">No.</th>
              <th class="heading KPI">KPI</th>
              <th class="heading SM__ele">SM</th>
              <th class="heading BO">BO1</th>
              <th class="heading BO">BO2</th>
              <th class="heading BO">BO3</th>
              <th class="heading BO">BO4</th>
              <th class="heading BO">BO5</th>
              <th class="heading BO">BO6</th>
              <th class="heading last__heading">PCP</th>
          </tr>
          <tr>
              <td class="table__no">${index}</td>
              <td>
                  <div class="heading__KPI">
                      <h1>${title}</h1>
                  </div>
              </td>
              <td>
              ${pcpType === "percentage" ? "100.00%" : "3/tahun"}
              </td>
              <td>
                  <div class="data">${
                    data[0][0] === "" ? "-" : data[0][0]
                  }</div>
              </td>
              <td>
                  <div class="data">${
                    data[0][1] === "" ? "-" : data[0][1]
                  }</div>
              </td>
              <td>
                  <div class="data">${
                    data[0][2] === "" ? "-" : data[0][2]
                  }</div>
              </td>
              <td>
                  <div class="data">${
                    data[0][3] === "" ? "-" : data[0][3]
                  }</div>
              </td>
              <td>
                  <div class="data">${
                    data[0][4] === "" ? "-" : data[0][4]
                  }</div>
              </td>
              <td>
                  <div class="data">${
                    data[0][5] === "" ? "-" : data[0][5]
                  }</div>
              </td>
              <td>
                  <div class="data">${pcp < 6 ? pcp : pcp + "%"}</div>
              </td>
          </tr>
      </table>`;
    htmlSelector.insertAdjacentHTML("beforeend", html);
  } else {
    html = `
      <tr>
          <td class="table__no">${index}</td>
          <td>
            <div class="heading__KPI">
                <h1>${title}</h1>
            </div>
          </td>
          <td>
          ${pcpType === "percentage" ? "100.00%" : "3/tahun"}
          </td>
          <td>
              <div class="data">${data[0][0] === "" ? "-" : data[0][0]}</div>
          </td>
          <td>
              <div class="data">${data[0][1] === "" ? "-" : data[0][1]}</div>
          </td>
          <td>
              <div class="data">${data[0][2] === "" ? "-" : data[0][2]}</div>
          </td>
          <td>
              <div class="data">${data[0][3] === "" ? "-" : data[0][3]}</div>
          </td>
          <td>
              <div class="data">${data[0][4] === "" ? "-" : data[0][4]}</div>
          </td>
          <td>
              <div class="data">${data[0][5] === "" ? "-" : data[0][5]}</div>
          </td>
          <td>
              <div class="data">${pcp < 6 ? pcp : pcp + "%"}</div>
          </td>
      </tr>`;
    htmlSelector.insertAdjacentHTML("beforeend", html);
  }
};

export { generateTable };
