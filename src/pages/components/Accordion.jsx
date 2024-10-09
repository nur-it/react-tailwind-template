import React from "react";
import Accordion from "../../components/ui/Accordion";
import ComponentLayoutProvider from "../../layouts/ComponentLayoutProvider";

const AccordionPage = () => {
  const markdown = `
  ### Accordion
  
  The Accordion component is a versatile and reusable UI element built using React and Tailwind CSS, with \`class-variance-authority (cva)\` for managing variants. It supports dynamic rendering, custom icons, and customizable classes.
  
  #### Usage
  
  \`\`\`jsx
  import Accordion from "./components/ui/Accordion";
  
  function App() {
    return (
      <div>
        <Accordion 
          question="What is React?" 
          answer="React is a JavaScript library for building user interfaces."
          size="medium"
          variant="default"
          customIcon={true}
          Icon={MyIconComponent}
        />
      </div>
    );
  }
  \`\`\`
  
  ### Dynamic Mode Example
  
  \`\`\`jsx
  import Accordion from "./components/ui/Accordion";
  
  function App() {
    const data = [
      { id: '1', question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
      { id: '2', question: 'What is Next.js?', answer: 'Next.js is a React framework for server-side rendering.' }
    ];
  
    return (
      <div>
        <Accordion 
          dynamic={true} 
          data={data}
          size="large"
          variant="default"
          enableIndex={true}
          customIcon={false}
        />
      </div>
    );
  }
  \`\`\`
  
  ### Props
  
  | Prop Name            | Type                   | Default      | Description                                                                  | Required |
  | -------------------- | ---------------------- | ------------ | ---------------------------------------------------------------------------- | -------- |
  | \`question\`          | \`string\`               | -            | The question text for the static accordion mode.                             | No       |
  | \`answer\`            | \`string\`               | -            | The answer text for the static accordion mode.                               | No       |
  | \`dynamic\`           | \`boolean\`              | \`false\`     | If true, enables dynamic mode for rendering multiple accordion items.         | No       |
  | \`data\`              | \`array\`                | -            | Array of objects for dynamic mode with \`id\`, \`question\`, and \`answer\`.   | Yes, if dynamic |
  | \`size\`              | \`string\`               | \`"medium"\`  | The size of the accordion. Options: \`"small"\`, \`"medium"\`, \`"large"\`.    | No       |
  | \`variant\`           | \`string\`               | \`"default"\` | The accordion variant. Options: \`"default"\`, \`"secondary"\`, \`"disabled"\`. | No       |
  | \`disabled\`          | \`boolean\`              | \`false\`     | If true, disables the accordion and applies appropriate styles.               | No       |
  | \`className\`         | \`string\`               | -            | Custom class name to override or extend accordion styles.                     | No       |
  | \`questionClassName\` | \`string\`               | -            | Custom class name for styling the question text.                              | No       |
  | \`ansClassName\`      | \`string\`               | -            | Custom class name for styling the answer text.                                | No       |
  | \`listClassName\`     | \`string\`               | -            | Custom class name for styling the list wrapper in dynamic mode.               | No       |
  | \`enableIndex\`       | \`boolean\`              | \`true\`      | Whether to display index numbers before each question in dynamic mode.        | No       |
  | \`customIcon\`        | \`boolean\`              | \`false\`     | Whether to use a custom icon or the default one (FaAngleDown).                | No       |
  | \`Icon\`              | \`React.ComponentType\`  | -            | A React component used as an icon next to the question (if \`customIcon\` is true). | No       |
  | \`...props\`          | \`object\`               | -            | Additional props to pass to the accordion \`<li>\` element.                   | No       |
  `;
  

  // Code snippets for live preview
  const codeSnippets = [
    // `<Button variant="secondary" size="large" loading={true}>Save Changes</Button>`,
    `<Accordion question ={"What is React?"} answer={"React is a JavaScript library for building user interfaces."}  />`,
    `   <Accordion 
    question ={"What is React?"}  
    answer={"React is a JavaScript library for building user interfaces."}  
    dynamic={true} 
    variant='secondary'
    listClassName="gap-y-0"
    data={
      accordion=[{ id: '1',  question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },{ id: '2', question: 'What is Next.js?', answer: 'Next.js is a React framework for server-side rendering.' },{ id: '3', question: 'What is TypeScript?', answer: 'TypeScript is a superset of JavaScript that adds static typing to the language.' }]
      }
      />`,
      `<Accordion question ={"What is React?"} answer={"React is a JavaScript library for building user interfaces."} customIcon={true} Icon={'MyIconComponent'} />`,
  ];

  return (
    <ComponentLayoutProvider
      markdown={markdown}
      codeSnippets={codeSnippets}
      componentScope={{Accordion}} // Make sure to include all components used in the snippets
    />
  );
};

export default AccordionPage;
