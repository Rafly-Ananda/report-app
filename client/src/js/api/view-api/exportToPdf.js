"use stric";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";

const imgUrl = require("../../../../public/static/img-url.json");

const exportToPdf = (tableData, canvas1) => {
  const medionImg = Object.values(imgUrl[0]).toString();
  //   indicator__container.classList.add("smallTxt");
  const chartToImg1 = canvas1.toDataURL("image/jpeg", 1.0);
  // const chartToImg2 = canvas2.toDataURL("image/jpeg", 1.0);

  let pdf = new jsPDF({
    orientation: "portrait",
    format: "a4",
  });

  pdf.setProperties({
    title: `Laporan Pencapaian Bulanan Unit Kerja`,
  });

  // ** Medion Logo Header
  pdf.addImage(medionImg, 10, 12.5, 40, 11);
  // ** Graph1
  pdf.addImage(chartToImg1, "JPEG", 50, 178, 112, 58, "chart1");
  //   pdf.addImage(chartToImg2, "JPEG", 108.5, 47, 90, 58, "chart2");
  //   pdf.fromHTML(indicator__container, 28, 158);

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

  // ** Text Data Row 1
  pdf.setFontSize(10);
  pdf.text(
    38,
    170,
    "Menyelesaikan Prototype dan dokumen GPDP serta 3x produksi konsisten (Tepat Time To Market)"
  );

  // ? Main PDF Layouting
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
    startY: 38,
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
    },
    styles: {
      // fontStyle: "bold",
    },
    bodyStyles: { lineColor: [0, 0, 0] },
  });

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  pdf.addPage({ orientation: "portrait", format: "a4" });
  // ** Reset Border Color
  pdf.setDrawColor(0, 0, 0);
  // ** Outer Border
  pdf.rect(5.5, 5.5, 199.5, 286);

  //   pdf.text(
  //     10,
  //     274,
  //     `PT Medion Farma Jaya
  //   Equipment Division
  //   Jl. Raya Batujajar No. 29 Cimareme, Kab. Bandung Barat, Jawa Barat 26887 | www.medion.co.id`
  //   );

  pdf.output("dataurlnewwindow", {
    filename: `Laporan Pencapaian Bulanan Unit Kerja`,
  });
  // pdf.save("Laporan Pencapaian");
  // indicator__container.classList.remove("smallTxt");
};

export { exportToPdf };
