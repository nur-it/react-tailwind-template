import { useState } from "react";

/**
 * A hook for handling single image uploads with drag and drop and input
 * elements. The hook provides a preview of the selected image and a flag
 * indicating whether the drag and drop area is active or not.
 *
 * @returns an object containing the preview, isDragActive, handleDragOver,
 * handleDragLeave, handleDrop, handleChange, and handleRemove methods.
 */
const useSingleImageUpload = () => {
  const [preview, setPreview] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);

  /**
   * Handles drag over event on the drop zone.
   *
   * @param {DragEvent} e - The event object.
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  /**
   * Handles drag leave event on the drop zone.
   *
   * @param {DragEvent} e - The event object.
   */
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  /**
   * Handles drop event on the drop zone.
   *
   * @param {DragEvent} e - The event object.
   */
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    const file = e.dataTransfer.files[0];
    displayPreview(file);
  };

  /**
   * Handles change event on the input element.
   *
   * @param {ChangeEvent} e - The event object.
   */
  const handleChange = (e) => {
    const file = e.target.files[0];
    displayPreview(file);
  };

  /**
   * Displays the preview of the selected image.
   *
   * @param {File} file - The selected image file.
   */
  const displayPreview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  /**
   * Handles remove event on the preview area.
   */
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
