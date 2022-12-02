/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  darkMode: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '380px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}