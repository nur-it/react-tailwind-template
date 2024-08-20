import { cva } from "class-variance-authority";
import React from "react";
import { FaChevronLeft, FaChevronRight, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import cn from "../../lib/cn";

const paginationStyles = cva(
  "flex items-center justify-center rounded px-3 py-1.5 font-medium transition-colors duration-200 ease-in-out",
  {
    variants: {
      variant: {
        primary: "hover:bg-blue-500 hover:text-white text-blue-500",
        secondary: "hover:bg-purple-500 hover:text-white text-purple-500",
        success: "hover:bg-green-500 hover:text-white text-green-500",
        danger: "hover:bg-red-500 hover:text-white text-red-500",
      },
      size: {
        small: "text-sm h-6 w-6",
        medium: "text-base h-8 w-8",
        large: "text-lg h-10 w-10",
      },
      active: {
        true: "bg-blue-500 text-white",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      active: false,
      disabled: false,
    },
  },
);

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  variant = "primary",
  size = "medium",
  siblingCount = 1, // Number of pages to show before/after current page
}) => {
  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 3; // sibling pages on either side + current page + 2 for first and last pages
    const totalBlocks = totalPageNumbers + 2; // adding space for two ellipsis

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);
      const pages = [];

      if (startPage > 2) {
        pages.push(1, "...");
      } else {
        pages.push(...Array.from({ length: startPage - 1 }, (_, i) => i + 1));
      }

      pages.push(
        ...Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ),
      );

      if (endPage < totalPages - 1) {
        pages.push("...", totalPages);
      } else {
        pages.push(
          ...Array.from(
            { length: totalPages - endPage },
            (_, i) => endPage + i + 1,
          ),
        );
      }

      return pages;
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const pages = getPageNumbers();

  return (
    <nav>
      <ul className="flex flex-wrap items-center space-x-1">
        <li>
          <Link
            to="#"
            className={cn(
              paginationStyles({ variant, size, disabled: currentPage === 1 }),
            )}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            aria-disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </Link>
        </li>

        {pages.map((page, index) =>
          page === "..." ? (
            <li key={index} className="mx-2">
              <FaEllipsisH />
            </li>
          ) : (
            <li key={index}>
              <Link
                to="#"
                className={cn(
                  paginationStyles({
                    variant,
                    size,
                    active: currentPage === page,
                  }),
                )}
                onClick={() => onPageChange(page)}
              >
                {page}
              </Link>
            </li>
          ),
        )}

        <li>
          <Link
            to="#"
            className={cn(
              paginationStyles({
                variant,
                size,
                disabled: currentPage === totalPages,
              }),
            )}
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            aria-disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
