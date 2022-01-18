"use strict";

const title = [
  "Menyelesaikan Prototype dan dokumen GPDP serta 3x produksi konsisten (Tepat Time To Market)",
  "Mencapai target zero complain desain produk vs URS sampai 1 tahun",
  "Mencapai Jumlah kelulusan training prosedur pembuatan, QC material dan produk, manual book alat (NM assembly, instalasi & QC, ETC, FMS staff terkait)",
  "Ketersediaan tools data collection performa produk sesuai target",
  "Mencapai target improvement product",
  "Closing STCS (major) max 1 th & closing project",
  "Memastikan proses kerja sesuai standar ISO (Menekan temuan audit status NC & PNC)",
  "Memenuhi gap kompetensi sesuai target",
  "Mencapai kebersihan bangunan 100% dan 6S (5S & safety)",
  "Mengikuti KS (3 Per semester)",
  "CMM",
];

const generateTable = (index, ...data) => {
  let html;
  let htmlSelector = document.querySelector(`.table__inputs`);

  htmlSelector.children[0] === undefined
    ? null
    : (htmlSelector = htmlSelector.children[0].children[0]);

  if (htmlSelector.childElementCount === 0) {
    html = `
    <table>
        <tr class="tr__heading">
            <th class="heading">No.</th>
            <th class="heading KPI">KPI</th>
            <th class="heading SM__ele">SM</th>
            <th class="heading BO">BO1</th>
            <th class="heading BO">BO2</th>
            <th class="heading BO">BO3</th>
            <th class="heading BO">BO4</th>
            <th class="heading BO">BO5</th>
            <th class="heading last__heading">BO6</th>
        </tr>
        <tr>
            <td class="table__no">${index}</td>
            <td clas="heading__td">
            <div class="heading__KPI">
            ${title[index - 1]}</div>
            </td>
            <td>${index === 4 || index === 10 ? "tahun" : "100.00%"}</td>
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
        </tr>
    </table>`;
    htmlSelector.insertAdjacentHTML("beforeend", html);
  } else {
    html = `
    <tr>
        <td class="table__no">${index}</td>
        <td>
            <div class="heading__KPI">${title[index - 1]}</div>
        </td>
        <td>
        ${index === 4 || index === 10 ? "3/tahun" : "100.00%"}
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
    </tr>`;
    htmlSelector.insertAdjacentHTML("beforeend", html);
  }
};

export { generateTable };
