/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#e67e22",
        primary: "#5DC4BB",
        // primaryDark: "#cf711f",
        primaryDark: "#387670",
        // primaryLighten: "#f8d8bd",
        primaryLighten: "#7dd0c9",
        // primaryLight: "#fae5d3",
        primaryLight: "#9edcd6",
        // primaryLighter: "#fdf2e9",
        primaryLighter: "#eff9f8",
        grey: "#555",
        darkGrey: "#333",
      },
    },
  },
  plugins: [],
};
