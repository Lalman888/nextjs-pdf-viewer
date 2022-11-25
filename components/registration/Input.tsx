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

const Input: FC<InputProps> = ({
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
            "text-xs block font-bold mb-2 uppercase tracking-wide",
            error ? "text-red-500 font-semibold" : "text-gray-500"
          )}
        >
          {label}
        </label>
      )}
      <input
        aria-invalid={error ? "true" : "false"}
        className={classNames(
          "py-2 px-4 placeholder-gray-300 focus:ring-2 -ring-offset-1 w-full outline-none rounded-md border border-gray-200 shadow-md",
          error
            ? "border-red-500 focus:ring-red-300"
            : "text-slate-900 border-gray-200 focus:ring-indigo-300 focus:border-indigo-500"
        )}
        {...register(name)}
        {...rest}
      />
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

export default Input;
