/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5DC4BB",
        primaryDark: "#387670",
        primaryLighten: "#7dd0c9",
        primaryLight: "#9edcd6",
        primaryLighter: "#eff9f8",
        grey: "#555",
        darkGrey: "#333",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
