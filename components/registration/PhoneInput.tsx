import { classNames } from "@utils/helpers";
import React, { FC, InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { classNameType } from "./Form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  register?: any;
  wrapperClass?: classNameType;
  className?: string;
  phone?: boolean;
}

const PhoneInput: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  phone,
  ...rest
}) => {
  return (
    <div className={wrapperClass}>
      {label && (
        <label
          htmlFor={name}
          className={classNames(
            "text-xs block font-bold mb-2 uppercase tracking-wide ",
            error ? "text-red-500 font-semibold" : "text-gray-500"
          )}
        >
          {label}
        </label>
      )}
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute rounded-l-md bg-gray-300/40 inset-y-0 left-0 flex items-center pointer-events-none px-3">
          <span className="text-gray-500 font-bold sm:text-sm">+91</span>
        </div>
        <input
          aria-invalid={error ? "true" : "false"}
          className={classNames(
            "py-2 placeholder-gray-300 pl-16 sm:pl-14 focus:ring-2 -ring-offset-1 w-full outline-none rounded-md border border-gray-200 shadow-md",
            error
              ? "border-red-500 focus:ring-red-300"
              : "text-slate-900 border-gray-200 focus:ring-indigo-300 focus:border-indigo-500"
          )}
          {...register(name)}
          {...rest}
        />
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

export default PhoneInput;

//   className="appearance-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:pl-14 sm:text-sm border-gray-300 rounded-md"
