import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // VS Code-like theme
import remarkGfm from "remark-gfm";
import Alert from "../../components/ui/Alert";

const AlertPage = () => {
  const [copied, setCopied] = useState(false);

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

### Live Example

Below is a live editor where you can modify the code and see the result instantly:

\`\`\`jsx live=true
<Alert type="success" size="large" closable>
  A dynamic success alert!
</Alert>
\`\`\`

### Props

| Prop Name   | Type      | Default     | Description                                                                   | Required |
| ----------- | --------- | ----------- | ----------------------------------------------------------------------------- | -------- |
| \`type\`      | string    | \`"primary"\` | The alert type. Options: \`"primary"\`, \`"secondary"\`, \`"success"\`, \`"danger"\`. | No       |
| \`size\`      | string    | \`"medium"\`  | The alert size. Options: \`"small"\`, \`"medium"\`, \`"large"\`.                    | No       |
| \`closable\`  | boolean   | \`false\`     | If true, a close button will be displayed to dismiss the alert.               | No       |
| \`children\`  | ReactNode | \`null\`      | The content inside the alert.                                                 | Yes      |
| \`className\` | string    | \`""\`        | Additional custom classes for the alert.                                      | No       |

### Example

\`\`\`jsx
<Alert type="success" size="large" closable>
  <MdCheckCircle className="h-5 w-5 text-green-700" />
  This is a success alert with an icon and close button!
</Alert>
\`\`\`

This will render a large success alert with an icon and a close button.
  `;

  // Code snippets for live preview
  const codeSnippets = [
    `<Alert type="primary" size="medium" closable>
      A simple primary alert - check it out!
    </Alert>`,
  ];

  return (
    <div className="mt-6">
      {/* Markdown content */}
      <div className="markdown mt-10 rounded bg-white p-8 shadow">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const codeContent = String(children).replace(/\n$/, "");

              return !inline && match ? (
                <div className="group relative">
                  <CopyToClipboard
                    text={codeContent}
                    onCopy={() => setCopied(true)}
                  >
                    <button
                      className="absolute right-2 top-2 rounded bg-gray-200 px-2 py-1 font-bold text-gray-800 opacity-0 transition hover:bg-gray-300 group-hover:opacity-100"
                      onMouseLeave={() => setCopied(false)}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </CopyToClipboard>
                  <SyntaxHighlighter
                    style={vs}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>

        {/* Live Code Editor */}
        <div className="mt-8">
          <h4 className="mb-2 text-lg font-bold">Live Editor</h4>
          {codeSnippets.map((codeSnippet, index) => (
            <div key={index} className="mb-6">
              <LiveProvider code={codeSnippet} scope={{ Alert }}>
                <div className="flex flex-wrap">
                  <div className="w-1/2 bg-gray-800 p-4 text-white">
                    <h5 className="mb-2 font-bold">Editor</h5>
                    <LiveEditor className="rounded bg-gray-800 p-2 text-white" />
                  </div>
                  <div className="w-1/2 bg-gray-100 p-4">
                    <h5 className="mb-2 font-bold">Preview</h5>
                    <LivePreview />
                  </div>
                </div>
              </LiveProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertPage;
