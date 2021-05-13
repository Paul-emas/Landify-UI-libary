const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    colors: {
      brand: {
        DEFAULT: '#8C30F5',
        light: '#F1E4FF',
        dark: '#8c30f580'
      },
      white: '#ffffff',
      gray: colors.trueGray,
      turquoise: '#75E3EA',
    },
    extend: {
      width: {
        120: '480px',
      },
      height: {
        bg: '906px',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-10': '-10',
      }
    }
  },
  variants: {
    extend: {
       backgroundColor: ['active'],
    },
  },
  plugins: [],
}