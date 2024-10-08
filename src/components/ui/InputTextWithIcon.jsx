// import { useState } from "react";
// import { FiEye, FiEyeOff } from "react-icons/fi";

// const InputTextWithIcon = ({
//   id,
//   icon,
//   label,
//   name,
//   type,
//   errors,
//   pattern,
//   required,
//   register,
//   minLength,
//   maxLength,
//   placeholder,
// }) => {
//   const [isShowPassword, setIsShowPassword] = useState(type);

//   const validation = {
//     pattern: { value: pattern },
//     minLength: minLength,
//     maxLength: maxLength,
//     required: required ? required : false,
//   };

//   // filter field name
//   const error = Object.keys(errors)?.filter((item) => item === name);

//   // handle password is show or hidden
//   const handlePasswordIsShow = () => {
//     let inputType = isShowPassword;

//     if (inputType === "password") {
//       inputType = "text";
//     } else {
//       inputType = "password";
//     }

//     setIsShowPassword(inputType);
//   };

//   return (
//     <div className="w-full">
//       <label
//         className="mb-2 block text-base font-semibold text-black"
//         htmlFor={id}
//       >
//         {label}
//       </label>

//       <div className="relative">
//         <span
//           className={`absolute left-4 top-4 ${
//             errors?.[name]?.type === "required" ||
//             errors?.[name]?.type === "minLength" ||
//             errors?.[name]?.type === "maxLength" ||
//             errors?.[name]?.type === "pattern"
//               ? "text-red-400"
//               : ""
//           } `}
//         >
//           {icon}
//         </span>

//         {name === "password" && (
//           <button
//             onClick={handlePasswordIsShow}
//             type="button"
//             className={`absolute right-4 top-4 ${
//               errors?.[name]?.type === "required" ||
//               errors?.[name]?.type === "minLength" ||
//               errors?.[name]?.type === "maxLength" ||
//               errors?.[name]?.type === "pattern"
//                 ? "text-red-400"
//                 : ""
//             }`}
//           >
//             {isShowPassword === "password" ? <FiEyeOff /> : <FiEye />}
//           </button>
//         )}

//         <input
//           id={id}
//           name={name}
//           {...register(name, validation)}
//           type={type ? isShowPassword : "text"}
//           placeholder={placeholder}
//           className={`w-full py-3 pl-12 pr-4 font-medium text-black rounded border  ${
//             errors?.[name]?.type === "required" ||
//             errors?.[name]?.type === "minLength" ||
//             errors?.[name]?.type === "maxLength" ||
//             errors?.[name]?.type === "pattern"
//               ? "focus:border-red-400 border-red-400"
//               : "focus:border-primary border-stroke"
//           } focus-visible:outline-none`}
//         />

//         {error.find((item) => item === "password") ? (
//           <>
//             <p className="text-red-400 mt-0.5">
//               Password must meet the following requirements:
//             </p>
//             <p className="text-red-400 mt-0.5">
//               - At least one uppercase letter (A-Z){" "}
//             </p>
//             <p className="text-red-400 mt-0.5">
//               - At least one lowercase letter (a-z){" "}
//             </p>
//             <p className="text-red-400 mt-0.5">- At least one number (0-9) </p>
//             <p className="text-red-400 mt-0.5">
//               - At least one special character (e.g., @, $, !, %, *, ?, &){" "}
//             </p>
//             <p className="text-red-400 mt-0.5">- Minimum 8 characters long</p>
//           </>
//         ) : (
//           <>
//             {errors?.[name]?.type === "required" && (
//               <p className="text-red-400 mt-1">
//                 <span className="capitalize">{name}</span> is required
//               </p>
//             )}

//             {errors?.[name]?.type === "minLength" && (
//               <p className="text-red-400 mt-1">
//                 {name} must be at least {minLength} characters long.
//               </p>
//             )}

//             {errors?.[name]?.type === "maxLength" && (
//               <p className="text-red-400 mt-1">
//                 {name} must not exceed {maxLength} characters.
//               </p>
//             )}

//             {errors?.[name]?.type === "pattern" &&
//               error.find((item) => item === "email") && (
//                 <p className="text-red-400 mt-1">
//                   Please enter a valid {name} address (e.g., example@gmail.com).
//                 </p>
//               )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InputTextWithIcon;

import { cva } from "class-variance-authority";
import React, { useState } from "react";
import cn from "../../lib/cn";

const inputStyles = cva(
  "w-full px-4 py-3 font-medium text-black border rounded focus-visible:outline-none transition duration-300 ease-in-out", // Base styles
  {
    variants: {
      variant: {
        default: "focus:border-primary border-stroke",
        error: "focus:border-red-400 border-red-400",
      },
      size: {
        small: "text-sm py-2",
        medium: "text-base py-3",
        large: "text-lg py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

const InputTextWithIcon = ({
  id,
  icon: Icon,
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
  const [isShowPassword, setIsShowPassword] = useState(type);

  const fieldError = errors[name];
  const variant = fieldError ? "error" : "default"; // Determine variant based on error
  return (
    <div>
      {label && (
        <label
          className="mb-2 block text-base font-semibold text-black"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <span
            className={cn(
              "absolute left-0 top-4",
              fieldError && "text-red-400",
            )}
          >
            <Icon />
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type === "password" ? isShowPassword : type}
          // {...register(name, validation)} // Apply dynamic validation rules
          placeholder={placeholder}
          className={cn(inputStyles(variant, size), className)}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputTextWithIcon;
