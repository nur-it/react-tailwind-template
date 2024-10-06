import React from "react";
import Pagination from "../../components/ui/Pagination";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const PaginationPage = () => {
  const markdown = `
### Pagination

The Pagination component is a flexible and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants. It provides navigation for paginated content, allowing users to navigate between different pages.

#### Usage

\`\`\`jsx
import Pagination from "./components/ui/Pagination";

function App() {
  const handlePageChange = (pageNumber) => {
    console.log("Current Page:", pageNumber);
  };

  return (
    <Pagination
      totalPages={20}
      currentPage={5}
      onPageChange={handlePageChange}
      variant="primary"
      size="medium"
    />
  );
}
\`\`\`

### Props

| Prop Name      | Type       | Default     | Description                                                                                           | Required |
| -------------- | ---------- | ----------- | ----------------------------------------------------------------------------------------------------- | -------- |
| \`totalPages\`   | \`number\`   | \`10\`        | The total number of pages.                                                                            | No       |
| \`currentPage\`  | \`number\`   | \`1\`         | The currently active page.                                                                            | No       |
| \`onPageChange\` | \`function\` | \`null\`      | Callback function triggered when a page is selected. Receives the new page number as an argument.     | Yes      |
| \`variant\`      | \`string\`   | \`"primary"\` | The variant for the pagination buttons. Options: \`"primary"\`, \`"secondary"\`, \`"success"\`, \`"danger"\`. | No       |
| \`size\`         | \`string\`   | \`"medium"\`  | The size of the pagination buttons. Options: \`"small"\`, \`"medium"\`, \`"large"\`.                        | No       |
| \`siblingCount\` | \`number\`   | \`1\`         | The number of sibling pages to display on either side of the current page.                            | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `<Pagination
  totalPages={15}
  currentPage={3}
  onPageChange={(page) => console.log("Selected Page:", page)}
  variant="secondary"
  size="large"
/>`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ Pagination }} // Make sure to include all components used in the snippets
    />
  );
};

export default PaginationPage;
