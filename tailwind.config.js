/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          50: '#e0d3b8',
          100: '#c4b399',
          200: '#8b7355',
          300: '#695940',
          400: '#2a2520',
          500: '#1a1a1a',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}