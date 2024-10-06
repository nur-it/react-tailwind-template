import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn"; // Utility function for conditional classes

// Define styles using cva
const inputStyles = cva(
  "w-full px-4 py-3 font-medium text-black rounded border focus-visible:outline-none transition duration-300 ease-in-out placeholder:capitalize", // Base styles
  {
    variants: {
      variant: {
        default: "focus:border-primary border-stroke",
        error: "focus:border-red-400 border-red-400",
      },
      size: {
        small: "text-sm py-2 px-3",
        medium: "text-base py-3 px-4",
        large: "text-lg py-4 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

// Use forwardRef to allow refs to be passed
const InputText = React.forwardRef(
  (
    {
      id,
      type = "text",
      name,
      label,
      errors = {}, // Handle form errors
      pattern,
      required = false,
      maxLength,
      minLength,
      placeholder,
      size = "medium", // Default size variant
      className, // Additional className
      ...props
    },
    ref,
  ) => {
    // Check if there's an error for the current field
    const fieldError = errors[name];
    const variant = fieldError ? "error" : "default"; // Set error styling if validation fails

    return (
      <div>
        {label && (
          <label
            className="mb-3 block text-sm font-medium capitalize text-black"
            htmlFor={id}
          >
            {label}
            {required && <span className="text-red-600">*</span>}
          </label>
        )}

        <input
          id={id}
          name={name}
          type={type}
          ref={ref} // Attach the ref
          placeholder={placeholder}
          className={cn(inputStyles({ variant, size }), className)} // Apply dynamic styles
          {...props}
          required={required}
        />

        {fieldError && (
          <p className="mt-1 text-red-400">{fieldError.message}</p>
        )}
      </div>
    );
  },
);

// Set display name for better debugging
InputText.displayName = "InputText";

export default InputText;
