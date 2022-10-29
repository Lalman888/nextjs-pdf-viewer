import ReactPDF from "@react-pdf/renderer";
import MyDocument from "@components/MyDocument";

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
