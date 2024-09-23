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
        solid: "#6a5fff",
        solidContrast: "#695eff",
        newBlack: "#010412",
        backgroundLigth: "#eae8ff",
      
      },

      backgroundImage: {
        'roms': "url('/roms.png')",
        'backgroundDegrade': "url('/back/Degrade.png')",
        'backgroundLateralDegrade': "url('/back/lateralDegrade.png')",
      },
      boxShadow: {
        'contrast': '0 -10px 40px 10px rgba(0,0,0,0.20)',
      }
    },
  },
  plugins: [require("daisyui")],
};