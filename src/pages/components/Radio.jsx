import React from "react";
import Button from "../../components/ui/Button";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";
import RadioButton from "../../components/ui/RadioButton";

const RadioPage = () => {
  const markdown = `
### Button

The **RadioButton** component provides a customizable radio button input for forms which is created using cva (**Class Variant Authority**).

#### Usage

\`\`\`jsx
import Button from "./components/ui/RadioButton";

function App() {
  return (
<RadioButton
  id="radio-1"
  name="example"
  value="option1"
  checked={true}
  onChange={handleChange}
  label="Option 1"
  variant="primary"
  size="medium"
/>
  );
}
\`\`\`

### Props

| Prop Name    | Type                                   | Default    | Description                                                                 | Required |
| ------------ | -------------------------------------- | ---------- | --------------------------------------------------------------------------- | -------- |
| \`id\`       | \`string\`                             | —          | The unique identifier for the radio button.                                 | Yes      |
| \`name\`     | \`string\`                             | —          | The name attribute for the radio button group.                              | Yes      |
| \`value\`    | \`string\`                             | —          | The value of the radio button.                                              | Yes      |
| \`checked\`  | \`boolean\`                            | —          | Determines whether the radio button is checked.                             | Yes      |
| \`onChange\` | \`(event: React.ChangeEvent)\ => void\` | —          | Function triggered when the radio button is clicked.                        | Yes      |
| \`className\`| \`string\`                             | —          | Additional custom class names for styling.                                  | No       |
| \`variant\`  | \`"primary" \| "secondary" \| "danger"\`| \`primary\`| Defines the color variant for the radio button.                             | No       |
| \`size\`     | \`"small" \| "medium" \| "large"\`      | \`medium\` | Defines the size of the radio button.                                       | No       |
| \`disabled\` | \`boolean\`                            | \`false\`  | If true, the radio button is disabled.                                      | No       |
| \`label\`    | \`string\`                             | —          | The label text displayed next to the radio button.                          | No       |
| \`custom\`   | \`boolean\`                            | \`false\`  | If true, renders a custom-styled radio button with additional customization.| No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `<RadioButton id="color-red" name="favoriteColor" value="red"  label="Red" variant="primary" />`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ RadioButton }} // Make sure to include all components used in the snippets
    />
  );
};

export default RadioPage;
