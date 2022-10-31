import usePrevious from "@hooks/usePrevious";
import React, { memo, useLayoutEffect, useRef } from "react";

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

export function OTPSingleInput(props: SingleOTPInputProps) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <input
      ref={inputRef}
      {...rest}
      type="text"
      max={1}
      className="border-2 font-bold border-indigo-500 rounded-md h-10 w-10 appearance-none text-center"
    />
  );
}

const SingleOTPInput = memo(OTPSingleInput);

export default SingleOTPInput;
