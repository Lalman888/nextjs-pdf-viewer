import { NextPage } from "next";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@components/pdf-viewer"), {
  ssr: false,
});

// const PDF_URL = require("/sample.pdf");
// "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";

const ViewLocalPDF: NextPage = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState("./2210.pdf");

  // To prevent right click on screen
  if (typeof window !== "undefined") {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }

  // When document gets loaded successfully
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }
  function nextPage() {
    changePage(1);
  }

  return (
    <div className="flex flex-col h-screen w-screen mx-auto justify-start items-center">
      <div className="shadow-2xl w-full h-full mx-auto flex flex-col justify-center items-center p-4 px-4 bg-gray-800">
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document> */}
        <object
          data={file}
          type="application/pdf"
          width="100%"
          className="h-full overflow-hidden rounded-3xl shadow-md"
        ></object>
      </div>
      {/* <div>
        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
      </div> */}
      {/* <PdfActionButtons
        pageNumber={pageNumber}
        previousPage={previousPage}
        numPages={numPages}
        nextPage={nextPage}
      /> */}
    </div>
  );
};

type PdfActionButtonsProps = {
  pageNumber: number;
  numPages: number;
  previousPage: () => void;
  nextPage: () => void;
};

const PdfActionButtons = ({
  pageNumber,
  previousPage,
  numPages,
  nextPage,
}: PdfActionButtonsProps) => {
  return (
    <div className="flex space-x-4 text-sm font-medium">
      <button
        type="button"
        className="bg-gray-200 rounded-md px-4 py-2 shadow-sm"
        disabled={pageNumber <= 1}
        onClick={previousPage}
      >
        Previous
      </button>
      <button
        type="button"
        className="bg-gray-200 rounded-md px-4 py-2 shadow-sm"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default ViewLocalPDF;
