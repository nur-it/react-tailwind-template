import { cva } from "class-variance-authority";
import React from "react";
import Flatpickr from "react-flatpickr";
import "../../styles/flatpickr.min.css";

// Define styles with variants and sizes
const datePickerStyles = cva(
  "rounded px-3 py-2 transition duration-300 ease-in-out",
  {
    variants: {
      size: {
        small: "text-sm w-40",
        medium: "text-base w-56",
        large: "text-lg w-72",
      },
      variant: {
        default: "border-2 border-gray-300",
        primary: "border-2 border-blue-500",
        success: "border-2 border-green-500",
        warning: "border-2 border-yellow-500",
        danger: "border-2 border-red-500",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
    },
  },
);

const DatePicker = ({
  id = "datepicker",
  placeholder = "Select a date",
  size = "medium",
  variant = "default",
  date,
  setDate,
  ...props
}) => {
  return (
    <Flatpickr
      id={id}
      className={datePickerStyles({ size, variant })}
      value={date}
      onChange={(date) => setDate(date)}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default DatePicker;
