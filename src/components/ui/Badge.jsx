import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn";

const badgeStyles = cva("py-1 px-2.5 border-none rounded text-xl font-medium", {
  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary: "bg-gray-200 text-gray-800",
      success: "bg-green-100 text-green-800",
      warn: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
      info: "bg-indigo-100 text-indigo-800",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Badge = ({ color = "primary", children, className, ...props }) => {
  return (
    <span className={cn(badgeStyles({ color }), className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
