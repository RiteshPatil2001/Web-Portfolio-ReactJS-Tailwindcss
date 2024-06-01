/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'gold': '#FFD700',
      },
      screens: {
      'phone': {'min': '300px', 'max': '639px'},
      // => @media (min-width: 300px and max-width: 639px) { ... }

      'tablet': {'min': '640px', 'max': '1023px'},
      // => @media (min-width: 640px and max-width: 1023px) { ... }

      'laptop': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1280px', 'max': '2000px'},
      // => @media (min-width: 1280px and max-width: 1700px) { ... }
      },
    },
  },
  plugins: [],
}