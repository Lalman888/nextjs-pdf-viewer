import React, { FC, createElement } from "react";
import { ReactNode } from "react";
import Spinner from "./Spinner";

export type classNameType = string;
export type childrenType = ReactNode;

export interface IFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel?: string;
  onSubmit?: any;
  handleSubmit?: any;
  register?: any;
  loading?: boolean;
  className?: classNameType;
}

const Form: FC<IFormProps> = ({
  defaultValues,
  buttonLabel = "Submit",
  children,
  onSubmit,
  handleSubmit,
  register,
  loading = false,
  ...rest
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="grid grid-cols-4 gap-3">
        {Array.isArray(children)
          ? children.map((child) => {
              return child.props.name
                ? createElement(child.type, {
                    ...{
                      ...child.props,
                      register,
                      key: child.props.name,
                    },
                  })
                : child;
            })
          : children}
      </div>
      <button className="mt-5 text-white appearance-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-400 w-full inline-flex items-center justify-center">
        {loading ? (
          <span>
            <Spinner className="h-4 w-4 p-0 mr-2" />
            Loading...
          </span>
        ) : (
          buttonLabel
        )}
      </button>
    </form>
  );
};

export default Form;
