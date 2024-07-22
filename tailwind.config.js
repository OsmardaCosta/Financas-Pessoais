/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ ('Poppins'), 'sans-serif'],
        sans: ['sans-serif']
      },
      colors: {
        secundaryColor: '#8a2be2'
      },
      textShadow:{
        text: '0px 0px 1px 1px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        'home': 'url(./src/components/Pages/Home/Assets/header.jpg)'
      },
      backgroundColor: {
        'overlay': 'rgba(0,0,0,0.4)'
      },
      keyframes: {
        typing: {
          'from': { width: '0%' },
          'to': { width: '100%' }
        },
        animationParagraphs: {
          'from': { transform: 'translateY(40px)' },
          'to': { transform: 'translateY(0)' }
        },
        opacityMenu: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        }
      },
      animation: {
        typing: 'typing 3s alternate',
        animationParagraphs : 'animationParagraphs 1s',
        opacityMenu: 'opacityMenu .3s'
      },
    },
  },
  plugins: [],
}