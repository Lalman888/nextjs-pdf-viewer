import React, { useRef } from "react";
import { printDocument } from "./pdfSaver";
import PdfHeader from "./PDFHeader";
// import PDfFooter from "./PDFFooter";
import { HiOutlineDocumentDownload, HiPrinter } from "react-icons/hi";
import "@styles/pdf.module.css";
import ReactToPrint from "react-to-print";

export default function PDF() {
  // const printRef = useRef <React.>();

  const NocPage = () => (
    <div
      className="NOCPrintPage shadow-lg mx-auto print:scale-110 print:m-0 print:shadow-none page"
      id="invoicePageOne"
      style={pageStyle}
    >
      <div className="subpage relative">
        <EmbassyStamp />
        <PdfHeader />
        <DocDetails />
        <div
          className="flex text-center justify-center pt-14 pb-8"
          style={textBodyStyles}
        >
          <h1 className="font-bold text-base font-serif uppercase underline">
            To whom it may concern
          </h1>
        </div>
        <ContentBodyNOC_1
          full_name="Laxman Aryal"
          passport_no="11456283"
          travel_country="United Arab Emirates"
          travel_from="Delhi Airport"
        />
        <EmptySpace space={2} />

        <ContentBodyNOC_2 travel_country="United Arab Emirates" />
        <PDfFooter />
      </div>
    </div>
  );

  const PdfButtons = () => (
    <div className="py-4 print:hidden flex justify-start space-x-3">
      <button
        className="bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-600 px-4 py-2 font-semibold print:hidden inline-flex items-center gap-x-2 duration-200"
        onClick={() => printDocument()}
      >
        Download
        <HiOutlineDocumentDownload className="h-4 w-4" />
      </button>
    </div>
  );
  return (
    <div className="mx-auto w-full px-4 book">
      <PdfButtons />
      <NocPage />
    </div>
  );
}

const EmptySpace = ({ space }: { space: number }) => (
  <div style={{ height: `${space}rem` }}></div>
);

const pageStyle = {
  backgroundColor: "#ffffff",
  width: "210mm",
  minHeight: "297mm",
};

const EmbassyStamp = () => (
  <div className="absolute top-20 left-8 flex justify-center w-full">
    <img src="/embassy-stamp.png" className="h-24" alt="embassy-stamp" />
  </div>
);

const DocDetails = () => (
  <div
    className="flex justify-between font-bold text-sm font-serif"
    style={textBodyStyles}
  >
    <div className="inline-flex space-x-1">
      <p className="">Ref. No.</p>
      <span className="text-sm">078/79/GR-FRI/1607</span>
    </div>

    <div className="inline-flex space-x-1">
      <p className="font-bold">Date:-</p>
      <span>25 March, 2022</span>
    </div>
  </div>
);

const ContentBodyNOC_1 = ({
  full_name = "Laxman Aryal",
  passport_no = "11456283",
  travel_country = "United Arab Emirates",
  travel_via,
  travel_from = "Delhi Airport",
}: {
  full_name: string;
  passport_no: string;
  travel_country: string;
  travel_via?: string;
  travel_from: string;
}) => (
  <div className="text-justify indent-12 font-serif" style={textBodyStyles}>
    <p>
      Based on the documents submitted at this Embassy, this is to state that{" "}
      <span className="font-extrabold">Mr. {full_name}</span> (holder of Nepali{" "}
      <span className="font-bold">Passport No. {passport_no}</span>
      ), currently staying in India, is intending to travel to the{" "}
      {travel_country} using {travel_from} in India shortly.
    </p>
  </div>
);

export const textBodyStyles = {
  WebkitTransform: "scaleX(1.08)",
  transform: "scaleX(1.08)",
  paddingRight: "7.4rem",
  paddingLeft: "7.4rem",
};

const ContentBodyNOC_2 = ({
  travel_country = "United Arab Emirates",
}: {
  travel_country: string;
}) => {
  return (
    <div className="text-justify indent-12 font-serif" style={textBodyStyles}>
      <p>
        Any needful cooperation extended to him during his journey from India to
        the {travel_country} as per the existing rules and regulation, would be
        highly appreciated.
      </p>
    </div>
  );
};

const PDfFooter = () => (
  <div className="flex justify-between" style={textBodyStyles}>
    <div className="invisible"></div>
    <div className="flex flex-col justify-between items-end">
      <div className="px-4 flex justify-center items-center">
        <img
          src="/embassy-sign.png"
          alt="embassy signature"
          className="h-16 -rotate-12 "
        />
      </div>
      {/* <Signature /> */}
      <div className="flex flex-col justify-center font-serif text-center items-center">
        <p className="font-bold">(Chandra Kanta Parajuli)</p>
        <p>Third Secretary</p>
      </div>
    </div>
  </div>
);
