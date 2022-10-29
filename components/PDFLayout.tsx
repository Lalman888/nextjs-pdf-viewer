import React from "react";

type PDFLayoutTypes = {
  children?: React.ReactNode;
};

const renderPDFFooter = () => (
  <div
    id="pageFooter"
    className="text-sm border-t-2 border-red-500 text-gray-800"
  >
    <p>This is a simple footer</p>
  </div>
);

const PDFLayout = ({ children }: PDFLayoutTypes) => {
  return (
    <div className="py-4 text-sm bg-white">
      {children}
      {renderPDFFooter()}
    </div>
  );
};

export default PDFLayout;
