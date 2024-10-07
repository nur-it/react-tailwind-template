import React from "react";
import LongTextInputWithIcon from "../../components/ui/LongTextInputWithIcon";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const TextAreaPage = () => {
  const markdown = `
## TextAreaInputWithIcon

The \`LongTextInputWithIcon\` component is a versatile and reusable textarea element built using React and Tailwind CSS. It supports displaying an icon inside the textarea container and handles user input changes.

#### Usage

\`\`\`jsx
const LongTextInputWithIcon = ({
  id,
  name,
  icon,
  value,
  label,
  textRow,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="w-full">
      <label className="mb-3 block text-sm font-medium text-black" htmlFor={id}>
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-4">{icon}</span>

        <textarea
          id={id}
          name={name}
          rows={textRow}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="border-stroke w-full rounded border bg-gray-100 py-3 pl-12 pr-4 font-medium text-black focus:border-primary focus-visible:outline-none"
        ></textarea>
      </div>
    </div>
  );
};
export default LongTextInputWithIcon;
\`\`\`

### Props

| Prop Name      | Type        | Default | Description                                                                 | Required |
| -------------- | ----------- | ------- | --------------------------------------------------------------------------- | -------- |
| \`id\`           | \`string\`    | \`""\`    | The unique identifier for the textarea element.                             | Yes      |
| \`name\`         | \`string\`    | \`""\`    | The name attribute for the textarea element, used for form data submission. | Yes      |
| \`icon\`         | \`ReactNode\` | \`null\`  | The icon to be displayed inside the textarea container.                     | No       |
| \`value\`        | \`string\`    | \`""\`    | The current value of the textarea input.                                    | Yes      |
| \`label\`        | \`string\`    | \`""\`    | The label text displayed above the textarea element.                        | Yes      |
| \`textRow\`      | \`number\`    | \`3\`     | The number of rows for the textarea element.                                | No       |
| \`placeholder\`  | \`string\`    | \`""\`    | The placeholder text for the textarea element.                              | No       |
| \`handleChange\` | \`function\`  | \`null\`  | The function to handle the change event of the textarea input.              | Yes      |
`;

  // Code snippets for live preview
  const codeSnippets = [
    `      <LongTextInputWithIcon
        id="message"
        name="message"
        value="This is a sample message."
        label="Message"
        textRow={5}
        placeholder="Enter your message here"

      />`,
    // `      <LongTextInputWithIcon
    //     id="message"
    //     name="message"
    //     icon={<FaComment />}
    //     value="This is a sample message."
    //     label="Message"
    //     textRow={5}
    //     placeholder="Enter your message here"
    //     handleChange={handleChange}
    //   />`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ LongTextInputWithIcon }} // Make sure to include all components used in the snippets
    />
  );
};

export default TextAreaPage;
