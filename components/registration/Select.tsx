import { classNames } from "@utils/helpers";
import React from "react";
import { FieldError } from "react-hook-form";
import { Merge } from "react-hook-form";
import { FieldErrorsImpl } from "react-hook-form";
import { BiDownArrowAlt, BiCheck } from "react-icons/bi";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: string[];
  label?: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  register?: any;
  wrapperClass?: string;
  className?: string;
  field?: any;
}

const Select: React.FC<SelectProps> = ({
  register,
  options,
  name,
  error,
  label,
  wrapperClass,
  field,
  ...rest
}) => {
  return (
    <div className="grid col-span-2 mt-3">
      <label
        htmlFor="gender"
        className={classNames(
          "text-xs block font-bold mb-2 uppercase tracking-wide",
          error ? "text-red-500 font-semibold" : "text-gray-500"
        )}
      >
        Gender
      </label>
      <div className="relative">
        <div className="absolute h-full right-2 flex items-center">
          <BiDownArrowAlt className="h-4 w-4 text-gray-500" />
        </div>
        <select
          {...rest}
          aria-invalid={error ? "true" : "false"}
          className={classNames(
            "py-2 px-4 placeholder-gray-300 focus:ring-2 -ring-offset-1 w-full outline-none rounded-md border appearance-none border-gray-200 shadow-md",
            error
              ? "border-red-500 focus:ring-red-300"
              : "text-slate-900 border-gray-200 focus:ring-indigo-300 focus:border-indigo-500"
          )}
          placeholder="Gender"
        >
          <option value="" className="text-gray-400">
            Select gender
          </option>
          {options.map((data, index) => (
            <option value={data} label={data} key={"gender-option" + index}>
              {data}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <span
          role="alert"
          className={classNames(
            "text-xs text-red-500 mt-1",
            error ? "visible" : "invisible"
          )}
        >
          {error.toString()}
        </span>
      )}
    </div>
  );
};

export default Select;
