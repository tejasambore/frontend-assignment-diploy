/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://t3.ftcdn.net/jpg/05/35/13/82/240_F_535138284_n7fRxdYJIMSApeYDfxR3gT4pCRXb36GY.jpg')"
      }
    },
  },
  plugins: [],
}

