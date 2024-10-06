import React from "react";
import Button from "../../components/ui/Button";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";
import ToggleButton from "../../components/ui/ToggleButton";

const ToggleButtonPage = () => {
  const markdown = `
### ToggleButton

The ToggleButton component is a customizable and reusable UI element built using React. It features a toggle switch that can be used to represent an on/off state, with additional customization options like size and disabled state.

#### Usage

\`\`\`jsx
import ToggleButton from "./components/ui/ToggleButton";

function App() {
  const handleToggleChange = () => {
    console.log("Toggle state changed");
  };

  return (
    <ToggleButton
      id="toggle1"
      name="exampleToggle"
      checked={true}
      onChange={handleToggleChange}
      size="medium"
      disabled={false}
    />
  );
}
\`\`\`

### Props

| Prop Name   | Type       | Default   | Description                                                               | Required |
| ----------- | ---------- | --------- | ------------------------------------------------------------------------- | -------- |
| \`id\`        | \`string\`   | \`null\`    | The unique identifier for the toggle button.                              | Yes      |
| \`name\`      | \`string\`   | \`null\`    | The name attribute for the toggle button input.                           | Yes      |
| \`checked\`   | \`boolean\`  | \`false\`   | The initial checked state of the toggle button.                           | No       |
| \`onChange\`  | \`function\` | \`null\`    | The callback function triggered when the toggle state changes.            | No       |
| \`className\` | \`string\`   | \`""\`      | Additional custom classes for the toggle button.                          | No       |
| \`disabled\`  | \`boolean\`  | \`false\`   | If true, the toggle button will be disabled and non-interactive.          | No       |
| \`size\`      | \`string\`   | \`"small"\` | The size of the toggle button. Options: \`"small"\`, \`"medium"\`, \`"large"\`. | No       |
| \`...props\`  | \`object\`   | \`null\`    | Additional props are spread onto the root element.                        | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `<ToggleButton
  id="toggle2"
  name="exampleToggle"
  checked={false}
  onChange={() => console.log("Toggled!")}
  size="large"
  disabled={false}
/>`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ ToggleButton }} // Make sure to include all components used in the snippets
    />
  );
};

export default ToggleButtonPage;
