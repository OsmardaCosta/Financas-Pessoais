/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home' : 'url(./src/components/Pages/Home/Assets/header.jpg)'
      },
      backgroundColor: {
        'overlay' : 'rgba(0,0,0,0.4)'
      }
    },
  },
  plugins: [],
}