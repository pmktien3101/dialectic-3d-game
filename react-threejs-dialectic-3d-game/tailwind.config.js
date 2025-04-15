/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
        },
        fuchsia: {
          300: '#F0ABFC',
          400: '#E879F9',
          500: '#D946EF',
          900: '#701A75',
        },
        purple: {
          500: '#A855F7',
          900: '#581C87',
        },
        indigo: {
          950: '#1E1B4B',
        },
      },
    },
  },
  plugins: [],
} 