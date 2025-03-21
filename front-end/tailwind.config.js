/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violet-custom': '#BF2188',
        'purple-custom': '#F2005F',
        'orange-custom': '#FF4600',
      }
    },
  },
  plugins: [],
}