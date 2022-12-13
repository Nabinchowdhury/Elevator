/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '5000': '5000ms',
        '10000': '10000ms',
      }
    },
  },
  plugins: [],
}
