/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'd-blue': '#00204a',
      'd-red': '#ad2831',
      'white': '#fff',
      'bggrey': 'rgb(229 231 235)',
      'navi': '#1E2952',
      'naviblue': '#2c2c6c',
      'lineblue':'#4db5ff',
      'textarea': '#ADD8E6',
      'hoveline': '#00CCFF',
      'arrows'  :  '#000000',
    },
    fontFamily: {
      'poppins': ['Poppins',  'sans-serif'],
  },
  borderRadius: {
    curves: '12rem'
  },
  screens: {
    // 'sm': {'max': '460px'},
    'sm': {'max': '1024px'},
    'mid': {'min': '1025px'},
      'md': {'min': '1600px'},
      'xl': {'min': '1536px'},
  },
  },
  plugins: [],
}
