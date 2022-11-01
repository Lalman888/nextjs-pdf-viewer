import AirportInput, {
  AirportTypes,
  airports,
} from "@components/new-changes/AirportInput";
import React, { useEffect, useState } from "react";

const CustomPage = () => {
  const [selectedAirport, setSelectedAirport] = useState<AirportTypes>(
    airports[54]
  );

  useEffect(() => {
    console.log(selectedAirport);
  }, [selectedAirport]);

  return (
    <div className="mx-auto flex flex-col items-center h-screen justify-center bg-white space-y-40">
      <div className="flex flex-col">
        <AirportInput
          selectedAirport={selectedAirport}
          setSelectedAirport={setSelectedAirport}
        />
      </div>
    </div>
  );
};

export default CustomPage;
