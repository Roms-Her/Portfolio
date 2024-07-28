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
        backgroundColor: "#141726",
        solid: "#0090FF",
        accessible: "#f1f4fd",
        backgroundInfo: "#6c22c3b3",
      },

      fontSize: {
        sm: "0.8em",
        base: "1em0",
        base2: "1.1em",
        xl: "1.2em",
        '2xl': "1.5em",
        '3xl': "1.8em",
        '35xl': "2em",
        '4xl': "2.5em",
        max: "3em"
      },
    },
  },
  plugins: [require("daisyui")],
};
