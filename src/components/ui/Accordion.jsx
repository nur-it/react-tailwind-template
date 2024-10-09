import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn";
import { FaAngleDown } from "react-icons/fa6";
import { GiNuclearBomb } from "react-icons/gi";

const accordionStyles = cva(
  "py-4 px-4 text-black  border-black  w-full cursor-pointer max-h-[250px] overflow-hidden",
  {
    variants: {
      size: {
        small: "w-[320px] ",
        medium: "w-[636px] ",
        large: "w-[1024px] ",
      },
      variant: {
        default: "bg-gray-200 border-gray-300 rounded-xl border",
        secondary: "bg-white border-black border-b",
        disabled: "bg-gray-300 border-gray-400 cursor-not-allowed",
      },
      disabled: {
        true: "opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
const qustionsStyles = cva("font-semibold text-lg block");
const ansStyle = cva("text-base");
const listStyle = cva("flex flex-col gap-y-6");

const Accordion = ({
  question,
  answer,
  dynamic = false,
  data,
  size,
  variant,
  disabled,
  className,
  questionClassName,
  ansClassName,
  listClassName,
  enableIndex = true,
  customIcon = false,
  Icon,
  props,
}) => {
  // const [dynamicActiveAccordion, setDynamicActiveAccordion] = React.useState(data[0]?.id);
  const [dynamicActiveAccordion, setDynamicActiveAccordion] =
    React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState(false);
  const toggleAccordion = (id) => {
    if (dynamicActiveAccordion === id) {
      setDynamicActiveAccordion(null); // If clicked again, close the active one
    } else {
      setDynamicActiveAccordion(id); // Otherwise, open the clicked one
    }
  };

  return (
    <ul className={cn(listStyle(),listClassName)}>
      {dynamic ? (
        data.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleAccordion(item.id)}
            className={cn(
              accordionStyles({ size, variant, disabled }),
              className,
            )}
            {...props}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                {enableIndex && (
                  <span className={cn(qustionsStyles(), questionClassName)}>
                    {index + 1}.
                  </span>
                )}
                <span className={cn(qustionsStyles(), questionClassName)}>
                  {item.question}
                </span>
              </div>
              <div>
                {customIcon ? (
                  <Icon
                    className={`transform transition-transform duration-300 ${
                      dynamicActiveAccordion === item.id ? "rotate-180" : ""
                    }`}
                  />
                ) : (
                  <FaAngleDown
                    className={`transform transition-transform duration-300 ${
                      dynamicActiveAccordion === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                dynamicActiveAccordion === item.id
                  ? "max-h-[250px] grid-rows-[1fr] opacity-100"
                  : "max-h-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-y-scroll">
                <p className={cn(ansStyle(), ansClassName)}>{item.answer}</p>
              </div>
            </div>
          </li>
        ))
      ) : (
        <li
          onClick={() => setActiveAccordion(!activeAccordion)}
          className={cn(
            accordionStyles({ size, variant, disabled }),
            className,
          )}
        >
          <div className="flex items-center justify-between">
            <div>
              <span className={cn(qustionsStyles(), questionClassName)}>
                {question}
              </span>
            </div>
            <div>
              {customIcon ? (
                // <Icon
                //   className={`transform transition-transform duration-300 ${
                //     activeAccordion ? "rotate-180" : ""
                //   }`}
                // />
                <GiNuclearBomb
                  className={`transform transition-transform duration-300 ${
                    activeAccordion ? "rotate-180" : ""
                  }`}
                />
              ) : (
                <FaAngleDown
                  className={`transform transition-transform duration-300 ${
                    activeAccordion ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
          </div>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              activeAccordion
                ? "max-h-[1000px] grid-rows-[1fr] opacity-100"
                : "max-h-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className={cn(ansStyle(), ansClassName)}>{answer}</p>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Accordion;
