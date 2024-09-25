import React from "react";
import InputText from "../../components/ui/InputText";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";
import InputTextWithIcon from "../../components/ui/InputTextWithIcon";

const InputPage = () => {
  const markdown = `
### Input

The **InputText** component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants. 

The **InputText** component is a flexible input field designed for use in forms. It supports various configurations like validation, different size variants, and error handling. It integrates with **react-hook-form** to handle form state and validation effortlessly.

#### Usage

\`\`\`jsx
import React from "react";
import { useForm } from "react-hook-form";
import InputText from "./InputText"; // Adjust the import path based on your file structure
import InputTextWithIcon from "./InputTextWithIcon"; // Adjust the import path based on your file structure

const FormDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <form>
      {/* Email Input */}

      <InputText
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        register={register}
        errors={errors}
        required
        pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
      />

      {/* Email Input */}

      <InputTextWithIcon
        required
        errors={errors}
        id="email"
        icon={FiMail}
        label="Email"
        name="email"
        type="email"
        register={register}
        pattern={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        placeholder="Enter your email"
      />
    </form>
  );
};

export default FormDemo;

\`\`\`


## Props

| Prop            | Type        | Default       | Description                                                                                                                                                     |
|-----------------|-------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| \`id\`          | \`string\`  | \`required\`  | The unique identifier for the input field.                                                                                                                      |
| \`name\`        | \`string\`  | \`required\`  | The name of the input field.                                                                                                                                     |
| \`label\`       | \`string\`  | \`null\`      | Optional label for the input field, displayed above the input.                                                                                                   |
| \`type\`        | \`string\`  | \`text\`      | The type of the input field (e.g., \`text\`, \`email\`, \`password\`).                                                                                           |
| \`errors\`      | \`object\`  | \`{}\`        | An object representing any validation errors for the input field. Typically passed from \`react-hook-form\`'s \`formState.errors\`.                              |
| \`pattern\`     | \`RegExp\`  | \`null\`      | Regular expression pattern to validate the input value.                                                                                                          |
| \`register\`    | \`function\`| \`required\`  | The \`register\` function from \`react-hook-form\` to register the input field for form validation.                                                              |
| \`required\`    | \`boolean\` | \`false\`     | If \`true\`, the input field will be required.                                                                                                                   |
| \`maxLength\`   | \`number\`  | \`null\`      | Maximum length of the input value.                                                                                                                               |
| \`minLength\`   | \`number\`  | \`null\`      | Minimum length of the input value.                                                                                                                               |
| \`placeholder\` | \`string\`  | \`null\`      | Placeholder text for the input field.                                                                                                                            |
| \`size\`        | \`string\`  | \`medium\`    | Size variant of the input field. Can be \`small\`, \`medium\`, or \`large\`.                                                                                     |
| \`className\`   | \`string\`  | \`null\`      | Additional custom classes to be applied to the input field. 
`; 

  // Code snippets for live preview
  const codeSnippets = [
    // `<InputText id="name" name="name" label="Name" placeholder="Enter your name" register={register} errors={errors} required />`,
    `<InputText className="text-red-500" placeholder="email" label="email" />`,
    `<InputTextWithIcon placeholder="password" name="password" />`,
  ];


  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{ InputText, InputTextWithIcon }}
    />
  );
};

export default InputPage;
