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
      borderWidth: {
        radio: '0.35em',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      color: ['focus', 'focus-within'],
      backgroundColor: ['disabled'],
      border: ['focus-within'],
      fontSize: ['focus-within'],
      lineHeight: ['focus-within'],
      padding: ['focus-within'],
      opacity: ['disabled'],
      placeholderOpacity: ['focus'],
      transitionProperty: ['focus', 'focus-within'],
    },
  },
  plugins: [],
}
