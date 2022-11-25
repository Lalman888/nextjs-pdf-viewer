import React, { useState, Fragment, useEffect } from "react";
import { airports } from "@utils/airports-india";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { TbPlaneDeparture } from "react-icons/tb";

export type AirportTypes = {
  ICAO_code: string;
  IATA_code: string;
  airport_name: string;
  city_name: string;
};

export type AirportInputTypes = {
  selectedAirport: AirportTypes;
  setSelectedAirport: React.Dispatch<React.SetStateAction<AirportTypes>>;
};

export { airports };

const AirportInput = ({
  selectedAirport,
  setSelectedAirport,
}: AirportInputTypes) => {
  const [query, setQuery] = useState("");
  let gap = " ";

  const filteredAirport =
    query === ""
      ? airports
      : airports.filter((airport) => {
          let airportName = airport.airport_name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
          let cityName = airport.city_name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
          let ICAO_code = airport.ICAO_code.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));

          let IATA_code = airport.IATA_code.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
          return cityName || ICAO_code || IATA_code || cityName;
        });

  return (
    <div className="w-72">
      <Combobox value={selectedAirport} onChange={setSelectedAirport}>
        <Combobox.Label
          htmlFor="Travel from"
          className="text-xs block text-gray-500 font-bold mb-2 uppercase tracking-wide"
        >
          Travel from (Airport)
        </Combobox.Label>
        <div className="relative mt-1">
          <div className="relative w-72 cursor-default overflow-hidden text-gray-900 bg-white shadow-md text-left hover:ring-2 focus:ring-4 focus:outline-2 border-2 border-slate-100 appearance-none font-medium rounded-lg text-sm inline-flex items-center">
            <span className="flex items-center px-2 border-r-2">
              <label htmlFor="currency" className="sr-only">
                Airport
              </label>
              <TbPlaneDeparture
                className={`h-5 w-5 ${
                  selectedAirport ? "text-indigo-500" : "text-gray-400"
                } `}
                aria-hidden="true"
              />
            </span>

            <Combobox.Input
              className="w-full border-none py-2 pl-2 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
              displayValue={(airport: AirportTypes) => {
                return airport?.city_name + gap + "(" + airport.IATA_code + ")";
              }}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-transparent ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredAirport.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Oops! No airport found.
                </div>
              ) : (
                filteredAirport.map((airport) => (
                  <Combobox.Option
                    key={airport.city_name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-indigo-500 text-white" : "text-gray-900"
                      }`
                    }
                    value={airport}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {airport.city_name} - ({airport.IATA_code}){" "}
                          <span
                            className={`text-xs ${
                              active ? "text-white" : "text-gray-500"
                            }`}
                          >
                            {airport.airport_name}
                          </span>
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-indigo-500"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-gray-700"
                            }`}
                          >
                            <TbPlaneDeparture
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default AirportInput;
