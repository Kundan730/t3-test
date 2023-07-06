/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
