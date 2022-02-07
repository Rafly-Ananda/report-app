"use strict";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";

const imgUrl = require("../../../../public/static/img-url.json");

// ? JSpdf Constructor
let pdf = new jsPDF({
  orientation: "portrait",
  format: "a4",
});

pdf.setProperties({
  title: `Laporan Pencapaian Bulanan Unit Kerja`,
});

// ****************** Main PDF Layouting *************** //

// ** Medion Logo Header
const medionImg = Object.values(imgUrl[0]).toString();
pdf.addImage(medionImg, 10, 12.5, 40, 11);

// ** Texts
pdf.setFont("times", "bold");
pdf.setFontSize(17);
pdf.text(83, 14.5, "EPC DIVISION");
pdf.setFontSize(13);
pdf.text(62, 23, "Laporan Pencapaian Bulanan Unit Kerja");
pdf.text(75, 28, "EPC Product Development 1");
pdf.setFont("times", "normal");
pdf.setFontSize(8);
pdf.setFont("times", "bold");
pdf.setFont("times", "normal");
pdf.setFontSize(9);
pdf.text(153, 11.5, "No. Dokumen");
pdf.text(154, 19.5, "Mengetahui :");
pdf.text(154, 27, "Menyetujui :");

// ! lines(vertical)
pdf.line(55, 6, 55, 30); // Medion Logo Box
pdf.line(150, 6, 150, 30); // Doc & Revision NO Box
pdf.line(175, 6, 175, 30); // Doc & Revision Separator
pdf.line(5.5, 30, 205, 30); // Header Bot Line Header

// ! lines(horizontal)
pdf.line(150, 18.5, 55, 18.5); // epc div - laporan .. horizontal separator
pdf.line(150, 14.5, 204, 14.5); // no dokumen - mengetahui horizontal separator
pdf.line(150, 22.5, 204, 22.5); // mengetahui - menyetujui horizontal separator

const drawGraph = (prevLength, title, canvas) => {
  const imgWidth = 112;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  const splitTitle = pdf.splitTextToSize(title, 115);
  // ** KPI TITLE
  pdf.setFont("times", "bold");
  pdf.setFontSize(10);
  pdf.text(38, (prevLength += 10), splitTitle);
  pdf.setFont("times", "normal");
  // ** Graphs
  pdf.addImage(
    canvas.toDataURL("image/jpeg", 1.0),
    "JPEG",
    50,
    prevLength + 10,
    imgWidth,
    imgHeight
  );
};

const drawTable = (table, startY = 40) => {
  // ** Table
  pdf.autoTable({
    html: table,
    theme: "grid",
    startY: startY,
    columnStyles: {
      0: { halign: "center" },
      1: { halign: "center" },
      2: { halign: "center" },
      3: { halign: "center" },
      4: { halign: "center" },
      5: { halign: "center" },
      6: { halign: "center" },
      7: { halign: "center" },
      8: { halign: "center" },
      9: { halign: "center", minCellWidth: "15" },
    },
    styles: {
      fontStyle: "bold",
    },
    bodyStyles: { lineColor: [0, 0, 0] },
    didDrawPage: function (data) {
      console.log(data.cursor.y);
    },
  });
};

const exportToPdf = (tableData, username, canvases, descs, titleArr) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // ************** Individual KPI Data ************** //

  let lastPage;
  drawTable(tableData);
  titleArr.forEach((title, index) => {
    pdf.addPage();
    lastPage = index;
  });

  pdf.setPage(1);
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5, 6, 200, 285);

  // ? Add border to all page
  for (let i = 0; i <= lastPage; i++) {
    pdf.setPage(i + 2);
    // ** Reset Border Color
    pdf.setDrawColor(0, 0, 0);
    // ** Outer Border
    pdf.rect(5, 6, 200, 285);
    // ** Draw Graph
    drawGraph(10, titleArr[i], canvases[i]);
    // ** Draw Table
    drawTable(descs[i], 95);
  }

  pdf.setPage(lastPage + 2);

  pdf.setFont("times", "bold");
  pdf.text(15, 238, formattedDate);
  pdf.setFont("times", "normal");
  pdf.text(15, 243, "Disusun oleh, ");
  pdf.text(15, 258, username);
  pdf.setFont("times", "bold");
  pdf.text(15, 264, "EPC Prod Development 1 Staff");
  pdf.setFont("times", "normal");
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  pdf.line(15, 260, 60, 260);
  pdf.line(5.5, 270, 205, 270); // Separator address top line

  pdf.text(
    10,
    278,
    `PT Medion Farma Jaya
Equipment Division
Jl. Raya Batujajar No. 29 Cimareme, Kab. Bandung Barat, Jawa Barat 26887 | www.medion.co.id`
  );

  window.open(pdf.output("bloburl"));
};

export { exportToPdf };
