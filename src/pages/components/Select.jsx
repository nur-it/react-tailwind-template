import React from "react";
import Button from "../../components/ui/Button";
import SingleSelectOption from "../../components/ui/SingleSelectOption"
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const SelectPage = () => {
  const markdown = `
### SingleSelectOption

The SingleSelectOption component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants. It provides a dropdown menu for selecting a single option from a list.

#### Usage

\`\`\`jsx
import SingleSelectOption from "./components/ui/SingleSelectOption";

function App() {
  const handleOptionChange = (option) => {
    console.log("Selected option:", option);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  return (
    <SingleSelectOption
      id="select"
      name="select"
      options={options}
      selectedOption={options[0]}
      onChange={handleOptionChange}
    />
  );
}
\`\`\`

### Props

| Prop Name        | Type       | Default      | Description                                                                                          | Required |
| ---------------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------- | -------- |
| \`id\`             | \`string\`   | \`"dropzone"\` | The unique identifier for the select component.                                                      | No       |
| \`name\`           | \`string\`   | \`""\`         | The name attribute for the select component.                                                         | No       |
| \`options\`        | \`Array\`    | \`[]\`         | An array of options for the select menu. Each option should have \`value\` and \`label\` properties.     | No       |
| \`selectedOption\` | \`object\`   | \`null\`       | The currently selected option. Must have \`value\` and \`label\` properties.                             | No       |
| \`onChange\`       | \`function\` | \`null\`       | Callback function triggered when an option is selected. Receives the selected option as an argument. | No       |
| \`className\`      | \`string\`   | \`""\`         | Additional custom classes for the select container.                                                  | No       |
| \`size\`           | \`string\`   | \`"medium"\`\   | The size of the select component. Options: \`"small"\`, \`"medium"\`, \`"large"\`.                         | No       |
| \`variant\`        | \`string\`   | \`"primary"\`  | The variant style of the select component. Options: \`"primary"\`, \`"secondary"\`, \`"danger"\`.          | No       |
| \`status\`         | \`string\`   | \`"closed"\`   | The status of the select component. Options: \`"open"\`, \`"closed"\`.                                   | No       |
| \`...props\`       | \`object\`   | \`null\`       | Additional props to be passed to the select container.                                               | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `<SingleSelectOption
  id="select"
  name="select"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ]}
  selectedOption={{ value: "option1", label: "Option 1" }}
  onChange={(option) => console.log("Selected option:", option)}
  size="large"
  variant="secondary"
  status="open"
/>`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ SingleSelectOption }} // Make sure to include all components used in the snippets
    />
  );
};

export default SelectPage;
