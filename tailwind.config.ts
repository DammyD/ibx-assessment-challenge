/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:["Roboto", "Rubik", "sans-serif"],
      },
      colors: {
        dark: {
          100: "#080808",
          75: "#373737",
          50:"#080808",
          25:"#080808",
        },
        purple: {
          300: "#e371e0",
          200: "#faf7fe",
          100: "#9E5CF2",          
          75: "#b685f5",
          50: "#cfaef9",
          25: "#f5f2fa",
        },
        orange: {
          100: "#080808",
          75: "#080808",
          50: "#fff5f5",
        },
        gray: {
          100:"#f5f5f5",
          75: "#fafafa",
          50: "#faf7fe", 
          25: "#9a9a9a",   
        },
        green: {
          100: "#ebfaf5",
        }
       
      },
    },
    backgroundImage: {

    }
  },
  plugins: [],
}
