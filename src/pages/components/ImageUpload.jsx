import React from "react";
import SingleImageUpload from "../../components/ui/SingleImageUpload";
import MultipleImageUpload from "../../components/ui/MultipleImageUpload";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const ImageUploadPage = () => {
  const markdown = `
### SingleImageUpload

The SingleImageUpload component is a reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants. It provides a drag-and-drop area or browse option for uploading a single image and displays a preview of the uploaded image with an option to remove it.

#### Usage

\`\`\`jsx
import SingleImageUpload from "./components/ui/SingleImageUpload";

function App() {
  return (
    <SingleImageUpload
      id="profile-pic"
      className="custom-class"
      // ...other props
    />
  );
}
\`\`\`

### MultipleImageUpload

The \`MultipleImageUpload\` component is a versatile and reusable UI element built using React, Tailwind CSS, and \`class-variance-authority (cva)\` for managing styles. It allows users to upload multiple images with drag-and-drop support and provides a preview of the uploaded images.

#### Usage

\`\`\`jsx
import SingleImageUpload from "./components/ui/SingleImageUpload";

function App() {
  return (
    <SingleImageUpload
      id="profile-pic"
      className="custom-class"
      // ...other props
    />
  );
}
\`\`\`

### Props

| Prop Name        | Type       | Default      | Description                                              | Required |
| ---------------- | ---------- | ------------ | -------------------------------------------------------- | -------- |
| \`id\`             | \`string\`   | \`"dropzone"\` | The unique identifier for the dropzone element.          | No       |
| \`className\`      | \`string\`   | \`""\`         | Additional custom classes for the dropzone container.    | No       |
| \`onImagesChange\` | \`function\` | \`null\`       | The function to handle changes when images are uploaded. | Yes      |
| \`...props\`       | \`object\`   | \`null\`       | Additional props to be passed to the dropzone container. | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `<SingleImageUpload id="profile-pic" className="border-2 border-dashed border-gray-300"/>`,
    `<MultipleImageUpload id="profile-pic" className="border-2 border-dashed border-gray-300"/>`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ SingleImageUpload , MultipleImageUpload }} // Make sure to include all components used in the snippets
    />
  );
};

export default ImageUploadPage;
