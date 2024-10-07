import React from "react";
import Checkbox from "../../components/ui/Checkbox";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const CheckboxPage = () => {
  const markdown = `
### Checkbox

The Checkbox component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants.

#### Usage

\`\`\`jsx
import Checkbox from "./components/ui/Checkbox";

function App() {
  return (
    <div>
      <Checkbox size="large" variant="checked" />
      <Checkbox size="small" variant="default" disabled />
    </div>
  );
}
\`\`\`

### Props

| Prop Name  | Type    | Default     | Description                                                             | Required |
| ---------- | ------- | ----------- | ----------------------------------------------------------------------- | -------- |
| \`checked\`  | boolean | \`false\`     | If true, the checkbox will be checked.                                  | No       |
| \`size\`     | string  | \`"medium"\`  | The size of the checkbox. Options: \`"small"\`, \`"medium"\`, \`"large"\`.    | No       |
| \`variant\`  | string  | \`"default"\` | The checkbox variant. Options: \`"default"\`, \`"checked"\`, \`"disabled"\`.  | No       |
| \`disabled\` | boolean | \`false\`     | If true, the checkbox will be disabled and appear with reduced opacity. | No       |
| \`...props\` | object  | -           | Additional props to pass to the checkbox input element.                 | No       |

`;

  // Code snippets for live preview
  const codeSnippets = [
    // `<Checkbox size="small" variant="default" htmlFor="checkbox" >checkbox</Checkbox>`,
    `<Checkbox >checkbox</Checkbox>`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ Checkbox }} // Make sure to include all components used in the snippets
    />
  );
};

export default CheckboxPage;
