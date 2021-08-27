// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      fontSize: {
        0: '0px',
      },
      lineHeight: {
        // like padding
        12: '3rem',
        16: '4rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      fontSize: ['focus-within'],
      padding: ['focus-within'],
      lineHeight: ['focus-within'],
      color: ['focus', 'focus-within'],
      placeholderOpacity: ['focus'],
      transitionProperty: ['focus', 'focus-within'],
    },
  },
  plugins: [],
}
