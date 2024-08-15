const InputText = ({
  id,
  type,
  name,
  label,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <label
        className="mb-3 block text-sm font-medium text-black"
        htmlFor="phoneNumber"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        value={value}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full rounded border border-stroke bg-gray-100 px-4 py-3 font-medium text-black focus:border-primary focus-visible:outline-none"
      />
    </div>
  );
};

export default InputText;
