import React from 'react'
import cn from '../../../lib/cn';

const UpArrow = ({ isOpen, ...props }) => {
  return (
    <svg
      className={cn("h-4 w-4 transition-transform duration-300 ease-in-out", {
        "rotate-180 transform": isOpen,
      })}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default UpArrow