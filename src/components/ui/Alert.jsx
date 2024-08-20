import { cva } from "class-variance-authority";
import React, { useState } from "react";
import { MdCheckCircle, MdError, MdInfo } from "react-icons/md";
import cn from "../../lib/cn";
import { XIcon } from "../shared/svg/XIcon";

const alertStyles = cva(
  "rounded-lg inline-flex items-center justify-between p-4 mb-4 text-base transition duration-300 ease-in-out",
  {
    variants: {
      type: {
        primary: "bg-blue-100 text-blue-700",
        secondary: "bg-purple-100 text-purple-700",
        success: "bg-green-100 text-green-700",
        danger: "bg-red-100 text-red-700",
      },
      size: {
        small: "text-sm py-2 px-3",
        medium: "text-base py-4 px-5",
        large: "text-lg py-5 px-6",
      },
    },
    defaultVariants: {
      type: "primary",
      size: "medium",
    },
  },
);

const iconMap = {
  primary: MdInfo,
  secondary: MdInfo,
  success: MdCheckCircle,
  danger: MdError,
};

const Alert = ({
  type = "primary",
  size = "medium",
  closable = false,
  children,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = iconMap[type] || MdInfo;

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(alertStyles({ type, size }), className)}
      role="alert"
      {...props}
    >
      <div className="flex items-center space-x-3">
        <Icon
          className={`h-5 w-5 ${type === "danger" ? "text-red-700" : type === "success" ? "text-green-700" : "text-blue-700"}`}
        />
        <span>{children}</span>
      </div>
      {closable && (
        <button
          className="ml-3 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <XIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Alert;
