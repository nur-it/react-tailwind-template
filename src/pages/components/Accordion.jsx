import React from "react";
import Button from "../../components/ui/Button";
import Accordion from "../../components/ui/Accordion";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const AccordionPage = () => {
  const markdown = `
### Button

The Button component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants.

#### Usage

\`\`\`jsx
import Button from "./components/ui/Button";

function App() {
  return (
    <Button variant="primary" size="medium">
      Click Me
    </Button>
  );
}
\`\`\`

### Props

| Prop Name   | Type      | Default     | Description                                                                         | Required |
| ----------- | --------- | ----------- | ----------------------------------------------------------------------------------- | -------- |
| \`children\`  | ReactNode | \`null\`      | The content inside the button.                                                      | Yes      |
| \`className\` | string    | \`""\`        | Additional custom classes for the button.                                           | No       |
| \`variant\`   | string    | \`"primary"\` | The button variant. Options: \`"primary"\`, \`"secondary"\`, \`"danger"\`.                | No       |
| \`size\`      | string    | \`"medium"\`  | The button size. Options: \`"small"\`, \`"medium"\`, \`"large"\`.                         | No       |
| \`fullWidth\` | boolean   | \`false\`     | If true, the button will take up the full width of its container.                   | No       |
| \`disabled\`  | boolean   | \`false\`     | If true, the button will be disabled.                                               | No       |
| \`loading\`   | boolean   | \`false\`     | If true, the button will show a loading spinner and be disabled.                    | No       |
| \`icon\`      | object    | \`null\`      | An object containing an Icon component and float direction (\`"left"\` or \`"right"\`). | No       |
| \`type\`      | string    | \`"button"\`  | The button type attribute (\`"button"\`, \`"submit"\`, \`"reset"\`).                      | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    // `<Button variant="secondary" size="large" loading={true}>Save Changes</Button>`,
    `<Accordion question ={"question1?"} answer={"ans1"}></Accordion>`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{Accordion}} // Make sure to include all components used in the snippets
    />
  );
};

export default AccordionPage;
