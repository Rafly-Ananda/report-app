"use strict";

const generateUploadInputFields = (selector, ...data) => {
  let html;
  let tableSelector;
  const descField = document.querySelector(`.desc__${selector}`);
  let identifier = descField.childElementCount;

  if (descField.children[0] === undefined) {
    null;
  } else {
    tableSelector = descField.children[0].children[0].children[0];
    identifier = tableSelector.childElementCount;
  }

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
              >${data[0][1]}</textarea>
            </td>
            <td class="large__field">
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="solution__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
            >${data[0][2]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="PIC__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            >${data[0][3]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="UKT__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            >${data[0][4]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="DL__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
            >${data[0][5]}</textarea>
            </td>
            <td>
              <textarea
              name="row__${selector}__input__desc__${identifier + 1}"
              id="RL__field"
              class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field last"
            >${data[0][6]}</textarea>
            </td>
          </tr>
        </table>
    </div>
</div>`;
    descField.insertAdjacentHTML("beforeend", html);
  } else {
    html = `
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
        >${data[0][1]}</textarea>
      </td>
      <td class="large__field">
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="solution__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } large__text__field"
      >${data[0][2]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="PIC__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
      >${data[0][3]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="UKT__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
      >${data[0][4]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="DL__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field"
      >${data[0][5]}</textarea>
      </td>
      <td>
        <textarea
        name="row__${selector}__input__desc__${identifier + 1}"
        id="RL__field"
        class="row__${selector}__input__desc__${
      identifier + 1
    } small__text__field last"
      >${data[0][6]}</textarea>
      </td>
  </tr>`;
    tableSelector.insertAdjacentHTML("beforeend", html);
  }
};

export { generateUploadInputFields };
