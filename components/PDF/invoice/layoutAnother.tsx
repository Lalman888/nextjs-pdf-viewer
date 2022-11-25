import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

let indianCurrency = Intl.NumberFormat("en-IN");

// Some styles are directly used and some through this object
const styles = StyleSheet.create({
  pageWraper: {
    backgroundColor: "#fff",
    fontSize: 12,
    paddingTop: 35,
    paddingBottom: 65,
  },
  page: {
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
  },
  twoSides: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const styleUtils = {
  universalPad: {
    padding: "1cm ",
  },
  fontsm: {
    fontSize: 12,
  },
  fontmd: {
    fontSize: 13,
  },
  borderBottom: {
    borderBottom: "1px solid #EBEBEB",
  },
  borderAll: {
    border: "1px solid #EBEBEB",
  },
  leftPad: {
    padding: "0cm 0cm 0cm 1cm",
  },
  rightPad: {
    padding: "0cm 1cm 0cm 0cm",
  },
  horizontalPad: {
    padding: "0cm 1cm 0cm 1cm",
  },
  verticalPad: {
    padding: "1cm 0cm 1cm 0cm",
  },
};

const PdfLayout = () => {
  return (
    <View style={styles.page}>
      <Header />
      <BillDetails />
      <LineItem />
      <CumDetails />
      <Footer />
      <Text
        style={[
          styleUtils.universalPad,
          {
            color: "#707070",
            // position: 'absolute',
            // bottom: 0,
            // left: 0,
          },
        ]}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
        fixed
      />
    </View>
  );
};
// export default Layout;
export default function Layout({ data }: any) {
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        <Page size="A4" style={[styles.pageWraper, {}]}>
          <PdfLayout />
        </Page>
      </Document>
    </PDFViewer>
  );
}

const Header = () => (
  <View style={[styles.twoSides, styleUtils.universalPad]}>
    <View>
      <Text>Logo</Text>
    </View>
    <View>
      <Text style={[styles.header]}>Tax Invoice</Text>
    </View>
  </View>
);

const BillDetails = () => (
  <View
    style={[
      styles.twoSides,
      styleUtils.universalPad,
      {
        borderTop: "1px solid #EBEBEB",
        borderBottom: "1px solid #EBEBEB",
      },
    ]}
  >
    <View style={[]}>
      <Text style={[{ paddingBottom: "0.25cm" }]}>Bill to:</Text>
      <Text style={[{ color: "#333333" }]}>Receipient Name</Text>
    </View>
    <View style={[]}>
      <Text style={[{ paddingBottom: "0.25cm" }]}>Invoice No:</Text>
      <Text style={[{ color: "#333333" }]}>MFSPL/21-22/001</Text>
    </View>
    <View style={[]}>
      <Text style={[{ paddingBottom: "0.25cm" }]}>Issue Date:</Text>
      <Text style={[{ color: "#333333" }]}>January 3, 2022</Text>
    </View>
  </View>
);

const LineItem = () => (
  <View>
    <View
      style={[
        styles.twoSides,
        styleUtils.universalPad,
        {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid #EBEBEB",
        },
      ]}
    >
      <Text>Description</Text>
      <Text>Amount - INR</Text>
    </View>
    {lineItemsData.map((item, index) => (
      <Item
        key={index}
        item={item.item}
        period={item.period}
        amount={item.amount}
      />
    ))}
  </View>
);
const lineItemsData = [
  {
    item: "Software subscription charges for the period",
    period: "January 2, 2022 - March 31, 2022",
    amount: 140000,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 42424,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 75254,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 75255,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 14123,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 42424,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 75254,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 75255,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 14123,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 42424,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 75254,
  },
  {
    item: "Software subscription charges for the period",
    period: "January 1, 2022 - March 31, 2022",
    amount: 75255,
  },
];
const Item = ({
  item,
  period,
  amount,
}: {
  item: string;
  period: string;
  amount: number;
}) => (
  <View style={[styles.twoSides, { padding: "0.5cm 1cm 0.5cm 1cm" }]}>
    <View>
      <Text style={[{ paddingBottom: "0.25cm" }]}>{` ${item} -`}</Text>
      <Text style={[{ color: "#333333" }]}>{` ${period} `}</Text>
    </View>
    <Text>
      {/*₹*/}
      {`Rs. ${indianCurrency.format(amount)} `}
    </Text>
  </View>
);

const CumDetails = () => (
  <>
    <View
      style={[
        styleUtils.universalPad,
        {
          flexDirection: "row",
          justifyContent: "flex-end",
          borderTop: "1px solid #EBEBEB",
          borderBottom: "1px solid #EBEBEB",
        },
      ]}
    >
      <View style={{ flexDirection: "column" }}>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingBottom: "0.25cm",
            },
          ]}
        >
          <Text style={[{ paddingRight: "2cm" }]}>Total Taxable Value:</Text>
          <Text style={[{}]}>{`Rs. ${indianCurrency.format(12345)}`}</Text>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "flex-end",
            },
          ]}
        >
          <Text style={[{ paddingRight: "2cm" }]}>
            <Text style={[{ color: "#707070" }]}>Additinal</Text> - IGST:
          </Text>
          <Text style={[{ textAlign: "right" }]}>
            {`Rs. ${indianCurrency.format(6675)}`}
          </Text>
        </View>
      </View>
    </View>
    <View
      style={[
        {
          flexDirection: "row",
          padding: "0.5cm 1cm 0.5cm 1cm",
          justifyContent: "flex-end",
          borderBottom: "1px solid #EBEBEB",
        },
      ]}
    >
      <Text style={[{ paddingRight: "2cm" }]}>Grand Total: </Text>
      <Text> {`Rs. ${indianCurrency.format(6675)}`}</Text>
    </View>
  </>
);

const Footer = () => (
  <View style={[styles.twoSides, styleUtils.universalPad, {}]}>
    <View>
      <Text style={{ fontSize: 16, paddingBottom: "0.4cm" }}>
        Payment Info:
      </Text>
      <Text style={[{ paddingBottom: "0.2cm" }]}>
        <Text style={[{ color: "#333333" }]}>Bank Details:</Text> IDFC FIRST
        BANK
      </Text>
      <Text style={[{ paddingBottom: "0.2cm" }]}>
        <Text style={[{ color: "#333333" }]}>Account Number:</Text> 10076297691
      </Text>
      <Text style={[{ paddingBottom: "0.2cm" }]}>
        <Text style={[{ color: "#333333" }]}>IFSC CODE:</Text> IDFB0040106
      </Text>
      <Text style={[{ paddingBottom: "0.2cm" }]}>
        <Text style={[{ color: "#333333" }]}>Branch:</Text> Nariman Point
      </Text>
      <Text style={[{ paddingBottom: "0.2cm", color: "#333333" }]}>
        Please issue cheque in favor of:
      </Text>
      <Text>Midas Fintech Solutions Private Limited</Text>
    </View>
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Text style={{ textAlign: "right" }}>
        Midas Fintech Solutions Private Limited
      </Text>
      <Text>Sign Here</Text>
      <Text style={{ textAlign: "right" }}>Authorized Signatory</Text>
    </View>
  </View>
);
