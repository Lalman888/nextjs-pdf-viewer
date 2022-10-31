import React, { ChangeEvent, KeyboardEvent } from "react";
import OtpInput from "react-otp-input";

type KeyboardEventTypes = React.KeyboardEvent;

const VerifyOTP = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    const $otp_length = 6;
    function OTPInput() {
      const inputs = window.document.querySelectorAll("#otp > *[id]");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
          if (event.key === "Backspace") {
            inputs[i].value = "";
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== "") {
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
    }
    OTPInput();
  });

  return (
    <div className="h-screen bg-blue-500 py-20 px-3">
      <div className="container mx-auto">
        <div className="mx-auto max-w-sm md:max-w-lg">
          <div className="w-full">
            <div className="h-64 rounded bg-white py-3 text-center">
              <h1 className="text-2xl font-bold">OTP Verification</h1>
              <div className="mt-4 flex flex-col">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">+91 ******876</span>
              </div>

              <div
                id="otp"
                className="mt-5 flex flex-row justify-center px-2 text-center"
              >
                <input
                  className="form-control m-2 h-10 w-10 rounded border text-center"
                  type="text"
                  id="first"
                  max="1"
                />
                <input
                  className="form-control m-2 h-10 w-10 rounded border text-center"
                  type="text"
                  id="second"
                  max="1"
                />
                <input
                  className="form-control m-2 h-10 w-10 rounded border text-center"
                  type="text"
                  id="third"
                  max="1"
                />
                <input
                  className="form-control m-2 h-10 w-10 rounded border text-center"
                  type="text"
                  id="fourth"
                  max="1"
                />
                <input
                  className="form-control m-2 h-10 w-10 rounded border text-center"
                  type="text"
                  id="fifth"
                  max="1"
                />
                <input
                  className="form-control m-2 h-10 w-10 rounded border text-center"
                  type="text"
                  id="sixth"
                  max="1"
                />
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

export default VerifyOTP;
