/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors:{
        backgroundColor: '#141726',
        solid: "#0090FF",
        accessible: "#f1f4fd",
        backgroundInfo: "#6c22c3b3"
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

      screens: {
        'sm': '640px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'ms': {'max': '1280px'},
        'small': {'max': '640px'}
      },
      
      borderRadius: {
        test: '5rem'
      }
    },
  },
  plugins: [require("daisyui")],
}
