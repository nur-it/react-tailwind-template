/** @type {import('prettier').RequiredOptions} */

export default {
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 80,
  useTabs: true,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  tailwindConfig: './tailwind.config.js',
  plugins: ['prettier-plugin-tailwindcss'],
}
