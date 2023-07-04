/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    colors: {
      'd-blue': '#00204a',
      'd-red': '#ad2831',
      'white': '#fff',
      'bggrey': 'rgb(229 231 235)',
      'textgrey': '#3d405b',
      'navi': '#1E2952',
      'naviblue': '#2c2c6c',
      'lineblue':'#4db5ff',
      'textarea': '#ADD8E6',
      'hoveline': '#00CCFF',
      'arrows'  :  '#000000',
      'green'   : '#38E54D',
      'blugray':'#F1F5F9',
      'colorbox':'#1EB3C8',
      'blurgrey': '#64748B',
      'inputline':'#94A3B8',
      'inputhover': '#71717A',
      'textgray': '#334155',
      'black': '#00000',
      'newblue': '#0B2EAA',
      'newtext': '#023F52'
      


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
