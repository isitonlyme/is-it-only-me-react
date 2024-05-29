/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
