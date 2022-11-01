import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export default function ReviewOptionSelect() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <select
        id="people"
        className="bg-gray-100 text-indigo-700 font-medium rounded px-2 py-2 ml-4"
      >
        {people.map((data) => (
          <option key={data.name} value={data.name}>
            {data.name}
          </option>
        ))}
      </select>
    </>
  );
}
