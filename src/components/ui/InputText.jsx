// import { cva } from "class-variance-authority";
// import React from "react";
// import cn from "../../lib/cn"; // Utility function for conditional classes

// // Define styles using cva
// const inputStyles = cva(
//   "w-full px-4 py-3 font-medium text-black rounded border focus-visible:outline-none transition duration-300 ease-in-out", // Base styles
//   {
//     variants: {
//       variant: {
//         default: "focus:border-primary border-stroke",
//         error: "focus:border-red-400 border-red-400",
//       },
//       size: {
//         small: "text-sm py-2 px-3",
//         medium: "text-base py-3 px-4",
//         large: "text-lg py-4 px-5",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "medium",
//     },
//   },
// );

// const InputText = ({
//   id,
//   type = "text",
//   name,
//   label,
//   errors = {},
//   pattern,
//   register,
//   required = false,
//   maxLength,
//   minLength,
//   placeholder,
//   size = "medium", // Size variant
//   className, // Additional className
//   ...props
// }) => {
//   // Construct validation rules dynamically
//   const validation = {
//     ...(required && { required: `${name} is required` }), // Only include if required is true
//     ...(minLength && {
//       minLength: {
//         value: minLength,
//         message: `${name} must be at least ${minLength} characters long.`,
//       },
//     }),
//     ...(maxLength && {
//       maxLength: {
//         value: maxLength,
//         message: `${name} must not exceed ${maxLength} characters.`,
//       },
//     }),
//     ...(pattern && {
//       pattern: {
//         value: pattern,
//         message: `Please enter a valid ${name} format.`,
//       },
//     }),
//   };

//   // Check if there's an error for the current field
//   const fieldError = errors[name];
//   const variant = fieldError ? "error" : "default"; // Determine variant based on error

//   return (
//     <div className="w-full">
//       {label && (
//         <label
//           className="mb-3 block text-sm font-medium text-black"
//           htmlFor={id}
//         >
//           {label}
//         </label>
//       )}

//       <input
//         id={id}
//         name={name}
//         type={type}
//         {...register(name, validation)} // Apply dynamic validation rules
//         placeholder={placeholder}
//         className={cn(inputStyles({ variant, size }), className)} // Apply styles and additional className
//         {...props}
//       />

//       {/* Display Validation Errors */}
//       {fieldError && <p className="mt-1 text-red-400">{fieldError.message}</p>}

//       {/* Password-specific requirements display */}
//       {name === "password" && !fieldError && (
//         <>
//           <p className="mt-0.5 text-red-400">
//             Password must meet the following requirements:
//           </p>
//           <p className="mt-0.5 text-red-400">
//             - At least one uppercase letter (A-Z)
//           </p>
//           <p className="mt-0.5 text-red-400">
//             - At least one lowercase letter (a-z)
//           </p>
//           <p className="mt-0.5 text-red-400">- At least one number (0-9)</p>
//           <p className="mt-0.5 text-red-400">
//             - At least one special character (e.g., @, $, !, %, *, ?, &)
//           </p>
//           <p className="mt-0.5 text-red-400">- Minimum 8 characters long</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default InputText;

import React from "react";
import { cva } from "class-variance-authority";
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

const InputText = ({
  id,
  type = "text",
  name,
  label,
  errors = {},
  pattern,
  register,
  required = false,
  maxLength,
  minLength,
  placeholder,
  // variant,
  size,
  className, // Additional className
  ...props
}) => {
  // Construct validation rules dynamically
  const validation = {
    ...(required && { required: `${name} is required` }), // Only include if required is true
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `${name} must be at least ${minLength} characters long.`,
      },
    }),
    ...(maxLength && {
      maxLength: {
        value: maxLength,
        message: `${name} must not exceed ${maxLength} characters.`,
      },
    }),
    ...(pattern && {
      pattern: {
        value: pattern,
        message: `Please enter a valid ${name} format.`,
      },
    }),
  };

  // Check if there's an error for the current field
  const fieldError = errors[name];
  const variant = fieldError ? "error" : "default"; // Determine variant based on error

  return (
    <div>
      {label && (
        <label
          className="mb-3 block text-sm font-medium text-black capitalize"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        // {...register(name, validation)} // Apply dynamic validation rules
        placeholder={placeholder}
        className={cn(inputStyles(variant, size), className)}
        {...props}
      />

      {fieldError && <p className="mt-1 text-red-400">{fieldError.message}</p>}

      {name === "password" && !fieldError && (
        <>
          <p className="mt-0.5 text-red-400">
            Password must meet the following requirements:
          </p>
          <p className="mt-0.5 text-red-400">
            - At least one uppercase letter (A-Z)
          </p>
          <p className="mt-0.5 text-red-400">
            - At least one lowercase letter (a-z)
          </p>
          <p className="mt-0.5 text-red-400">- At least one number (0-9)</p>
          <p className="mt-0.5 text-red-400">
            - At least one special character (e.g., @, $, !, %, *, ?, &)
          </p>
          <p className="mt-0.5 text-red-400">- Minimum 8 characters long</p>
        </>
      )}
    </div>
  );
};

export default InputText;
