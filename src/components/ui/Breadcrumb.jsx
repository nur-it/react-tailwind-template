import { cva } from "class-variance-authority";
import React from "react";
import { Link } from "react-router-dom";
import cn from "../../lib/cn"; // Ensure this utility function is available

// Define styles for the breadcrumb container, list, and items
const breadcrumbContainerStyles = cva("w-full p-4 bg-gray-100 text-gray-800");

const breadcrumbListStyles = cva("flex h-8 space-x-2");

const breadcrumbItemStyles = cva("flex items-center");

const breadcrumbLinkStyles = cva("flex items-center hover:underline", {
  variants: {
    active: {
      true: "cursor-default no-underline text-primary",
      false: "hover:underline",
    },
  },
  defaultVariants: {
    active: false,
  },
});

const separatorStyles = cva("text-gray-600");

// Breadcrumb component
const Breadcrumb = ({ links, className, ...props }) => {
  return (
    <div
      aria-label="breadcrumb"
      className={cn(breadcrumbContainerStyles(), className)}
      {...props}
    >
      <ol className={cn(breadcrumbListStyles())}>
        {links.map((link, index) => (
          <li key={index} className={cn(breadcrumbItemStyles())}>
            <Link
              rel="noopener noreferrer"
              to={link.href}
              className={cn(breadcrumbLinkStyles({ active: link.active }))}
              title={link.title}
            >
              {link.label}
            </Link>
            {index < links.length - 1 && (
              <span className={cn(separatorStyles())}>&nbsp;/</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
