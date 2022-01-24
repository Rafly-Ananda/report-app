"use stric";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";

const title = [
  "Menyelesaikan Prototype dan dokumen GPDP serta 3x produksi konsisten (Tepat Time To Market)",
  "Mencapai target zero complain desain produk vs URS sampai 1 tahun",
  "Mencapai Jumlah kelulusan training prosedur pembuatan, QC material dan produk,",
  "manual book alat (NM assembly, instalasi & QC, ETC, FMS staff terkait)",
  "Ketersediaan tools data collection performa produk sesuai target",
  "Mencapai target improvement product",
  "Closing STCS (major) max 1 th & closing project",
  "Memastikan proses kerja sesuai standar ISO (Menekan temuan audit status NC & PNC)",
  "Memenuhi gap kompetensi sesuai target",
  "Mencapai kebersihan bangunan 100% dan 6S (5S & safety)",
  "Mengikuti KS (3 Per semester)",
  "CMM",
];

const imgUrl = require("../../../../public/static/img-url.json");

const exportToPdf = (tableData, username, canvases, descs) => {
  let pdf = new jsPDF({
    orientation: "portrait",
    format: "a4",
  });

  pdf.setProperties({
    title: `Laporan Pencapaian Bulanan Unit Kerja`,
  });

  const date = new Date();
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
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

  // ! Rectangle
  // ** Outer Border
  pdf.rect(5, 6, 200, 285);
  // ** Header Bot Line Header
  pdf.line(5, 30, 205, 30);

  // ! lines(vertical)
  pdf.line(55, 6, 55, 30); // Medion Logo Box
  pdf.line(150, 6, 150, 30); // Doc & Revision NO Box
  pdf.line(175, 6, 175, 30); // Doc & Revision Separator

  // ! lines(horizontal)
  pdf.line(150, 18.5, 55, 18.5); // epc div - laporan .. horizontal separator
  pdf.line(150, 14.5, 204, 14.5); // no dokumen - mengetahui horizontal separator
  pdf.line(150, 22.5, 204, 22.5); // mengetahui - menyetujui horizontal separator

  // ** Table
  pdf.autoTable({
    html: tableData,
    theme: "grid",
    startY: 95,
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
  });

  // ? Constuctor Distance
  let distance = 28;

  // ******************* Individual KPI Data ************** //

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(38, 20, title[0]);
  // ** Graphs
  const canvas0 = canvases[0].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas0, "JPEG", 50, 28, 112, 58, "chart1");
  // ** Desc Table
  if (descs[0]) {
    pdf.autoTable({
      html: descs[0],
      theme: "grid",
      startY: (distance += 67),
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(58, 20, title[1]);
  // ** Graph
  const canvas1 = canvases[1].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas1, "JPEG", 50, 28, 112, 58, "chart2");
  // ** Desc Table
  if (descs[1]) {
    pdf.autoTable({
      html: descs[1],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(47, 20, title[2]);
  pdf.text(54, 23, title[3]);
  // ** Graph
  const canvas2 = canvases[2].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas2, "JPEG", 50, 29, 112, 58, "chart3");
  // ** Desc Table
  if (descs[2]) {
    pdf.autoTable({
      html: descs[2],
      theme: "grid",
      startY: 29 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(59, 20, title[4]);
  // ** Graph
  const canvas3 = canvases[3].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas3, "JPEG", 50, 28, 112, 58, "chart4");
  // ** Desc Table
  if (descs[3]) {
    pdf.autoTable({
      html: descs[3],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(80, 20, title[5]);
  // ** Graph
  const canvas4 = canvases[4].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas4, "JPEG", 50, 28, 112, 58, "chart5");
  // ** Desc Table
  if (descs[4]) {
    pdf.autoTable({
      html: descs[4],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(74, 20, title[6]);
  // ** Graph
  const canvas5 = canvases[5].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas5, "JPEG", 50, 28, 112, 58, "chart6");
  // ** Desc Table
  if (descs[5]) {
    pdf.autoTable({
      html: descs[5],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(44, 20, title[7]);
  // ** Graph
  const canvas6 = canvases[6].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas6, "JPEG", 50, 28, 112, 58, "chart7");
  // ** Desc Table
  if (descs[6]) {
    pdf.autoTable({
      html: descs[6],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(80, 20, title[8]);
  // ** Graph
  const canvas7 = canvases[7].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas7, "JPEG", 50, 28, 112, 58, "char8");
  // ** Desc Table
  if (descs[7]) {
    pdf.autoTable({
      html: descs[7],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(65, 20, title[9]);
  // ** Graph
  const canvas8 = canvases[8].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas8, "JPEG", 50, 28, 112, 58, "chart9");
  // ** Desc Table
  if (descs[8]) {
    pdf.autoTable({
      html: descs[8],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(88, 20, title[10]);
  // ** Graph
  const canvas9 = canvases[9].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas9, "JPEG", 50, 28, 112, 58, "chart10");
  // ** Desc Table
  if (descs[9]) {
    pdf.autoTable({
      html: descs[9],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);
  // ** KPI TITLE
  pdf.setFontSize(10);
  pdf.text(105, 20, title[11]);
  // ** Graph
  const canvas10 = canvases[10].toDataURL("image/jpeg", 1.0);
  pdf.addImage(canvas10, "JPEG", 50, 28, 112, 58, "chart11");
  // ** Desc Table
  if (descs[10]) {
    pdf.autoTable({
      html: descs[10],
      theme: "grid",
      startY: 28 + 67,
      columnStyles: {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
      },
      styles: {
        fontStyle: "bold",
      },
      bodyStyles: { lineColor: [0, 0, 0] },
    });
  }

  pdf.setFont("times", "bold");
  pdf.text(15, 238, formattedDate);
  pdf.setFont("times", "normal");
  pdf.text(15, 243, "Disusun oleh, ");
  pdf.text(15, 258, username);
  pdf.setFont("times", "bold");
  pdf.text(15, 264, "EPC Prod Development 1 Staff");
  pdf.setFont("times", "normal");
  pdf.line(15, 260, 60, 260);
  pdf.line(5.5, 270, 205, 270); // Separator address top line

  pdf.text(
    10,
    278,
    `PT Medion Farma Jaya
Equipment Division
Jl. Raya Batujajar No. 29 Cimareme, Kab. Bandung Barat, Jawa Barat 26887 | www.medion.co.id`
  );

  // pdf.addPage({ orientation: "portrait", format: "a4" });
  // // ** Reset Border Color
  // pdf.setDrawColor(0, 0, 0);
  // // ** Outer Border
  // pdf.rect(5.5, 5.5, 199.5, 286);
  // // ** KPI TITLE
  // pdf.setFontSize(10);
  // pdf.text(80, 20, title[12]);
  // // ** Graph
  // const canvas11 = canvases[11].toDataURL("image/jpeg", 1.0);
  // pdf.addImage(canvas11, "JPEG", 50, 28, 112, 58, "chart1");
  // // ** Desc Table
  // pdf.autoTable({
  //   html: descs[11],
  //   theme: "grid",
  //   startY: 28 + 67,
  //   columnStyles: {
  //     0: { halign: "center" },
  //     1: { halign: "center" },
  //     2: { halign: "center" },
  //     3: { halign: "center" },
  //     4: { halign: "center" },
  //     5: { halign: "center" },
  //     6: { halign: "center" },
  //   },
  //   styles: {
  //     fontStyle: "bold",
  //   },
  //   bodyStyles: { lineColor: [0, 0, 0] },
  // });

  pdf.output("dataurlnewwindow", {
    filename: `Laporan Pencapaian Bulanan Unit Kerja`,
  });
  // pdf.save("Laporan Pencapaian");
};

export { exportToPdf };
