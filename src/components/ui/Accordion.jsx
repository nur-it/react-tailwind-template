import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn";

const accordionStyles = cva(
  "py-4 px-4 text-black border border-black rounded-xl",
);
const qustionsStyles = cva("");
const ansStyle = cva("");

const Accordion = ({
    question,
    answer,
    dynamic = false,
    data
}) => {
//   const [dynamicActiveAccordion, setDynamicActiveAccordion] = React.useState(data[0]?.id);
  const [dynamicActiveAccordion, setDynamicActiveAccordion] = React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState(false);
  const toggleAccordion = (id) => {
    if (dynamicActiveAccordion === id) {
        setDynamicActiveAccordion(null); // If clicked again, close the active one
    } else {
        setDynamicActiveAccordion(id); // Otherwise, open the clicked one
    }
  };
  // const toggleAccordion = () => {
  // };
  return (
    <ul className="flex flex-col gap-y-6">
      {
        dynamic ? 
        data.map((item)=>(
            <li key={item.index} onClick={() => toggleAccordion(item.id)} className={cn(accordionStyles())}>
            <div className="flex items-center justify-between">
              <div>
                <span>{item.question}</span>
              </div>
              <div>
                <span>v</span>
              </div>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                dynamicActiveAccordion
                  ? "max-h-[1000px] grid-rows-[1fr] opacity-100"
                  : "max-h-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="common-paragraph mt-4">
                    {item.answer}
                </p>
              </div>
            </div>
          </li>
        )) :
        <li onClick={() => setActiveAccordion(!activeAccordion)} className={cn(accordionStyles())}>
        <div className="flex items-center justify-between">
          <div>
            <span>{question}</span>
          </div>
          <div>
            <span>v</span>
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
            <p className="common-paragraph mt-4">
                {answer}
            </p>
          </div>
        </div>
      </li>
      }
    </ul>
  );
};

export default Accordion;
