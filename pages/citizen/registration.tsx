import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NextPage } from "next";
import { classNames } from "@utils/helpers";
import { BsPerson } from "react-icons/bs";

type RegisterFormTypes = {
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  contact_number: string;
  gender: string;
  fathers_name: string;
  mothers_name: string;
  password: string;
  confirm_password: string;
};
const schema = yup
  .object()
  .shape({
    first_name: yup.string().required().min(6),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  })
  .required();

const RegisterPage: NextPage = () => {
  const RegisterForm = () => {
    const {
      register,
      handleSubmit,
      watch,
      setError,
      formState: { errors },
    } = useForm<RegisterFormTypes>({
      mode: "onBlur",
      resolver: yupResolver(schema),
    });

    const submitHandler: SubmitHandler<RegisterFormTypes> = (data) => {
      console.log("Submitted! - ", data);
    };
    console.log("Watching...:", watch);
    console.error("Error: ", errors);

    return (
      <form
        className="bg-gray-100 p-4 shadow-md grid grid-cols-1 content-center gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <label
          htmlFor="email"
          className={classNames(
            "block text-sm",
            errors.email ? "text-red-500" : "text-gray-600"
          )}
        >
          Email
        </label>
        <input
          placeholder="name@example.com"
          id="email"
          type="text"
          className={classNames(
            "py-2 px-4 placeholder-gray-300 outline-none rounded-md border border-gray-200 shadow-md",
            errors.email
              ? "text-red-500 border-red-500"
              : "text-slate-900 border-gray-200"
          )}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-0">Enter a valid email</p>
        )}

        <div className="mb-0">
          <label
            className={classNames(
              "block text-gray-700 text-sm mb-2",
              errors.password ? "text-red-500 font-bold" : "text-gray-600"
            )}
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className={classNames(
              "shadow-sm block appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
              errors.password
                ? "text-red-500 border-red-500"
                : "text-slate-900 border-gray-200"
            )}
            {...register("password")}
            placeholder="**********"
          />
          {errors.password && (
            <span className="text-red-500 text-xs italic">
              Enter a valid password.
            </span>
          )}
        </div>
        <label
          htmlFor="password"
          className={classNames(
            "block text-sm",
            errors.password ? "text-red-500" : "text-gray-600"
          )}
        >
          Password
        </label>

        <input
          className={classNames(
            "py-2 px-4 placeholder-gray-300 outline-none rounded-md border border-gray-200 shadow-md",
            errors.password
              ? "text-red-500 border-red-500"
              : "text-slate-900 border-gray-200"
          )}
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message?.toString()}
          </span>
        )}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
          >
            Name
          </label>

          <div className="relative">
            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
              <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                <BsPerson className="h-5 w-5" />
              </div>
            </div>

            <input
              placeholder="First Name"
              className={classNames(
                "text-sm sm:text-base relative w-full border rounded-md placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12",
                errors.first_name ? "border-red-500" : "border-gray-300"
              )}
              {...register("first_name")}
            />
          </div>

          {errors.first_name && (
            <span className="flex items-center tracking-wide text-red-500 text-xs mt-1 ml-1">
              First Name is not valid
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-500 h-10 w-full text-white rounded-md font-medium"
        >
          Register
        </button>
      </form>
    );
  };

  const RegInput = () => {
    return (
      <div>

<label
          htmlFor="email"
          className={classNames(
            "block text-sm",
            errors.email ? "text-red-500" : "text-gray-600"
            )}
            >
          Email
        </label>
        <input
          placeholder="name@example.com"
          id="email"
          type="text"
          className={classNames(
            "py-2 px-4 placeholder-gray-300 outline-none rounded-md border border-gray-200 shadow-md",
            errors.email
            ? "text-red-500 border-red-500"
            : "text-slate-900 border-gray-200"
            )}
            {...register("email")}
            />
        {errors.email && (
          <p className="text-red-500 text-xs mt-0">Enter a valid email</p>
          )}
          </div>
    )
  }
  return (
    <div className="mx-auto flex justify-center items-center h-screen">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
