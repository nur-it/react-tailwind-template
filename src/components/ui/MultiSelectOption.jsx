import { cva } from "class-variance-authority";
import React, { useState } from "react";
import cn from "../../lib/cn";
import UpArrow from "../shared/svg/UpArrow";

const selectStyles = cva(
  "relative inline-flex items-center cursor-pointer transition-all duration-300 ease-in-out shadow-md ",
  {
    variants: {
      size: {
        small: "h-8 w-48 text-sm",
        medium: "h-10 w-64 text-base",
        large: "h-12 w-72 text-lg",
      },
      variant: {
        primary: "bg-primary text-white",
        secondary: "bg-gray-300 text-gray-700",
        danger: "bg-red-500 text-white",
      },
      status: {
        open: "bg-opacity-100",
        closed: "bg-opacity-100",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
      status: "closed",
    },
  },
);

const MultiSelectOption = ({
  id,
  name,
  options = [],
  selectedOptions = [],
  onChange,
  className,
  size = "medium",
  variant = "primary",
  status = "closed",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelections, setCurrentSelections] = useState(selectedOptions);

  const handleOptionClick = (option) => {
    let updatedSelections;
    if (currentSelections.includes(option)) {
      updatedSelections = currentSelections.filter(
        (selected) => selected.value !== option.value,
      );
    } else {
      updatedSelections = [...currentSelections, option];
    }
    setCurrentSelections(updatedSelections);
    if (onChange) onChange(updatedSelections);
  };

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center justify-between px-3 py-2",
          selectStyles({ size, variant, status: isOpen ? "open" : status }),
          { "cursor-pointer": !props.disabled },
          isOpen ? "rounded-t-md" : "rounded-md",
        )}
      >
        <span>
          {/*     {currentSelections.length > 0
            ? currentSelections.map((sel) => sel.label).join(", ")
            : "Select Multiple options"} */}
          Select Multiple options
        </span>
        <UpArrow isOpen={isOpen} />
      </button>
      {isOpen && (
        <div
          className={cn(
            selectStyles({ size, variant, status: "open" }),
            "absolute left-0 top-10 z-10 flex min-h-40 w-full flex-col items-center divide-y-[1px] overflow-y-scroll rounded-b-md border-t shadow-3xl",
          )}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option)}
              className={cn("h-full w-full px-4 py-2", {
                "bg-blue-500 text-white": currentSelections.includes(option),
                "hover:bg-gray-100 hover:text-black":
                  !currentSelections.includes(option),
              })}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectOption;
