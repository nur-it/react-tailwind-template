import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // VS Code-like theme
import remarkGfm from "remark-gfm";

const ComponentLayoutProvider = ({
  markdown,
  codeSnippets,
  componentScope,
}) => {
  const [copied, setCopied] = useState(false);

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
              <LiveProvider code={codeSnippet} scope={componentScope}>
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

export default ComponentLayoutProvider;
