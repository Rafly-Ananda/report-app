"use strict";

const generateFields = (selector, ...data) => {
  let html;
  let tableSelector;
  const descField = document.querySelector(`.desc__${selector}`);

  descField.children[0] === undefined
    ? null
    : (tableSelector = descField.children[0].children[0].children[0]);

  if (descField.childElementCount === 0) {
    html = `
    <div class="descriptions">
        <table class="input__table">
          <tr class="tr__heading">
            <th>NO</th>
            <th>Penyebab</th>
            <th>Penyelesaian</th>
            <th>PIC</th>
            <th>UKT</th>
            <th>DL</th>
            <th>RL</th>
          </tr>
          <tr>
            <td class="no">
              ${data[0][0]}
            </td>
            <td class="large__field">
            <div class="content__container">
                <div class="content">${data[0][1]}</div>
              </div>
            </td>
            <td class="large__field">
              <div class="content__container">
                <div class="content">${data[0][2]}</div>
              </div>
            </td>
            <td>
              ${data[0][3]}
            </td>
            <td>
              ${data[0][4]}
            </td>
            <td>
              ${data[0][5]}
            </td>
            <td>
              ${data[0][6]}
            </td>
          </tr>
        </table>
    </div>`;
    descField.insertAdjacentHTML("beforeend", html);
  } else {
    html = `
          <tr>
            <td class="no"> 
            ${data[0][0]}
            </td>
            <td class="large__field">
              <div class="content__container">
                  <div class="content">${data[0][1]}</div>
                </div>
              </td>
            <td class="large__field">
            <div class="content__container">
            <div class="content">${data[0][2]}</div>
          </div>
            </td>
            <td>
              ${data[0][3]}
            </td>
            <td>
              ${data[0][4]}
            </td>
            <td>
              ${data[0][5]}
            </td>
            <td> 
              ${data[0][6]}
            </td>
          </tr>`;
    tableSelector.insertAdjacentHTML("beforeend", html);
  }
};

export { generateFields };
