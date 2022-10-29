import React, { useEffect } from "react";
import type { NextPage } from "next";
import Article from "../components/Article";
import PDFLayout from "../components/PDFLayout";
import pdfHelper from "@utils/pdfHelper";

const pdfRender: NextPage = () => {
  // useEffect(() => {
  //   async ({ req, res, query }) => {
  //     const exportPDF = query.exportPDF === "true";
  //     const isServer = !!req;

  //     if (isServer && exportPDF) {
  //       const buffer = await pdfHelper(
  //         <PDFLayout>
  //           <Article />
  //         </PDFLayout>
  //       );

  //       // with this header, your browser will prompt you to download the file
  //       // without this header, your browse will open the pdf directly
  //       res.setHeader(
  //         "Content-disposition",
  //         'attachment; filename="article.pdf'
  //       );

  //       // set content type
  //       res.setHeader("Content-Type", "application/pdf");

  //       // output the pdf buffer. once res.end is triggered, it won't trigger the render method
  //       res.end(buffer);
  //     }
  //   };
  // }, []);

  return (
    <div className="bg-slate-200 mx-auto">
      <Article />
    </div>
  );
};

export default pdfRender;
