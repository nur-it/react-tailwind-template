import React from "react";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "../../components/ui/Table";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const TablePage = () => {
  const markdown = `
### Table

The \`Table\` components provide a flexible and customizable way to create tables using React, Tailwind CSS, and \`class-variance-authority (cva)\` for managing styles and variants.


#### Usage

\`\`\`jsx
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "./components/ui/Table";

function App() {
  return (
    <TableContainer>
      <Table striped={true}>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Data 1</TableCell>
            <TableCell>Data 2</TableCell>
            <TableCell>Data 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Data 4</TableCell>
            <TableCell>Data 5</TableCell>
            <TableCell>Data 6</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <span>Table Footer</span>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
\`\`\`

### TableContainer

The TableContainer component is a wrapper for the table, providing overflow handling for large tables.

### Props

| Prop Name   | Type        | Default | Description                                        | Required |
| ----------- | ----------- | ------- | -------------------------------------------------- | -------- |
| \`children\`  | \`ReactNode\` | \`null\`  | The content inside the table container.            | Yes      |
| \`className\` | \`string\`    | \`""\`    | Additional custom classes for the table container. | No       |

### TableBody

The TableBody component is used for creating the body section of the table.

### Props

| Prop Name   | Type        | Default | Description                                   | Required |
| ----------- | ----------- | ------- | --------------------------------------------- | -------- |
| \`children\`  | \`ReactNode\` | \`null\`  | The content inside the table body.            | Yes      |
| \`className\` | \`string\`    | \`""\`    | Additional custom classes for the table body. | No       |

### TableRow

The TableRow component is used for creating rows in the table.

### Props

| Prop Name   | Type        | Default | Description                                  | Required |
| ----------- | ----------- | ------- | -------------------------------------------- | -------- |
| \`children\`  | \`ReactNode\` | \`null\`  | The content inside the table row.            | Yes      |
| \`className\` | \`string\`    | \`""\`    | Additional custom classes for the table row. | No       |

### TableCell

The TableCell component is used for creating cells in the table.

### Props

| Prop Name   | Type        | Default | Description                                   | Required |
| ----------- | ----------- | ------- | --------------------------------------------- | -------- |
| \`children\`  | \`ReactNode\` | \`null\`  | The content inside the table cell.            | Yes      |
| \`className\` | \`string\`    | \`""\`    | Additional custom classes for the table cell. | No       |

### TableFooter

The TableFooter component is used for creating the footer section of the table.

### Props

| Prop Name   | Type        | Default | Description                                     | Required |
| ----------- | ----------- | ------- | ----------------------------------------------- | -------- |
| \`children\`  | \`ReactNode\` | \`null\`  | The content inside the table footer.            | Yes      |
| \`className\` | \`string\`    | \`""\`    | Additional custom classes for the table footer. | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `
<TableContainer className="my-6">
  <Table striped={false}>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Data 1</TableCell>
        <TableCell>Data 2</TableCell>
        <TableCell>Data 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Data 4</TableCell>
        <TableCell>Data 5</TableCell>
        <TableCell>Data 6</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <span>Table Footer</span>
    </TableFooter>
  </Table>
</TableContainer>
    `,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{
        TableContainer,
        Table,
        TableHeader,
        TableBody,
        TableRow,
        TableCell,
        TableFooter,
      }} // Make sure to include all components used in the snippets
    />
  );
};

export default TablePage;
