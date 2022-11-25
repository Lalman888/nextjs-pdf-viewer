import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function printDocument() {
  const input = document.getElementsByClassName("NOCPrintPage");

  const pdf = new jsPDF();

  html2canvas(input[0] as HTMLElement).then((canvas) => {
    console.log(canvas);
    const imgData = canvas.toDataURL("image/png");
    // pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, "pdf", "NONE", 0);
    pdf.save("NOC-download.pdf");
  });

  // for (let i = 1; i < input.length; i++) {
  //   html2canvas(input[i] as HTMLElement).then((canvas) => {
  //     console.log(canvas);
  //     const imgData = canvas.toDataURL("image/png");
  //     // pdf.addImage(imgData, "JPEG", 0, 0);
  //     pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, "pdf", "NONE", 0);
  //     if (input.length - 1 === i) {
  //       pdf.save("download.pdf");
  //     } else {
  //       pdf.addPage();
  //     }
  //   });
  // }
}
