/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customPalette: {
          dark: '#343D46',
          mediumDark: '#4F5B66',
          medium: '#65737E',
          light: '#A7ADBA',
          lightest: '#C0C5CE',
          yelllow:'#f6d55c'
        }
      }
    },
  },
  plugins: [],
}