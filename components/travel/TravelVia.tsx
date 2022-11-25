import { RadioGroup } from "@headlessui/react";
import { classNames } from "@utils/helpers";
import React, { useEffect, useState } from "react";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";

const TravelVia = ({
  travelType,
  setTravelType,
}: {
  travelType: string;
  setTravelType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    console.log("Checked: ", travelType);
  }, [travelType]);

  const RadioOption = ({ value }: { value: string }) => (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <div
          className={classNames(
            "px-2 py-2 rounded-md flex cursor-pointer items-center space-x-2",
            checked ? "bg-gray-100 duration-200" : ""
          )}
        >
          {checked ? (
            <BsCheckCircleFill className="h-4 w-4 text-indigo-500" />
          ) : (
            <BsCircle className="h-4 w-4 text-indigo-400" />
          )}
          <span>{value}</span>
        </div>
      )}
    </RadioGroup.Option>
  );
  return (
    <RadioGroup value={travelType} onChange={setTravelType}>
      <RadioGroup.Label className="text-xs block font-bold mb-2 uppercase tracking-wide text-gray-500">
        Travel Type
      </RadioGroup.Label>
      <RadioOption value="Connecting" />
      <RadioOption value="Direct" />
    </RadioGroup>
  );
};

export default TravelVia;
