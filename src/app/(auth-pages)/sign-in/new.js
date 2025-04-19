// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Make sure this line specifically covers your page file:
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Make sure this line covers your imported components:
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // Add other directories if needed (e.g., './src/pages/**/*.{js,ts,jsx,tsx,mdx}' if you also use the pages router)
  ],
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [require('tailwindcss-animate')], // Example plugin, ensure yours are listed
};
