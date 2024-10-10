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
        backgroundLigth: "#f0f0f0",
        backgroundAll: "#f9f9f9",
        
      },
      minHeight: {
        'home': 'calc(100vh - 80px)',  // Définir une classe personnalisée
      },
      backgroundImage: {
        'roms': "url('/roms.png')",
        'backRetroGray': "url('/back/degrade.png')",
        'line': "url('/back/line.png')",
      },
      boxShadow: {
        'contrast': '0 -10px 40px 10px rgba(0,0,0,0.20)',
      },

    },
  },
  plugins: [require("daisyui")],
};