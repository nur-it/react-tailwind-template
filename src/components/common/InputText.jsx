const InputText = ({
  id,
  type,
  name,
  label,
  errors,
  pattern,
  register,
  required,
  maxLength,
  minLength,
  placeholder,
}) => {
  const validation = {
    pattern: pattern,
    minLength: minLength,
    maxLength: maxLength,
    required: required ? required : false,
  };

  // filter field name
  const error = Object.keys(errors)?.filter((item) => item === name);

  return (
    <div className="w-full">
      <label className="mb-3 block text-sm font-medium text-black" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        {...register(name, validation)}
        type={type ? type : "text"}
        placeholder={placeholder}
        className={`w-full px-4 py-3 font-medium text-black rounded border ${
          errors?.[name]?.type === "required" ||
          errors?.[name]?.type === "minLength" ||
          errors?.[name]?.type === "maxLength" ||
          errors?.[name]?.type === "pattern"
            ? "focus:border-red-400 border-red-400"
            : "focus:border-primary border-stroke"
        } focus-visible:outline-none`}
      />

      {error.find((item) => item === "password") ? (
        <>
          <p className="text-red-400 mt-0.5">
            Password must meet the following requirements:
          </p>
          <p className="text-red-400 mt-0.5">
            - At least one uppercase letter (A-Z){" "}
          </p>
          <p className="text-red-400 mt-0.5">
            - At least one lowercase letter (a-z){" "}
          </p>
          <p className="text-red-400 mt-0.5">- At least one number (0-9) </p>
          <p className="text-red-400 mt-0.5">
            - At least one special character (e.g., @, $, !, %, *, ?, &){" "}
          </p>
          <p className="text-red-400 mt-0.5">- Minimum 8 characters long</p>
        </>
      ) : (
        <>
          {errors?.[name]?.type === "required" && (
            <p className="text-red-400 mt-1">
              <span className="capitalize">{name}</span> is required
            </p>
          )}

          {errors?.[name]?.type === "minLength" && (
            <p className="text-red-400 mt-1">
              {name} must be at least {minLength} characters long.
            </p>
          )}

          {errors?.[name]?.type === "maxLength" && (
            <p className="text-red-400 mt-1">
              {name} must not exceed {maxLength} characters.
            </p>
          )}

          {errors?.[name]?.type === "pattern" &&
            error.find((item) => item === "email") && (
              <p className="text-red-400 mt-1">
                Please enter a valid {name} address (e.g., example@gmail.com).
              </p>
            )}
        </>
      )}
    </div>
  );
};

export default InputText;
