/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This should cover all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Make sure daisyui is added here
};
