export const data = [
  {
    invoice_number: "asdf/21-22/001",
    invoice_date: "13-Jan-22",
    customer: "Paril Rabadia",
    line_item: [
      {
        description: "Software subscription charges for the period",
        period_start: "January 1, 2021",
        period_end: "March 31, 2021",
        amount: 14123,
      },
      {
        description: "Software subscription charges for the period",
        period_start: "March 1, 2021",
        period_end: "June 30, 2021",
        amount: 14123,
      },
    ],
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
    payment: {
      name: "Midas Fintech Solutions Private Limited",
      pan: "AAOCM9076H",
      bank_name: "IDFC FIRST BANK",
      bank_account_no: "10076297691",
      bank_ifsc: "IDFB0040106",
      bank_branch: "Nariman Point",
    },
  },
];
