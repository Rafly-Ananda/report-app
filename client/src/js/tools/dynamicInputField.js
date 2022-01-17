"use strict";

const addFields = (selector, tableSelector) => {
  const descField = document.querySelector(`.desc__${selector}`);
  let identifier = descField.childElementCount;
  let html;

  if (identifier === 0) {
    html = `<div class="descriptions">
    <div class="table__fields">
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
          <td>
            <input
              name="row__${selector}__input__desc__${identifier + 1}"
              type="number"
              min="1"
              value=${identifier + 1}
              id="no__field"
              class="row__${selector}__input__desc__${identifier + 1}"
              readonly
            />
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="cause__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="solution__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="PIC__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="UKT__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="DL__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            ></textarea>
          </td>
          <td>
            <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="RL__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field last"
            ></textarea>
          </td>
        </tr>
      </table>
    </div>
  </div>`;
    descField.insertAdjacentHTML("beforeend", html);
  } else {
    identifier = tableSelector.childElementCount;
    html = `<tr>
      <td>
        <input
          name="row__${selector}__input__desc__${identifier + 1}"
          type="number"
          min="1"
          value=${identifier + 1}
          id="no__field"
          class="row__${selector}__input__desc__${identifier + 1}"
          readonly
        />
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="cause__field"
          class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="solution__field"
          class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="PIC__field"
          class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="UKT__field"
          class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="DL__field"
          class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
        ></textarea>
      </td>
      <td>
        <textarea
          name="row__${selector}__input__desc__${identifier + 1}"
          id="RL__field"
          class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
        ></textarea>
      </td>
    </tr>`;
    tableSelector.insertAdjacentHTML("beforeend", html);
  }
};

export { addFields };
