// import dynamic from 'next/dist/shared/lib/dynamic';
import PDF from "@components/PDF";
import Layout from "@components/PDF/invoice/layout";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// import Main from "@components/PDF/invoice/main";
// import { dummy as data } from '../invoice/dummy_data';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// const Layout = dynamic(import('../invoice/layout'), { ssr: false });

export default function Home() {
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <div className="w-screen mx-auto h-screen p-0 print:p-0 print:w-auto print:m-0 max-w-7xl">
      {/* {isClient && <div stle={{ width: '100vw', height: '100vh' }}></div>} */}
      {/* <PDFViewer width="100%" height="100%">
        <Main />
    </PDFViewer> */}

      {/* <Layout /> */}

      {/* <embed src={"/2210.pdf"} type="application/pdf" /> */}

      {/* Download */}
      {/* <PDFDownloadLink document={<Layout />} fileName="invoice.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download")}
      </PDFDownloadLink> */}
      <PDF />
    </div>
  );
}
