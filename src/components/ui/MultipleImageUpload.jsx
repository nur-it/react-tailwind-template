import { cva } from "class-variance-authority";
import React from "react";
import useMultipleImageUpload from "../../hooks/useMultipleImageUpload";
import cn from "../../lib/cn";
import { XIcon } from "../shared/svg/XIcon";

const dropzoneStyles = cva(
  "relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition duration-300 ease-in-out",
  {
    variants: {
      border: {
        default: "border-gray-300",
        active: "border-indigo-600",
      },
    },
    defaultVariants: {
      border: "default",
    },
  },
);

const gridStyles = cva("flex flex-wrap gap-4 mt-4");

const imageWrapperStyles = cva("relative group");

const imageStyles = cva(
  "object-cover w-20 h-20 rounded-lg transition duration-300 ease-in-out group-hover:opacity-70",
);

const removeButtonStyles = cva(
  "absolute top-2 right-2 bg-white rounded-full p-1 text-red-500 hover:text-red-700 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100",
);

const overlayStyles = cva(
  "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center",
);

const MultipleImageUpload = ({
  id = "dropzone",
  className,
  onImagesChange,
  ...props
}) => {
  const {
    previews,
    handleDragOver,
    handleDrop,
    handleChange,
    handleRemoveImage,
  } = useMultipleImageUpload();

  return (
    <div>
      <div
        id={id}
        className={cn(
          dropzoneStyles({
            border: previews.length > 0 ? "default" : "active",
          }),
          className,
        )}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        {...props}
      >
        <input
          type="file"
          className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
          multiple
          onChange={handleChange}
        />
        <div className="text-center">
          <img
            className="mx-auto h-12 w-12"
            src="/image-upload.svg"
            alt="Placeholder"
          />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor={id} className="relative cursor-pointer">
              <span>Drag and drop</span>
              <span className="text-indigo-600"> or browse</span>
              <span> to upload</span>
            </label>
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB each
          </p>
        </div>
      </div>
      <div className={cn(gridStyles())}>
        {previews.map((src, index) => (
          <div key={index} className={imageWrapperStyles()}>
            <img
              src={src}
              alt={`Uploaded preview ${index + 1}`}
              className={imageStyles()}
            />
            <div className={overlayStyles()}>
              <button
                className={removeButtonStyles()}
                onClick={() => handleRemoveImage(index)}
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleImageUpload;
