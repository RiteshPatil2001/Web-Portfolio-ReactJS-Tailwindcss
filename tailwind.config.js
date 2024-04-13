/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        gold: '#FFD700', // Adds a new `font-display` class
      },
      
    },
  },
  plugins: [],
}