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

## License

This project is licensed under the MIT License.
