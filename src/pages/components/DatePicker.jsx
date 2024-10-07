import React from "react";
import DatePicker from "../../components/ui/DatePicker";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const DatePickerPage = () => {
  const markdown = `
### DatePicker

The DatePicker component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants and sizes. It utilizes the \`react-flatpickr\` library for date selection.

#### Usage

\`\`\`jsx
import React, { useState } from "react";
import DatePicker from "./components/ui/DatePicker";

function App() {
  const [date, setDate] = useState(null);

  return (
    <DatePicker
      size="small"
      variant="default"
      placeholder="Select a date"
      date={date}
      setDate={setDate}
    />
  );
}
\`\`\`

### Props

| Prop Name     | Type     | Default           | Description                                                                                                    | Required |
| ------------- | -------- | ----------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| \`id\`          | string   | \`"datepicker"\`    | The ID attribute of the date picker input.                                                                     | No       |
| \`placeholder\` | string   | \`"Select a date"\` | The placeholder text for the date picker input.                                                                | No       |
| \`size\`        | string   | \`"medium"\`        | The size of the date picker. Options: \`"small"\`, \`"medium"\`, \`"large"\`.                                        | No       |
| \`variant\`     | string   | \`"default"\`       | The style variant of the date picker. Options: \`"default"\`, \`"primary"\`, \`"success"\`, \`"warning"\`, \`"danger"\`. | No       |
| \`date\`        | Date     | \`null\`            | The currently selected date.                                                                                   | No       |
| \`setDate\`     | function | -                 | A function to handle date changes. Receives the selected date as an argument.                                | Yes      |
| \`...props\`    | object   | -                 | Additional props to pass to the \`Flatpickr\` component.                                                         | No       |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `    <DatePicker
        size="large"
        variant="success"
        placeholder="Choose a date"
      />`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ DatePicker }} // Make sure to include all components used in the snippets
    />
  );
};

export default DatePickerPage;
