/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'loopscale-blue': '#1718FE',
        'loopscale-blue-dark': '#455EEB',
        'gray-text': '#615F5F',
        'gray-light': '#F6F6F6',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
