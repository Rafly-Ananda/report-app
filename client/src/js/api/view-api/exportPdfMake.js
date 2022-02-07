"use strict";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const exportPdfMake = () => {
  console.log("gooo");
  const docDefinition = {
    pageSize: "A4",
    info: {
      title: "Laporan Pencapaian Bulanan Unit Kerja",
    },
    header: "simple text",
    content: [
      "This paragraph fills full width, as there are no columns. Next paragraph however consists of three columns",
      {
        columns: [
          {
            // auto-sized columns have their widths based on their content
            width: "auto",
            text: "First column",
          },
          {
            // star-sized columns fill the remaining space
            // if there's more than one star-column, available width is divided equally
            width: "*",
            text: "Second column",
          },
          {
            // fixed width
            width: 100,
            text: "Third column",
          },
          {
            // % width
            width: "20%",
            text: "Fourth column",
          },
        ],
        // optional space between columns
        columnGap: 10,
      },
      "This paragraph goes below all columns and has full width",
    ],
  };

  pdfMake.createPdf(docDefinition).open();
};

export { exportPdfMake };
