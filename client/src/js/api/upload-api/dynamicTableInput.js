"use strict";

const addKpiTable = (tableSelector, fillBefore) => {
  const identifier = tableSelector.childElementCount;

  const html = `
    <tr class="row__${identifier}">
        <td class="table__no">${identifier}</td>
        <td>
            <div class="heading__KPI">
            ${
              fillBefore
                ? `
                <h1 class="row__${identifier}__input__KPI" id="KPI__title"></h1>
                `
                : `
                <textarea
                    name="row__${identifier}__input__KPI"
                    class="row__${identifier}__input__KPI"
                    id="KPI__title"
                ></textarea>`
            }

            </div>
        </td>
        <td>
            ${
              fillBefore
                ? `<h1 class="SM__selector__${identifier}" id="SM__field"></h1>`
                : `
            <select class="SM__selector__${identifier}" id="SM__field">
                <option>-</option>
                <option value="percentage">100.00%</option>
                <option value="year">3/tahun</option>
            </select>
            `
            }

        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__${identifier}"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__2"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__3"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__4"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td>
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__5"
            class="row__${identifier}__input"
            required
            />
        </td>
        <td class="last__input">
            <input
            name="row__${identifier}__input"
            type="number"
            id="row__${identifier}__input__6"
            class="row__${identifier}__input"
            required
            />
        </td>
    </tr>`;
  tableSelector.insertAdjacentHTML("beforeend", html);
};

export { addKpiTable };
