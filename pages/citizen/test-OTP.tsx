import OTPInput from "@components/OTP/OTPInput";
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/outline";

const TestOTP = () => {
  let loading = false;
  const [isLoading, setisLoading] = useState(loading);

  function handleOTPSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setisLoading(!isLoading);
    setTimeout(() => setisLoading(true), 800);
  }

  return (
    <div className="h-screen bg-indigo-500/95 py-20 px-3">
      <div className="container mx-auto">
        <div className="mx-auto max-w-sm md:max-w-lg">
          <div className="w-full">
            <div className="rounded-2xl bg-white py-6 text-center">
              <h1 className="text-2xl font-bold">OTP Verification</h1>
              <div className="mt-4 flex flex-col space-y-2">
                <span>Enter the OTP you received at you mail</span>
                <span className="font-bold">jo******k@gmail.com</span>
              </div>

              <div
                id="otp"
                className="mt-5 flex flex-row justify-center px-2 text-center"
              >
                <OTPInput
                  autoFocus
                  isNumberInput
                  length={4}
                  className="otpContainer"
                  inputClassName="otpInput"
                  onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
                />
              </div>
              <div className="mt-5 flex justify-center text-center">
                {isLoading ? (
                  <Loading />
                ) : (
                  <button
                    type="submit"
                    onClick={(event) => handleOTPSubmit(event)}
                    className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none transition duration-200 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
                  >
                    <LockClosedIcon className="h-5 w-5 mr-2 stroke-2"></LockClosedIcon>
                    Verify OTP
                  </button>
                )}
              </div>

              <div className="mt-5 flex justify-center text-center">
                <a className="flex cursor-pointer items-center text-blue-700 hover:text-blue-900">
                  <span className="font-bold">Resend OTP</span>
                  <i className="bx bx-caret-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Loading = () => (
  <button
    type="button"
    disabled
    className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none transition duration-200 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
  >
    <svg
      aria-hidden="true"
      className="mr-2 w-6 h-6 text-white animate-spin fill-indigo-500/50 stroke-4"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
    Loading...
  </button>
);

export default TestOTP;
