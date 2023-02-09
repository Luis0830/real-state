/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'd-blue': '#00204a',
      'd-red': '#ad2831',
    },
    fontFamily: {
      'poppins': ['Poppins',  'sans-serif'],
  },
  },
  plugins: [],
}
