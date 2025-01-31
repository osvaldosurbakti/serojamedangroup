/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,html,js,css,tsx}'],
  theme: {
    extend: {
      boxShadow:{
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}