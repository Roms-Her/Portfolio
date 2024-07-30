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
        backgroundColorBlack: "#05077b",
        backgroundColorWhite: "#224bbb",
        solid: "#0090FF",
        accessible: "#f1f4fd",
        solidBlack: "#0d1e6d"
      },

      backgroundImage: {
        'roms': "url('/roms.png')",
      },
      boxShadow: {
        'contrast': '0 -10px 40px 10px rgba(0,0,0,0.20)',
      }
    },
  },
  plugins: [require("daisyui")],
};
