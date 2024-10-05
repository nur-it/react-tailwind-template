import React, { useState } from "react";
import useRoles from "../../../hooks/useRoles";
import ActionsList from "./ActionsList";

const AccordionRolePermission = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const { roles } = useRoles(); // Assuming roles are fetched here
  console.log(roles);

  // according data (write your own data here)
  const accordingData = [
    {
      _id: "6700a08f2d84bb5c76617956",
      resource: "permissions",
      actions: [
        {
          _id: "6700a08f2d84bb5c7661794c",
          resource: "permissions",
          action: "create",
          route: "/permissions",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c7661794d",
          resource: "permissions",
          action: "find",
          route: "/permissions",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c7661794e",
          resource: "permissions",
          action: "findOne",
          route: "/permissions",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c7661794f",
          resource: "permissions",
          action: "update",
          route: "/permissions",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c76617950",
          resource: "permissions",
          action: "delete",
          route: "/permissions",
          __v: 0,
        },
      ],
      createdAt: "2024-10-05T02:12:31.542Z",
      updatedAt: "2024-10-05T02:12:31.542Z",
      __v: 0,
    },
    {
      _id: "6700a08f2d84bb5c76617954",
      resource: "users",
      actions: [
        {
          _id: "6700a08f2d84bb5c76617942",
          resource: "users",
          action: "create",
          route: "/users",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c76617943",
          resource: "users",
          action: "find",
          route: "/users",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c76617944",
          resource: "users",
          action: "findOne",
          route: "/users",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c76617945",
          resource: "users",
          action: "update",
          route: "/users",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c76617946",
          resource: "users",
          action: "delete",
          route: "/users",
          __v: 0,
        },
      ],
      createdAt: "2024-10-05T02:12:31.494Z",
      updatedAt: "2024-10-05T02:12:31.494Z",
      __v: 0,
    },
    {
      _id: "6700a08f2d84bb5c76617958",
      resource: "roles",
      actions: [
        {
          _id: "6700a08f2d84bb5c76617947",
          resource: "roles",
          action: "create",
          route: "/roles",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c76617948",
          resource: "roles",
          action: "find",
          route: "/roles",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c76617949",
          resource: "roles",
          action: "findOne",
          route: "/roles",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c7661794a",
          resource: "roles",
          action: "update",
          route: "/roles",
          __v: 0,
        },
        {
          _id: "6700a08f2d84bb5c7661794b",
          resource: "roles",
          action: "delete",
          route: "/roles",
          __v: 0,
        },
      ],
      createdAt: "2024-10-05T02:12:31.785Z",
      updatedAt: "2024-10-05T02:12:31.785Z",
      __v: 0,
    },
    {
      _id: "6700a75596d67982f67cd629",
      resource: "test",
      actions: [
        {
          _id: "6700a75596d67982f67cd627",
          resource: "test",
          action: "create",
          route: "/create",
          __v: 0,
        },
      ],
      createdAt: "2024-10-05T02:41:25.824Z",
      updatedAt: "2024-10-05T02:41:25.824Z",
      __v: 0,
    },
  ];

  const handleAccordionToggle = (index) => {
    setActiveAccordionIndex((prevIndex) =>
      prevIndex === index ? null : index,
    );
  };

  return (
    <div className="mt-10 flex w-full flex-col gap-4 md:gap-8">
      {accordingData.map((data, index) => (
        <article key={data._id} className="rounded border border-primary/20">
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
              {data.actions.map((action, actionIndex) => (
                <ActionsList key={actionIndex} action={action.action} />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AccordionRolePermission;
