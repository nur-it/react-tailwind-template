import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn";

const radioButtonStyles = cva(
  "inline-flex items-center justify-center font-medium cursor-pointer focus:outline-none transition",
  {
    variants: {
      variant: {
        primary: "text-primary",
        secondary: "text-secondary",
        danger: "text-red-600",
      },
      size: {
        small: "h-4 w-4 text-sm",
        medium: "h-6 w-6 text-base",
        large: "h-8 w-8 text-lg",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

const RadioButton = ({
  id,
  name,
  value,
  checked,
  onChange,
  className,
  variant,
  size,
  disabled = false,
  label,
  custom = false,
  ...props
}) => {
  return (
    <label
      className={cn("relative inline-flex cursor-pointer items-center", {
        "cursor-not-allowed": disabled,
      })}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={cn(
          custom ? "peer sr-only" : "form-radio",
          radioButtonStyles({ variant, size, disabled }),
          className,
        )}
        disabled={disabled}
        {...props}
      />
      {custom && (
        <div
          className={cn(
            "h-5 w-5 rounded-complete border-2 border-primary bg-transparent transition duration-300 ease-in-out",
            "peer-checked:bg-transparent peer-checked:ring-2 peer-checked:ring-primary",
            "flex items-center justify-center",
          )}
        >
          <div
            className={cn(
              "h-2 w-2 rounded-complete bg-primary transition-transform duration-300 ease-in-out",
              "peer-checked:scale-100",
            )}
          />
        </div>
      )}
      {label && (
        <span className={cn("ml-2", { "opacity-50": disabled })}>{label}</span>
      )}
    </label>
  );
};

export default RadioButton;
