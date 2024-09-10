import React from "react";
import Alert from "../../components/ui/Alert";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const AlertPage = () => {
  const markdown = `
### Alert

The Alert component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants. It displays a message with an optional icon and close button, making it suitable for notifications and alerts.

#### Usage

\`\`\`jsx
import Alert from "./components/ui/Alert";
import { MdCheckCircle } from "react-icons/md";

function App() {
  return (
    <Alert type="success" size="large" closable>
      This is a success alert!
    </Alert>
  );
}
\`\`\`

### Props

| Prop Name   | Type      | Default     | Description                                                                   | Required |
| ----------- | --------- | ----------- | ----------------------------------------------------------------------------- | -------- |
| \`type\`      | string    | \`"primary"\` | The alert type. Options: \`"primary"\`, \`"secondary"\`, \`"success"\`, \`"danger"\`. | No       |
| \`size\`      | string    | \`"medium"\`  | The alert size. Options: \`"small"\`, \`"medium"\`, \`"large"\`.                    | No       |
| \`closable\`  | boolean   | \`false\`     | If true, a close button will be displayed to dismiss the alert.               | No       |
| \`children\`  | ReactNode | \`null\`      | The content inside the alert.                                                 | Yes      |
| \`className\` | string    | \`""\`        | Additional custom classes for the alert.                                      | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `<Alert type="primary" size="medium" closable>primary</Alert>`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ Alert }}
    />
  );
};

export default AlertPage;
