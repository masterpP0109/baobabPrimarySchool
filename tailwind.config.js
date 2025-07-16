/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        aksara: ['"Aksara Bali Galang"', 'sans-serif'],
        aleta: ['"Aleta"', 'sans-serif'],
      },
      letterSpacing: {
        'wide-20': '0.20rem',
        'wide-30': '0.30rem',
        'wide-50': '0.50rem',
        'wide-70': '0.70rem', // ≈ 15% of font-size
      },
      animation:{
        'spin-slow': 'spin 4s linear infinite',
        shine: 'shine 2s linear infinite',
      },
      transformOrigin: {
        'bottom-center': '50% 100%',
      },
      keyframes: {
        spinAround: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {transform: 'rotate(360deg)'},
        },
        shine: {
          '0%':{left:'-100%'},
           '100%':{left:'100%'},
        }
      },
    },
  },
  plugins: [],
}



