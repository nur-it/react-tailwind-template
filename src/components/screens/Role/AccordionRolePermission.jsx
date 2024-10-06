import React, { useState } from "react";
import usePermissions from "../../../hooks/usepermissions";
import ActionsList from "./ActionsList";

const AccordionRolePermission = ({ setSelectedPermissions }) => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);
  const { permissions } = usePermissions(); // Assuming permissions are fetched here

  const handleAccordionToggle = (index) => {
    setActiveAccordionIndex((prevIndex) =>
      prevIndex === index ? null : index,
    );
  };

  const handleSetPermissions = (newPermission) => {
    setSelectedPermissions((prevPermissions) => {
      if (prevPermissions.includes(newPermission)) {
        // If already checked, remove it from the array
        return prevPermissions.filter((perm) => perm !== newPermission);
      } else {
        // Otherwise, add it to the array
        return [...prevPermissions, newPermission];
      }
    });
  };

  return (
    <div className="mt-10 flex w-full flex-col gap-4 md:gap-8">
      {permissions.map((data, index) => (
        <article key={data._id} className="rounded border border-primary/20 ">
          <div
            className="flex w-full cursor-pointer items-center justify-between gap-2 rounded p-3"
            onClick={() => handleAccordionToggle(index)}
          >
            <div>
              <h2 className="text-[1.2rem] font-[600]">{data.resource}</h2>
              <p className="text-[0.9rem] text-[#424242]">
                Define all allowed actions for the API plugin.
              </p>
            </div>
            <svg
              className="ml-8 shrink-0 fill-[#000]"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`origin-center transform transition duration-200 ease-out ${
                  activeAccordionIndex === index && "rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                  activeAccordionIndex === index && "rotate-180"
                }`}
              />
            </svg>
          </div>

          <div
            className={`grid overflow-hidden bg-gray-100 transition-all duration-300 ease-in-out ${
              activeAccordionIndex === index
                ? "grid-rows-[1fr] p-6 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 overflow-hidden text-[0.9rem] text-[#424242] md:grid-cols-3 md:gap-y-12">
              {data.actions.map((action, actionIndex) => {
                return (
                  <ActionsList
                    key={actionIndex}
                    action={action}
                    setPermissions={handleSetPermissions} // Passing setPermissions function
                  />
                );
              })}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AccordionRolePermission;
