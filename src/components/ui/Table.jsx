import { cva } from "class-variance-authority";
import React from "react";
import cn from "../../lib/cn"; // Adjust the path according to your project structure

// TableContainer
const tableContainerStyles = cva("w-full overflow-x-auto");

export const TableContainer = ({ children, className, ...props }) => {
  return (
    <div className={cn(tableContainerStyles(), className)} {...props}>
      {children}
    </div>
  );
};

// Table
const tableStyles = cva("min-w-full leading-normal bg-white", {
  variants: {
    striped: {
      true: "odd:bg-gray-50",
    },
  },
  defaultVariants: {
    striped: true,
  },
});

export const Table = ({ children, striped = true, className, ...props }) => {
  return (
    <table className={cn(tableStyles({ striped }), className)} {...props}>
      {children}
    </table>
  );
};

// TableHeader
const tableHeaderStyles = cva("bg-gray-200 text-gray-600 uppercase text-sm");

export const TableHeader = ({ children, className, ...props }) => {
  return (
    <thead className={cn(tableHeaderStyles(), className)} {...props}>
      {children}
    </thead>
  );
};

// TableBody
const tableBodyStyles = cva("text-gray-700");

export const TableBody = ({ children, className, ...props }) => {
  return (
    <tbody className={cn(tableBodyStyles(), className)} {...props}>
      {children}
    </tbody>
  );
};

// TableRow
const tableRowStyles = cva("border-b border-gray-200");

export const TableRow = ({ children, className, ...props }) => {
  return (
    <tr className={cn(tableRowStyles(), className)} {...props}>
      {children}
    </tr>
  );
};

// TableCell
const tableCellStyles = cva("px-5 py-5 text-sm");

export const TableCell = ({ children, className, ...props }) => {
  return (
    <td className={cn(tableCellStyles(), className)} {...props}>
      {children}
    </td>
  );
};

// TableFooter
const tableFooterStyles = cva("mt-4");

export const TableFooter = ({ children, className, ...props }) => {
  return (
    <div className={cn(tableFooterStyles(), className)} {...props}>
      {children}
    </div>
  );
};
