/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@radix-ui/themes/**/*.{js,ts,jsx,tsx}', // support for Radix Themes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
