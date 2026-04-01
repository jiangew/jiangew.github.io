/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Minimalist tech theme colors
        background: '#1E1E2F', // Dark background
        text: '#FFFFFF', // White text
        accent: {
          neonPink: '#FF007F',
          neonGreen: '#00FF7F',
          neonBlue: '#00BFFF',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};