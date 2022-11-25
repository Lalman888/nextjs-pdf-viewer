import AirportInput, {
  AirportTypes,
  airports,
} from "@components/new-changes/AirportInput";
import GulfAirportSelect from "@components/travel/GulfAiportSelect";
import GulfSelect from "@components/travel/GulfSelect";
import Select from "@components/travel/Select";
import { gulfCountries, GulfCountriesProps } from "@utils/airports-gulfs";
import React, { useEffect, Fragment, useState, useCallback } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TravelVia from "@components/travel/TravelVia";

export const NOCRegistrationSchema = yup.object().shape({
  travel_to: yup.string().required("Travel destination is required"),
});

const CustomPage = () => {
  const [selectedAirport, setSelectedAirport] = useState<AirportTypes>(
    airports[54]
  );
  const [selectedGulf, setSelectedGulf] = useState();
  const [travelType, setTravelType] = useState<string>("");
  const [viaCountryLabel, setViaCountryLabel] = useState("Destination Country");

  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(NOCRegistrationSchema) });

  const changeOnTravelType = useCallback(() => {
    if (travelType == "Connecting") {
      setViaCountryLabel("Country (via/connecting)");
    } else setViaCountryLabel("Destination Country");
  }, [travelType]);

  useEffect(() => {
    console.log(selectedAirport);
  }, [selectedAirport]);

  useEffect(() => {
    changeOnTravelType();
  }, [travelType]);

  return (
    <div className="mx-auto flex flex-col items-center h-screen justify-center bg-white space-y-4">
      <div className="flex flex-col">
        <AirportInput
          selectedAirport={selectedAirport}
          setSelectedAirport={setSelectedAirport}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <TravelVia setTravelType={setTravelType} travelType={travelType} />
        <GulfSelect setSelectedGulf={setSelectedGulf} />
        {selectedGulf && <GulfAirportSelect selectedCountry={selectedGulf} />}

        <Select
          name="travel_to"
          {...register}
          label={viaCountryLabel}
          placeholder="Select country"
          error={errors.travel_to?.message}
          options={gulfCountries.map((country) => country.country)}
          autoFocus
        />
      </div>
    </div>
  );
};

export default CustomPage;
