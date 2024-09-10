import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // VS Code-like theme
import remarkGfm from "remark-gfm";
import Badge from "../../components/ui/Badge";

const BadgePage = () => {
  const [copied, setCopied] = useState(false);

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
              <LiveProvider code={codeSnippet} scope={{ Badge }}>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full bg-gray-800 p-4 text-white md:w-1/2">
                    <div className="relative">
                      <h5 className="mb-2 font-bold">Editor</h5>
                      <CopyToClipboard
                        text={codeSnippet}
                        onCopy={() => setCopied(true)}
                      >
                        <button
                          className="absolute right-2 top-2 rounded bg-gray-200 px-2 py-1 font-bold text-gray-800 opacity-0 transition hover:bg-gray-300"
                          onMouseLeave={() => setCopied(false)}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </CopyToClipboard>
                      <LiveEditor className="rounded bg-gray-800 p-2 text-white" />
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 p-4 md:w-1/2">
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

export default BadgePage;
