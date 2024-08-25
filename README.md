# React Tailwind Starter

A starter template for building React applications with Tailwind CSS, Vite, and essential libraries. This project is pre-configured to provide a solid foundation for developing modern web applications.

## Table of Contents

- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Components](#components)
  - [Alert](#alert)
  - [Button](#button)
  - [Badge](#badge)
  - [Breadcrumb](#breadcrumb)
  - [Checkbox](#checkbox)
  - [DatePicker](#datePicker)
  - [InputText](#inputText)
  - [InputTextWithIcon](#inputTextWithIcon)
  - [TextArea](#textAreaInput)
  - [TextAreaWithIcon](#textAreaInputWithIcon)
  - [ImageUpload](#singleImageUpload)
  - [MultipleImageUpload](#multipleImageUpload)
  - [SelectOption](#singleSelectOption)
  - [MultiSelectOption](#multiSelectOption)
- [License](#license)

## Project Structure

The project is structured as follows:

```
react-tailwind-starter/
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── screens/
│   │   ├── shared/
│   │   └── ui/
│   ├── contexts/
│   │   └── provider/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   │   └── httpService/
│   ├── styles/
│   │   └── global.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Scripts

- **`dev`**: Runs the development server and opens it in your default browser.
- **`build`**: Builds the project for production.
- **`lint`**: Runs ESLint to check for code quality issues.
- **`preview`**: Previews the production build locally.

## Dependencies

### Core Libraries

- **`react`**: Core library for building user interfaces.
- **`react-dom`**: Entry point to the DOM for React.
- **`react-router-dom`**: Declarative routing for React apps.

### Styling & UI

- **`tailwindcss`**: A utility-first CSS framework for rapid UI development.
- **`clsx`**: A utility for conditionally joining class names together.
- **`tailwind-merge`**: A tool to merge Tailwind CSS classes intelligently.
- **`flatpickr`**: A lightweight and powerful datetime picker.
- **`react-flatpickr`**: React wrapper for Flatpickr.

### State Management & Data Fetching

- **`@tanstack/react-query`**: Powerful data fetching and caching for React.
- **`@tanstack/react-query-devtools`**: Devtools for React Query.
- **`axios`**: Promise-based HTTP client for the browser and Node.js.

### Forms & Validation

- **`react-hook-form`**: Performant, flexible, and extensible forms with easy-to-use validation.

### Utility Libraries

- **`js-cookie`**: A simple, lightweight JavaScript API for handling cookies.
- **`class-variance-authority`**: A library to manage Tailwind CSS variants.

### SEO & Meta Management

- **`react-helmet`**: A document head manager for React.

## DevDependencies

- **`vite`**: Next-generation frontend tooling.
- **`@vitejs/plugin-react`**: Vite plugin for React support.
- **`tailwindcss`**: Utility-first CSS framework.
- **`postcss`**: A tool for transforming CSS with JavaScript plugins.
- **`autoprefixer`**: A PostCSS plugin to parse CSS and add vendor prefixes.
- **`eslint`**: A pluggable linting utility for JavaScript and JSX.
- **`prettier`**: An opinionated code formatter.
- **`prettier-plugin-tailwindcss`**: A Prettier plugin to format Tailwind CSS classes.
- **`eslint-plugin-react`**: React-specific linting rules for ESLint.
- **`eslint-plugin-react-hooks`**: Enforces the Rules of Hooks.
- **`eslint-plugin-react-refresh`**: Enables React Fast Refresh.
- **`globals`**: A list of global variables in JavaScript.

## Getting Started

### Clone the repository:

```
git clone https://github.com/nur-it/react-tailwind-boilerplate.git
```

### Install dependencies:

```
npm install
```

### Run the development server:

```
npm run dev
```

### Build for production:

```
npm run build
```

## Customization

Feel free to customize this starter template according to your project's needs. You can add more dependencies, adjust the Tailwind CSS configuration, or modify the Vite setup.

## Components

### Alert

The Alert component is a versatile and reusable UI element built using React and Tailwind CSS, with `class-variance-authority (cva)` for managing variants. It displays a message with an optional icon and close button, making it suitable for notifications and alerts.

#### Usage

```jsx
import Alert from "./components/ui/Alert";
import { MdCheckCircle } from "react-icons/md";

function App() {
  return (
    <Alert type="success" size="large" closable>
      This is a success alert!
    </Alert>
  );
}
```

### Props

| Prop Name   | Type      | Default     | Description                                                                   | Required |
| ----------- | --------- | ----------- | ----------------------------------------------------------------------------- | -------- |
| `type`      | string    | `"primary"` | The alert type. Options: `"primary"`, `"secondary"`, `"success"`, `"danger"`. | No       |
| `size`      | string    | `"medium"`  | The alert size. Options: `"small"`, `"medium"`, `"large"`.                    | No       |
| `closable`  | boolean   | `false`     | If true, a close button will be displayed to dismiss the alert.               | No       |
| `children`  | ReactNode | `null`      | The content inside the alert.                                                 | Yes      |
| `className` | string    | `""`        | Additional custom classes for the alert.                                      | No       |

### Example

```jsx
<Alert type="success" size="large" closable>
  <MdCheckCircle className="h-5 w-5 text-green-700" />
  This is a success alert with an icon and close button!
</Alert>
```

This will render a large success alert with an icon and a close button.

### Button

The Button component is a versatile and reusable UI element built using React and Tailwind CSS, with `class-variance-authority (cva)` for managing variants.

#### Usage

```jsx
import Button from "./components/ui/Button";

function App() {
  return (
    <Button variant="primary" size="medium">
      Click Me
    </Button>
  );
}
```

### Props

| Prop Name   | Type      | Default     | Description                                                                         | Required |
| ----------- | --------- | ----------- | ----------------------------------------------------------------------------------- | -------- |
| `children`  | ReactNode | `null`      | The content inside the button.                                                      | Yes      |
| `className` | string    | `""`        | Additional custom classes for the button.                                           | No       |
| `variant`   | string    | `"primary"` | The button variant. Options: `"primary"`, `"secondary"`, `"danger"`.                | No       |
| `size`      | string    | `"medium"`  | The button size. Options: `"small"`, `"medium"`, `"large"`.                         | No       |
| `fullWidth` | boolean   | `false`     | If true, the button will take up the full width of its container.                   | No       |
| `disabled`  | boolean   | `false`     | If true, the button will be disabled.                                               | No       |
| `loading`   | boolean   | `false`     | If true, the button will show a loading spinner and be disabled.                    | No       |
| `icon`      | object    | `null`      | An object containing an Icon component and float direction (`"left"` or `"right"`). | No       |
| `type`      | string    | `"button"`  | The button type attribute (`"button"`, `"submit"`, `"reset"`).                      | No       |

### Example

```jsx
<Button
  variant="secondary"
  size="large"
  icon={{ Icon: MyIconComponent, float: "right" }}
  loading={true}
>
  Save Changes
</Button>
```

This will render a large secondary button with an icon on the right side and a loading spinner.

### Badge

The Badge component is a versatile and reusable UI element built using React and Tailwind CSS, with `class-variance-authority (cva)` for managing variants. It is used to display labels or notifications in various styles.

#### Usage

```jsx
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
```

### Props

| Prop Name   | Type      | Default     | Description                                                                                        | Required |
| ----------- | --------- | ----------- | -------------------------------------------------------------------------------------------------- | -------- |
| `color`     | string    | `"primary"` | The badge color. Options: `"primary"`, `"secondary"`, `"success"`, `"warn"`, `"danger"`, `"info"`. | No       |
| `size`      | string    | `"medium"`  | The badge size. Options: `"small"`, `"medium"`, `"large"`.                                         | No       |
| `children`  | ReactNode | `null`      | The content inside the badge.                                                                      | Yes      |
| `className` | string    | `""`        | Additional custom classes for the badge.                                                           | No       |

### Example

```jsx
<Badge color="success" size="large">
  Success
</Badge>
<Badge color="danger" size="small">
  Danger
</Badge>
```

This will render a large success badge and a small danger badge with the specified styles.

### Breadcrumb

The Breadcrumb component provides a navigation trail for users to see their current location within a hierarchical structure.

#### Usage

```jsx
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
```

### Props

| Prop Name   | Type   | Default | Description                                                                                                            | Required |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| `links`     | array  | `[]`    | An array of objects representing breadcrumb links. Each object should include: `label`, `href`, `active`, and `title`. | Yes      |
| `className` | string | `""`    | Additional custom classes for the breadcrumb container.                                                                | No       |

### Example

```jsx
<Breadcrumb
  links={[
    { label: "Home", href: "/", title: "Go to homepage" },
    { label: "Category", href: "/category", title: "View category" },
    {
      label: "Subcategory",
      href: "/category/subcategory",
      title: "View subcategory",
      active: true,
    },
  ]}
  className="my-custom-class"
></Breadcrumb>
```

This will render a breadcrumb trail with links for "Home", "Category", and "Subcategory", with "Subcategory" marked as active and styled accordingly.

### Checkbox

The Checkbox component is a versatile and reusable UI element built using React and Tailwind CSS, with `class-variance-authority (cva)` for managing variants.

#### Usage

```jsx
import Checkbox from "./components/ui/Checkbox";

function App() {
  return (
    <div>
      <Checkbox size="large" variant="checked" />
      <Checkbox size="small" variant="default" disabled />
    </div>
  );
}
```

### Props

| Prop Name  | Type    | Default     | Description                                                             | Required |
| ---------- | ------- | ----------- | ----------------------------------------------------------------------- | -------- |
| `checked`  | boolean | `false`     | If true, the checkbox will be checked.                                  | No       |
| `size`     | string  | `"medium"`  | The size of the checkbox. Options: `"small"`, `"medium"`, `"large"`.    | No       |
| `variant`  | string  | `"default"` | The checkbox variant. Options: `"default"`, `"checked"`, `"disabled"`.  | No       |
| `disabled` | boolean | `false`     | If true, the checkbox will be disabled and appear with reduced opacity. | No       |
| `...props` | object  | -           | Additional props to pass to the checkbox input element.                 | No       |

### Example

```jsx
<Checkbox size="small" variant="default">
  Small Default Checkbox
</Checkbox>

<Checkbox size="medium" variant="checked" checked={true}>
  Medium Checked Checkbox
</Checkbox>

<Checkbox size="large" variant="disabled" disabled={true}>
  Large Disabled Checkbox
</Checkbox>
```

This will render checkboxes of different sizes and states with the specified styles. The first checkbox is small and default, the second is medium and checked, and the third is large and disabled.

### DatePicker

The DatePicker component is a versatile and reusable UI element built using React and Tailwind CSS, with `class-variance-authority (cva)` for managing variants and sizes. It utilizes the `react-flatpickr` library for date selection.

#### Usage

```jsx
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
```

### Props

| Prop Name     | Type     | Default           | Description                                                                                                    | Required |
| ------------- | -------- | ----------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `id`          | string   | `"datepicker"`    | The ID attribute of the date picker input.                                                                     | No       |
| `placeholder` | string   | `"Select a date"` | The placeholder text for the date picker input.                                                                | No       |
| `size`        | string   | `"medium"`        | The size of the date picker. Options: `"small"`, `"medium"`, `"large"`.                                        | No       |
| `variant`     | string   | `"default"`       | The style variant of the date picker. Options: `"default"`, `"primary"`, `"success"`, `"warning"`, `"danger"`. | No       |
| `date`        | Date     | `null`            | The currently selected date.                                                                                   | No       |
| `setDate`     | function | -                 | A function to handle date changes. Receives the selected date as an argument.                                  | Yes      |
| `...props`    | object   | -                 | Additional props to pass to the `Flatpickr` component.                                                         | No       |

### Example

```jsx
import React, { useState } from "react";
import DatePicker from "./components/ui/DatePicker";

function App() {
  const [date, setDate] = useState(null);

  return (
    <div>
      <DatePicker
        size="small"
        variant="default"
        placeholder="Select a date"
        date={date}
        setDate={setDate}
      />
      <DatePicker
        size="medium"
        variant="primary"
        placeholder="Pick a date"
        date={date}
        setDate={setDate}
      />
      <DatePicker
        size="large"
        variant="success"
        placeholder="Choose a date"
        date={date}
        setDate={setDate}
      />
    </div>
  );
}
```

This will render three DatePicker components with different sizes and styles. The first is small with the default style, the second is medium with the primary style, and the third is large with the success style.

### InputText

The InputText component is a versatile and reusable form input element built using React and Tailwind CSS. It is designed to handle various types of validation, including required fields, minimum and maximum length, and pattern matching.

### Usage

```jsx
import InputText from "./components/ui/InputText";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        register={register}
        required
        pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
        errors={errors}
      />
      <InputText
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        register={register}
        required
        minLength={8}
        pattern={
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        }
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Props

| Prop Name     | Type       | Default  | Description                                                                                      | Required |
| ------------- | ---------- | -------- | ------------------------------------------------------------------------------------------------ | -------- |
| `id`          | `string`   | `""`     | The unique identifier for the input element.                                                     | Yes      |
| `type`        | `string`   | `"text"` | The type of input element.                                                                       | No       |
| `name`        | `string`   | `""`     | The name attribute for the input element, used for form data submission.                         | Yes      |
| `label`       | `string`   | `""`     | The label text displayed above the input element.                                                | Yes      |
| `errors`      | `object`   | `{}`     | An object containing validation errors returned by React Hook Form.                              | Yes      |
| `pattern`     | `RegExp`   | `null`   | A regular expression pattern for validating the input value.                                     | No       |
| `register`    | `function` | `null`   | The `register` function from React Hook Form, used to register the input element for validation. | Yes      |
| `required`    | `boolean`  | `false`  | If true, the input field will be required.                                                       | No       |
| `maxLength`   | `number`   | `null`   | The maximum length of the input value.                                                           | No       |
| `minLength`   | `number`   | `null`   | The minimum length of the input value.                                                           | No       |
| `placeholder` | `string`   | `""`     | The placeholder text for the input element.                                                      | No       |

### Example

```jsx
<InputText
  id="username"
  name="username"
  type="text"
  label="Username"
  placeholder="Enter your username"
  register={register}
  required
  minLength={3}
  maxLength={15}
  errors={errors}
/>
```

This example will render a text input field for the username with validation for required, minimum length, and maximum length. If any validation fails, appropriate error messages will be displayed.

### InputTextWithIcon

The InputTextWithIcon component is a versatile and reusable form input element built using React and Tailwind CSS. It includes support for displaying icons within the input field, handling password visibility toggling, and performing various types of validation, including required fields, minimum and maximum length, and pattern matching.

### Usage

```jsx
import InputTextWithIcon from "./components/ui/InputTextWithIcon";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextWithIcon
        id="username"
        name="username"
        type="text"
        label="Username"
        icon={<FiUser />}
        placeholder="Enter your username"
        register={register}
        required
        minLength={3}
        maxLength={15}
        errors={errors}
      />
      <InputTextWithIcon
        id="password"
        name="password"
        type="password"
        label="Password"
        icon={<FiLock />}
        placeholder="Enter your password"
        register={register}
        required
        minLength={8}
        pattern={
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        }
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Props

| Prop Name     | Type        | Default  | Description                                                                                      | Required |
| ------------- | ----------- | -------- | ------------------------------------------------------------------------------------------------ | -------- |
| `id`          | `string`    | `""`     | The unique identifier for the input element.                                                     | Yes      |
| `icon`        | `ReactNode` | `null`   | The icon element to be displayed inside the input field.                                         | No       |
| `label`       | `string`    | `""`     | The label text displayed above the input element.                                                | Yes      |
| `name`        | `string`    | `""`     | The name attribute for the input element, used for form data submission.                         | Yes      |
| `type`        | `string`    | `"text"` | The type of input element (e.g., `text`, `password`, `email`).                                   | No       |
| `errors`      | `object`    | `{}`     | An object containing validation errors returned by React Hook Form.                              | Yes      |
| `pattern`     | `RegExp`    | `null`   | A regular expression pattern for validating the input value.                                     | No       |
| `required`    | `boolean`   | `false`  | If true, the input field will be required.                                                       | No       |
| `register`    | `function`  | `null`   | The `register` function from React Hook Form, used to register the input element for validation. | Yes      |
| `minLength`   | `number`    | `null`   | The minimum length of the input value.                                                           | No       |
| `maxLength`   | `number`    | `null`   | The maximum length of the input value.                                                           | No       |
| `placeholder` | `string`    | `""`     | The placeholder text for the input element.                                                      | No       |

### Example

```jsx
<InputTextWithIcon
  id="email"
  name="email"
  type="email"
  label="Email Address"
  icon={<FiMail />}
  placeholder="Enter your email"
  register={register}
  required
  pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
  errors={errors}
/>
```

This example will render a text input field for an email address with validation for required, pattern matching, and other optional constraints. An icon will appear inside the input field, and errors will be displayed if validation fails.

### TextAreaInput

The LongTextInput component is a customizable textarea input field built using React and Tailwind CSS. It is designed to handle long text inputs with a flexible number of rows.

### Usage

```jsx
import LongTextInput from "./components/ui/LongTextInput";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form>
      <LongTextInput
        id="description"
        name="description"
        value={text}
        label="Description"
        textRow={5}
        placeholder="Enter your description here"
        handleChange={handleChange}
      />
    </form>
  );
}
```

### Props

| Prop Name      | Type       | Default | Description                                                                 | Required |
| -------------- | ---------- | ------- | --------------------------------------------------------------------------- | -------- |
| `id`           | `string`   | `""`    | The unique identifier for the textarea element.                             | Yes      |
| `name`         | `string`   | `""`    | The name attribute for the textarea element, used for form data submission. | Yes      |
| `value`        | `string`   | `""`    | The current value of the textarea input.                                    | Yes      |
| `label`        | `string`   | `""`    | The label text displayed above the textarea element.                        | Yes      |
| `textRow`      | `number`   | `3`     | The number of rows for the textarea element.                                | No       |
| `placeholder`  | `string`   | `""`    | The placeholder text for the textarea element.                              | No       |
| `handleChange` | `function` | `null`  | The function to handle the change event of the textarea input.              | Yes      |

### Example

```jsx
<LongTextInput
  id="comment"
  name="comment"
  value={commentValue}
  label="Comment"
  textRow={6}
  placeholder="Write your comment here..."
  handleChange={handleCommentChange}
/>
```

This example will render a textarea input field for comments with a custom number of rows. The handleChange function will update the state as the user types in the textarea.

## TextAreaInputWithIcon

The `LongTextInputWithIcon` component is a versatile and reusable textarea element built using React and Tailwind CSS. It supports displaying an icon inside the textarea container and handles user input changes.

### Usage

```jsx
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
```

### Props

| Prop Name      | Type        | Default | Description                                                                 | Required |
| -------------- | ----------- | ------- | --------------------------------------------------------------------------- | -------- |
| `id`           | `string`    | `""`    | The unique identifier for the textarea element.                             | Yes      |
| `name`         | `string`    | `""`    | The name attribute for the textarea element, used for form data submission. | Yes      |
| `icon`         | `ReactNode` | `null`  | The icon to be displayed inside the textarea container.                     | No       |
| `value`        | `string`    | `""`    | The current value of the textarea input.                                    | Yes      |
| `label`        | `string`    | `""`    | The label text displayed above the textarea element.                        | Yes      |
| `textRow`      | `number`    | `3`     | The number of rows for the textarea element.                                | No       |
| `placeholder`  | `string`    | `""`    | The placeholder text for the textarea element.                              | No       |
| `handleChange` | `function`  | `null`  | The function to handle the change event of the textarea input.              | Yes      |

### Example

```jsx
import LongTextInputWithIcon from "./components/ui/LongTextInputWithIcon";
import { FaComment } from "react-icons/fa";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="p-4">
      <LongTextInputWithIcon
        id="message"
        name="message"
        icon={<FaComment />}
        value="This is a sample message."
        label="Message"
        textRow={5}
        placeholder="Enter your message here"
        handleChange={handleChange}
      />
    </div>
  );
}
```

This documentation provides a complete overview of the LongTextInputWithIcon component, including its props, an example usage, and the component code itself.

### SingleImageUpload

The SingleImageUpload component is a reusable UI element built using React and Tailwind CSS, with `class-variance-authority (cva)` for managing variants. It provides a drag-and-drop area or browse option for uploading a single image and displays a preview of the uploaded image with an option to remove it.

#### Usage

```jsx
import SingleImageUpload from "./components/ui/SingleImageUpload";

function App() {
  return (
    <SingleImageUpload
      id="profile-pic"
      className="custom-class"
      // ...other props
    />
  );
}
```

### Props

| Prop Name        | Type       | Default      | Description                                              | Required |
| ---------------- | ---------- | ------------ | -------------------------------------------------------- | -------- |
| `id`             | `string`   | `"dropzone"` | The unique identifier for the dropzone element.          | No       |
| `className`      | `string`   | `""`         | Additional custom classes for the dropzone container.    | No       |
| `onImagesChange` | `function` | `null`       | The function to handle changes when images are uploaded. | Yes      |
| `...props`       | `object`   | `null`       | Additional props to be passed to the dropzone container. | No       |

### Example

```jsx
<SingleImageUpload
  id="profile-pic"
  className="border-2 border-dashed border-gray-300"
/>
```

This example renders a single image upload component with custom border styles. It allows users to drag and drop or browse to upload an image and shows a preview with an option to remove the uploaded image.

### MultipleImageUpload

The `MultipleImageUpload` component is a versatile and reusable UI element built using React, Tailwind CSS, and `class-variance-authority (cva)` for managing styles. It allows users to upload multiple images with drag-and-drop support and provides a preview of the uploaded images.

#### Usage

```jsx
import MultipleImageUpload from "./components/ui/MultipleImageUpload";

function App() {
  const handleImagesChange = (images) => {
    console.log("Uploaded images:", images);
  };

  return (
    <MultipleImageUpload
      id="image-upload"
      className="my-custom-class"
      onImagesChange={handleImagesChange}
    />
  );
}
```

### Props

| Prop Name        | Type       | Default      | Description                                              | Required |
| ---------------- | ---------- | ------------ | -------------------------------------------------------- | -------- |
| `id`             | `string`   | `"dropzone"` | The unique identifier for the dropzone element.          | No       |
| `className`      | `string`   | `""`         | Additional custom classes for the dropzone container.    | No       |
| `onImagesChange` | `function` | `null`       | The function to handle changes when images are uploaded. | Yes      |
| `...props`       | `object`   | `null`       | Additional props to be passed to the dropzone container. | No       |

### Example

```jsx
import MultipleImageUpload from "./components/ui/MultipleImageUpload";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleImagesChange = (newImages) => {
    setImages(newImages);
  };

  return (
    <div className="p-4">
      <MultipleImageUpload
        id="image-upload"
        onImagesChange={handleImagesChange}
      />
      <div className="mt-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Uploaded preview ${index + 1}`}
            className="h-20 w-20 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
```

This will render a dropzone for uploading multiple images, and the uploaded images will be displayed as previews below the dropzone.

### SingleSelectOption

The SingleSelectOption component is a versatile and reusable UI element built using React and Tailwind CSS, with `class-variance-authority (cva)` for managing variants. It provides a dropdown menu for selecting a single option from a list.

#### Usage

```jsx
import SingleSelectOption from "./components/ui/SingleSelectOption";

function App() {
  const handleOptionChange = (option) => {
    console.log("Selected option:", option);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  return (
    <SingleSelectOption
      id="select"
      name="select"
      options={options}
      selectedOption={options[0]}
      onChange={handleOptionChange}
    />
  );
}
```

### Props

| Prop Name        | Type       | Default      | Description                                                                                          | Required |
| ---------------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------- | -------- |
| `id`             | `string`   | `"dropzone"` | The unique identifier for the select component.                                                      | No       |
| `name`           | `string`   | `""`         | The name attribute for the select component.                                                         | No       |
| `options`        | `Array`    | `[]`         | An array of options for the select menu. Each option should have `value` and `label` properties.     | No       |
| `selectedOption` | `object`   | `null`       | The currently selected option. Must have `value` and `label` properties.                             | No       |
| `onChange`       | `function` | `null`       | Callback function triggered when an option is selected. Receives the selected option as an argument. | No       |
| `className`      | `string`   | `""`         | Additional custom classes for the select container.                                                  | No       |
| `size`           | `string`   | `"medium"`   | The size of the select component. Options: `"small"`, `"medium"`, `"large"`.                         | No       |
| `variant`        | `string`   | `"primary"`  | The variant style of the select component. Options: `"primary"`, `"secondary"`, `"danger"`.          | No       |
| `status`         | `string`   | `"closed"`   | The status of the select component. Options: `"open"`, `"closed"`.                                   | No       |
| `...props`       | `object`   | `null`       | Additional props to be passed to the select container.                                               | No       |

### Example

```jsx
<SingleSelectOption
  id="select"
  name="select"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ]}
  selectedOption={{ value: "option1", label: "Option 1" }}
  onChange={(option) => console.log("Selected option:", option)}
  size="large"
  variant="secondary"
  status="open"
/>
```

This will render a large secondary select component with the menu open, allowing users to select an option from the provided list.

### MultiSelectOption

The MultiSelectOption component is a versatile UI element built using React and Tailwind CSS, with class-variance-authority (cva) for managing variants. It allows users to select multiple options from a dropdown menu.

### Usage

```jsx
import MultiSelectOption from "./components/ui/MultiSelectOption";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function App() {
  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
  };

  return (
    <MultiSelectOption
      id="multi-select"
      name="example"
      options={options}
      selectedOptions={[]}
      onChange={handleChange}
    />
  );
}
```

### Props

| Prop Name         | Type       | Default     | Description                                                                                                          | Required |
| ----------------- | ---------- | ----------- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| `id`              | `string`   | `null`      | The unique identifier for the select component.                                                                      | No       |
| `name`            | `string`   | `""`        | The name attribute for the select component.                                                                         | No       |
| `options`         | `Array`    | `[]`        | An array of options for the select menu. Each option should have `value` and `label` properties.                     | No       |
| `selectedOptions` | `Array`    | `[]`        | An array of currently selected options. Each option should have `value` and `label` properties.                      | No       |
| `onChange`        | `function` | `null`      | Callback function triggered when options are selected or deselected. Receives the updated selections as an argument. | No       |
| `className`       | `string`   | `""`        | Additional custom classes for the select component.                                                                  | No       |
| `size`            | `string`   | `"medium"`  | The size of the select component. Options: `"small"`, `"medium"`, `"large"`.                                         | No       |
| `variant`         | `string`   | `"primary"` | The style variant of the select component. Options: `"primary"`, `"secondary"`, `"danger"`.                          | No       |
| `status`          | `string`   | `"closed"`  | The open/closed status of the select component. Options: `"open"`, `"closed"`.                                       | No       |

### Example

```jsx
<MultiSelectOption
  id="multi-select"
  name="example"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]}
  selectedOptions={[{ value: "option1", label: "Option 1" }]}
  onChange={(selectedOptions) => console.log(selectedOptions)}
  size="large"
  variant="secondary"
/>
```

This will render a large, secondary-styled multi-select dropdown where users can select multiple options.

## License

This project is licensed under the MIT License.
