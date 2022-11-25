export type GulfCountries =
  | "Saudi Arabia"
  | "Qatar"
  | "Kuwait"
  | "United Arab Emirates"
  | "Oman"
  | "Bahrain"
  | "Iraq"
  | "Libya"
  | "Lebanon";

export type GulfCountriesProps = {
  id: number;
  country: GulfCountries;
  airports: string[];
};

export const SAUDI_AIRPORTS = [
  "Abha International Airport",
  "Al-Ahsa International Airport",
  "Prince Abdul Majeed bin Abdulaziz International Airport",
  "Prince Naif bin Abdulaziz International Airport",
  "King Fahd International Airport",
  "King Abdulaziz International Airport",
  "Prince Mohammad bin Abdulaziz International Airport",
  "King Khalid International Airport",
  "Taif International Airport",
  "Prince Abdul Mohsin bin Abdulaziz International Airport",
];

export const QATAR_AIRPORTS = ["Doha Hamad International Airport"];

export const KUWAIT_AIRPORTS = ["Kuwait International Airport"];

export const UAE_AIRPORTS = [
  "Abu Dhabi International Airport",
  "Al Ain International Airport",
  "Dubai International Airport",
  "Al Maktoum International Airport",
  "Fujairah International Airport",
  "Ras Al Khaimah International Airport",
  "Sharjah International Airport",
];

export const OMAN_AIRPORTS = [
  "Muscat International Airport",
  "Salalah International Airport",
  "Duqm International Airport",
  "Sohar International Airport",
  "Khasab Airport",
];

export const BAHRAIN_AIRPORTS = ["Bahrain International Airport"];

export const IRAQ_AIRPORTS = [
  "Al Iskandariyah Airport",
  "Al Najaf International Airport",
  "An Numaniyah Airport",
  "Baghdad International Airport",
  "Bamarni Airport",
  "Basra International Airport",
  "Erbil International Airport",
  "Al-Harir Air Base",
  "Karbala International Airport",
  "Karbala Northeast Airport",
  "Kirkuk Airport",
  "Mosul International Airport",
  "Nasiriyah International Airport",
  "Qasr Tall Airport",
  "Sulaymaniyah International Airport",
  "Tikrit East Airport",
  "Tikrit South Airport",
  "Umm Qasr Airport",
];

export const LIBYA_AIRPORTS = [
  "Al Abraq International Airport",
  "Benina International Airport",
  "Kufra Airport",
  "Ghadames Airport",
  "Ghat Airport",
  "Misrata International Airport",
  "Sabha Airport",
  "Gardabya Airport",
  "Tobruk Airport",
  "Tripoli International Airport",
  "Ubari Airport",
  "Alzintan Airport",
];

export const LEBANON_AIRPORTS = ["Beirut–Rafic Hariri International Airport"];

export const gulfCountries = <GulfCountriesProps[]>[
  {
    id: 1,
    country: "Saudi Arabia",
    airports: SAUDI_AIRPORTS,
  },
  {
    id: 2,
    country: "Qatar",
    airports: QATAR_AIRPORTS,
  },
  {
    id: 3,
    country: "Kuwait",
    airports: KUWAIT_AIRPORTS,
  },
  {
    id: 4,
    country: "United Arab Emirates",
    airports: UAE_AIRPORTS,
  },
  {
    id: 5,
    country: "Oman",
    airports: OMAN_AIRPORTS,
  },
  {
    id: 6,
    country: "Bahrain",
    airports: BAHRAIN_AIRPORTS,
  },
  {
    id: 7,
    country: "Iraq",
    airports: IRAQ_AIRPORTS,
  },
  {
    id: 8,
    country: "Libya",
    airports: LIBYA_AIRPORTS,
  },
  {
    id: 9,
    country: "Lebanon",
    airports: LEBANON_AIRPORTS,
  },
];
