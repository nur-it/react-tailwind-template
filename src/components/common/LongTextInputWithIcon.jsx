const LongTextInputWithIcon = ({
  id,
  name,
  icon,
  value,
  label,
  textRow,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="w-full">
      <label className="mb-3 block text-sm font-medium text-black" htmlFor={id}>
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-4">{icon}</span>

        <textarea
          id={id}
          name={name}
          rows={textRow}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded border border-stroke bg-gray-100 py-3 pl-12 pr-4 font-medium text-black focus:border-primary focus-visible:outline-none"
        ></textarea>
      </div>
    </div>
  );
};

export default LongTextInputWithIcon;
