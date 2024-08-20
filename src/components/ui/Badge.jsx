import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn";

const badgeStyles = cva("border-none rounded font-medium", {
  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary: "bg-gray-200 text-gray-800",
      success: "bg-green-100 text-green-800",
      warn: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
      info: "bg-indigo-100 text-indigo-800",
    },
    size: {
      small: "py-0.5 px-2 text-sm",
      medium: "py-1 px-2.5 text-base",
      large: "py-2 px-3.5 text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

const Badge = ({
  color = "primary",
  size = "medium",
  children,
  className,
  ...props
}) => {
  return (
    <span className={cn(badgeStyles({ color, size }), className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
