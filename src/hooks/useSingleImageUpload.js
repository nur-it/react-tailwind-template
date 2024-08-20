import { useState } from "react";

const useSingleImageUpload = () => {
  const [preview, setPreview] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    const file = e.dataTransfer.files[0];
    displayPreview(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    displayPreview(file);
  };

  const displayPreview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleRemove = () => {
    setPreview(null);
  };

  return {
    preview,
    isDragActive,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleChange,
    handleRemove,
  };
};

export default useSingleImageUpload;
