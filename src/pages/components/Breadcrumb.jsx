import React from "react";
import Breadcrumb from "../../components/ui/Breadcrumb";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";
const BreadcrumbPage = () => {
  const markdown = `
### Breadcrumb

The Breadcrumb component provides a navigation trail for users to see their current location within a hierarchical structure.

#### Usage

\`\`\`jsx
import Breadcrumb from "./components/ui/Breadcrumb";
import { Link } from "react-router-dom";

function App() {
  const breadcrumbLinks = [
    { label: "Home", href: "/", active: false, title: "Go to Home" },
    {
      label: "Products",
      href: "/products",
      active: false,
      title: "View Products",
    },
    {
      label: "Details",
      href: "/products/details",
      active: true,
      title: "Product Details",
    },
  ];

  return <Breadcrumb links={breadcrumbLinks} />;
}
\`\`\`

### Props

| Prop Name   | Type   | Default | Description                                                                                                            | Required |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| \`links\`     | array  | \`[]\`    | An array of objects representing breadcrumb links. Each object should include: \`label\`, \`href\`, \`active\`, and \`title\`. | Yes      |
| \`className\` | string | \`""\`    | Additional custom classes for the breadcrumb container.                                                                | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `<Breadcrumb links={[{ label: "Home", href: "/", title: "Go to homepage" }, { label: "Category", href: "/category", title: "View category" }, { label: "Subcategory", href: "/category/subcategory", title: "View subcategory", active: true }]} className="my-custom-class" />`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ Breadcrumb }}
    />
  );
};

export default BreadcrumbPage;
