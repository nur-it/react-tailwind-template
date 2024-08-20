import React from "react";
import cn from "../../../lib/cn";

export function LeftArrow({ className, ...props }) {
  return (
    <svg className={cn("w-5 h-5", className)} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12l6 6m-6-6l6-6"></path>
    </svg>
  );
}
