import React from "react";
import cn from "../../lib/cn"; // Assuming you have this utility for class names

const ToggleButton = ({
  id,
  name,
  checked = false,
  onChange,
  className,
  disabled = false,
  size = "small",
  ...props
}) => {
  const [isActive, setIsActive] = React.useState(checked);

  // Handler to toggle the state
  const handleToggleChange = () => {
    setIsActive(!isActive);
    if (onChange) onChange();
  };

  return (
    <label
      className={cn(
        "relative inline-flex cursor-pointer items-center",
        { "cursor-not-allowed": disabled },
        className,
      )}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isActive}
        onChange={handleToggleChange}
        className="peer sr-only"
        disabled={disabled}
        {...props}
      />
      <div
        className={cn(
          "group peer h-12 w-24 rounded-full bg-rose-500 shadow-md outline-none ring-0 duration-300 after:duration-300 peer-checked:bg-[#21B531] peer-focus:outline-none",
          "after:absolute after:left-1 after:top-1 after:flex after:h-10 after:w-10 after:-rotate-180 after:items-center after:justify-center after:rounded-full after:bg-gray-50 after:outline-none after:content-['✖️']",
          "peer-checked:after:translate-x-12 peer-checked:after:rotate-0 peer-checked:after:content-['✔️']",
          size === "small" &&
            "h-8 w-16 text-[12px] after:h-6 after:w-6 peer-checked:after:translate-x-8",
          size === "medium" &&
            "h-10 w-20 after:h-8 after:w-8 peer-checked:after:translate-x-10",
          size === "large" && "scale-100 peer-hover:after:scale-95",
        )}
      />
    </label>
  );
};

export default ToggleButton;
