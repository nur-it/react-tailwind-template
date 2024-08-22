import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn";
import Circle from "../shared/svg/Circle";

const buttonStyles = cva("inline-flex items-center justify-center text-center font-medium focus:outline-none transition duration-300 ease-in-out", {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-opacity-95 ",
      secondary: "bg-secondary text-white hover:bg-opacity-95 ",
      danger: "bg-red-600 text-white hover:bg-red-500 ",
    },
    size: {
      small: "px-4 py-2 text-sm",
      medium: "px-8 py-3 text-base",
      large: "px-10 py-4 text-lg",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
    },
    loading: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button = ({ children, className, variant, size, fullWidth, icon: { Icon, float = "left" } = {}, loading = false, disabled = false, type = "button", ...props }) => {
  return (
    <button type={type} className={cn(buttonStyles({ variant, size, fullWidth, disabled, loading }), className)} disabled={disabled || loading} {...props}>
      {loading && <Circle className="mr-2 h-5 w-5 animate-spin" />}
      {Icon && !loading && float === "left" && <Icon className="mr-2 w-5 h-5" />}
      {children}
      {Icon && !loading && float === "right" && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;
