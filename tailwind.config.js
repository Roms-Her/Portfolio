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
    },
  },
  plugins: [require("daisyui")],
};
