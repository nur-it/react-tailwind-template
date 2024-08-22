const LongTextInput = ({
  id,
  name,
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

      <textarea
        id={id}
        name={name}
        value={value}
        rows={textRow}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded border border-stroke bg-gray-100 py-3 pl-12 pr-4 font-medium text-black focus:border-primary focus-visible:outline-none"
      ></textarea>
    </div>
  );
};

export default LongTextInput;
