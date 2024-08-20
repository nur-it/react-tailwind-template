import React from "react";
import cn from "../../../lib/cn";

const CheckMark = ({ className, ...props }) => {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

export default CheckMark;
