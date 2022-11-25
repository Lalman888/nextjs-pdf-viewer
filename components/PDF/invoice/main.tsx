// import { dummy as data } from './dummy_data';
import { PDFViewer } from "@react-pdf/renderer";
import ReactDOM from "react-dom";
import Layout from "./layoutAnother";
const data = {
  invoice_number: "asdf/21-22/001",
  invoice_date: "13-Jan-22",
  customer: {
    name: "Paril Rabadia",
    period_start: "1-Jan-2022",
    period_end: "31-Mar-2022",
  },
  deductions: {
    amount: 15123,
    discount: null,
    taxable_amount: 1000,
    gst_amount: 2000,
    grand_total: 12123,
    grand_total_words:
      "Rupees Twelve Thousand One Hundred and Twenty Three Only",
  },
  // this can be in frontend itself coz these details will remain same throuought
  midas_details: {
    name: "Midas Fintech Solutions Private Limited",
    pan: "AAOCM9076H",
    bank_name: "IDFC FIRST BANK",
    bank_account_no: "10076297691",
    bank_ifsc: "IDFB0040106",
    bank_branch: "Nariman Point",
  },
};

const Main = ({ data }: any) => {
  // console.log(data);
  // return
  return <Layout />;
};
export default Main;
