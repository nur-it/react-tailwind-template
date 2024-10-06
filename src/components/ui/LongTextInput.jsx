import cn from "../../lib/cn";

const LongTextInput = ({
  id,
  name,
  value,
  label,
  textRow,
  placeholder,
  handleChange,
  type = "text",
  required = false,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="mb-3 block text-sm font-medium text-black" htmlFor={id}>
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>

      <textarea
        id={id}
        name={name}
        type={type}
        value={value}
        rows={textRow}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={cn(
          "border-stroke w-full rounded border bg-gray-100 px-4 py-3 font-medium text-black focus:border-primary focus-visible:outline-none",
          className,
        )}
        {...props}
      ></textarea>
    </div>
  );
};

export default LongTextInput;
