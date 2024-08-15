const InputTextWithIcon = ({
  id,
  icon,
  label,
  value,
  name,
  type,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <label className="mb-3 block text-sm font-medium text-black" htmlFor={id}>
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-4">{icon}</span>

        <input
          id={id}
          type={type ? type : "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="w-full rounded border border-stroke py-3 pl-12 pr-4 font-medium text-black focus:border-primary focus-visible:outline-none"
        />
      </div>
    </div>
  );
};

export default InputTextWithIcon;
