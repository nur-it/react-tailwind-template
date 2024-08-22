import { cva } from "class-variance-authority";
import React from "react";
import useSingleImageUpload from "../../hooks/useSingleImageUpload";
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

const imageStyles = cva("h-12 w-12 mx-auto");

const placeholderTextStyles = cva("mt-2 text-sm font-medium text-gray-900");

const fileInfoStyles = cva("mt-1 text-xs text-gray-500");

const previewWrapperStyles = cva("relative group");

const previewImageStyles = cva(
  "mx-auto max-h-40 transition duration-300 ease-in-out",
);

const overlayStyles = cva(
  "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center z-[100]",
);

const closeButtonStyles = cva(
  "bg-white rounded-full p-1 text-red-500 hover:text-red-700 transition duration-300 ease-in-out",
);

const SingleImageUpload = ({ id = "dropzone", className, ...props }) => {
  const {
    preview,
    isDragActive,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleChange,
    handleRemove,
  } = useSingleImageUpload();

  return (
    <div
      id={id}
      className={cn(
        dropzoneStyles({ border: isDragActive ? "active" : "default" }),
        className,
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...props}
    >
      <input
        type="file"
        className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
        onChange={handleChange}
      />
      {preview ? (
        <div className={previewWrapperStyles()}>
          <img src={preview} alt="Preview" className={previewImageStyles()} />
          <div className={overlayStyles()}>
            <button className={closeButtonStyles()} onClick={handleRemove}>
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img
            className={imageStyles()}
            src="/image-upload.svg"
            alt="Placeholder"
          />
          <h3 className={placeholderTextStyles()}>
            <label htmlFor="file-upload" className="relative cursor-pointer">
              <span>Drag and drop</span>
              <span className="text-indigo-600"> or browse</span>
              <span> to upload</span>
            </label>
          </h3>
          <p className={fileInfoStyles()}>PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
    </div>
  );
};

export default SingleImageUpload;
