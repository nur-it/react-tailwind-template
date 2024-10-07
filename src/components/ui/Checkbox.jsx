import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn";
import CheckMark from "../shared/svg/CheckMark";

const checkboxStyles = cva(
  "relative inline-flex items-center cursor-pointer transition duration-300 ease-in-out",
  {
    variants: {
      size: {
        small: "w-4 h-4",
        medium: "w-5 h-5",
        large: "w-6 h-6",
      },
      variant: {
        default: "bg-gray-200 border-gray-300",
        checked: "bg-primary border-primary",
        disabled: "bg-gray-300 border-gray-400 cursor-not-allowed",
      },
      disabled: {
        true: "opacity-50",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
    },
  },
);

const Checkbox = ({
  checked = false,
  size = "medium",
  variant = "default",
  disabled = false,
  ...props
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    // <label className="inline-flex cursor-pointer items-center">
    //   <input
    //     type="checkbox"
    //     className="sr-only"
    //     checked={isChecked}
    //     onChange={handleCheckboxChange}
    //     disabled={disabled}
    //     {...props}
    //   />
    // <span
    //   className={cn(
    //     checkboxStyles({ size, variant, disabled }),
    //     "inline-flex items-center justify-center rounded border bg-primary",
    //   )}
    // >
    //   {isChecked && <CheckMark className="text-white" />}
    // </span>
    // </label>
    <div>
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          // className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={disabled}
          // {...props}
        />
        <span
          className={cn(
            checkboxStyles({ size, variant, disabled }),
            "inline-flex items-center justify-center rounded border bg-primary",
          )}
        >
          {isChecked && <CheckMark className="text-white" />}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
