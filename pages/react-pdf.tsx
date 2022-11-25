import React, { useState, useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";

const MyPdfViewer = () => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: "/2210.pdf",
    page,
    canvasRef,
  });

  return (
    <div className="max-w-6xl mx-auto bg-red-200 p-4 h-screen">
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} className="mx-auto" />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager py-4 print:hidden flex justify-center space-x-3">
            <li className="previous ">
              <button
                className="bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-600 px-4 py-2 font-semibold print:hidden inline-flex items-center gap-x-2 duration-200"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>
            </li>
            <li className="next">
              <button
                className="bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-600 px-4 py-2 font-semibold print:hidden inline-flex items-center gap-x-2 duration-200"
                disabled={page === pdfDocument?.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MyPdfViewer;
