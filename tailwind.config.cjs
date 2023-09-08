/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: {
    extend: {
      backgroundColor: {
        'black': '#010101',
        'grey': '#161616',
        'transp': '#515151'
      },
      boxShadow: {
        'shadow-navbar': '0 0 10px #0b0e2b',
        'card': '0 0 5px #d6d6d6',
        'detail': '0 0 5px #989898',
      },
      borderColor: {
        'gray': '#d6d6d6'
      },
      width: {
        'side': '12vw'
      },
      height: {
        'nav': '10vh',
        'card': '45vh',
        'footer': '30vh',
      },
      textColor: {
        'category': '#00a650'
      },
      fontFamily: {
        'oswald': 'Oswald'
      },
      letterSpacing: {
        'subTitles': '2px',
        'frase': '6px'
      },
      dropShadow: {
        'drop': '0 0 4px #000'
      },

    },
  },
  plugins: [],
}

