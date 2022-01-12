"use strict";

const generateFields = (selector, ...data) => {
  let html;
  let tableSelector;
  let xoxo = 2;
  const descField = document.querySelector(`.desc__${selector}`);

  descField.children[0] === undefined
    ? null
    : (tableSelector = descField.children[0].children[0].children[0]);

  // ? elemen dibawah ini nanti di dalam div namanya .inputs__container

  if (descField.childElementCount === 0) {
    html = `
      <div class="table__inputs">
          <table>
            <tr class="tr__heading">
                <th class="heading">No.</th>
                <th class="heading">KPI</th>
                <th class="heading">SM</th>
                <th class="heading">BO1</th>
                <th class="heading">BO2</th>
                <th class="heading">BO3</th>
                <th class="heading">BO4</th>
                <th class="heading">BO5</th>
                <th class="heading">BO6</th>
            </tr>
            <tr>
                <td class="table__no">1</td>
                <td>
                <div class="heading__KPI">
                    ${xoxo}
                </div>
                </td>
                <td>${xoxo}</td>
                <td>
                    <input
                        type="number"
                        value="${xoxo}"
                    />
                </td>
                <td>
                    <input
                        type="number"
                        value="${xoxo}"
                    />
                </td>
                <td>
                    <input
                        type="number"
                        value="${xoxo}"
                    />
                </td>
                <td>
                    <input
                        type="number"
                        value="${xoxo}"
                    />
                </td>
                <td>
                    <input
                        type="number"
                        value="${xoxo}"
                    />
                </td>
                <td class="last__input">
                    <input
                        type="number"
                        value="${xoxo}"
                    />
                </td>
            </tr>
          </table>
      </div>`;
    descField.insertAdjacentHTML("beforeend", html);
  } else {
    html = `
        <tr>
            <td class="table__no">
                ${xoxo}
            </td>
            <td>
                <div class="heading__KPI"> ${xoxo} </div>
            </td>
            <td>
                ${xoxo}
            </td>
            <td>
                <input type="number" value="${xoxo}" />
            </td>
            <td>
                <input type="number" value="${xoxo}" />
            </td>
            <td>
                <input type="number" value="${xoxo}" />
            </td>
            <td>
                <input type="number" value="${xoxo}" />
            </td>
            <td>
                <input type="number" value="${xoxo}" />
            </td>
            <td class="last__input">
                <input type="number" value="${xoxo}" />
            </td>
        </tr>`;
    tableSelector.insertAdjacentHTML("beforeend", html);
  }
};

const generateTable = () => {
  const html = `
  <tr class="tr__heading">
    <th class="heading">No.</th>
    <th class="heading">KPI</th>
    <th class="heading">SM</th>
    <th class="heading">BO1</th>
    <th class="heading">BO2</th>
    <th class="heading">BO3</th>
    <th class="heading">BO4</th>
    <th class="heading">BO5</th>
    <th class="heading">BO6</th>
 </tr>
 <tr class="row__1">
    <td class="table__no">1</td>
    <td>
    <div class="heading__KPI">
        Menyelesaikan Prototype dan dokumen GPDP serta 3x produksi
        konsisten (Tepat Time To Market)
    </div>
    </td>
    <td>100.00%</td>
    <td>
    <input
    name="row__1__input"
    type="number"
    id="row__1__input__1"
    required
    />
    </td>
    <td>
    <input
        name="row__1__input"
        type="number"
        id="row__1__input__2"
        required
    />
    </td>
    <td>
    <input
        name="row__1__input"
        type="number"
        id="row__1__input__3"
        required
    />
    </td>
    <td>
    <input
        name="row__1__input"
        type="number"
        id="row__1__input__4"
        required
    />
    </td>
    <td>
    <input
        name="row__1__input"
        type="number"
        id="row__1__input__5"
        required
    />
    </td>
    <td class="last__input">
        <input
            name="row__1__input"
            type="number"
            id="row__1__input__6"
            required
        />
    </td>
    </tr>`;
};
