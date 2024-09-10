import React, { useState } from "react";
import Badge from "../../components/ui/Badge";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const BadgePage = () => {

  const markdown = `
### Badge

The Badge component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants. It is used to display labels or notifications in various styles.

#### Usage

\`\`\`jsx
import Badge from "./components/ui/Badge";

function App() {
  return (
    <div>
      <Badge color="success" size="large">
        Success
      </Badge>
      <Badge color="danger" size="small">
        Danger
      </Badge>
    </div>
  );
}
\`\`\`

### Props

| Prop Name   | Type      | Default     | Description                                                                                        | Required |
| ----------- | --------- | ----------- | -------------------------------------------------------------------------------------------------- | -------- |
| \`color\`     | string    | \`"primary"\` | The badge color. Options: \`"primary"\`, \`"secondary"\`, \`"success"\`, \`"warn"\`, \`"danger"\`, \`"info"\`. | No       |
| \`size\`      | string    | \`"medium"\`  | The badge size. Options: \`"small"\`, \`"medium"\`, \`"large"\`.                                         | No       |
| \`children\`  | ReactNode | \`null\`      | The content inside the badge.                                                                      | Yes      |
| \`className\` | string    | \`""\`        | Additional custom classes for the badge.                                                           | No       |

`;

  // Code snippets for live preview
  const codeSnippets = [`<Badge color="success" size="large">Success</Badge> `];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ Badge }}
    />
  );
};

export default BadgePage;
