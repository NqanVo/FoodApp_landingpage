/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["../*.html"],
  content: ["../*.html","../**/**/*.js"],
  theme: {
    extend: {
      spacing: {
        '35': '35px',
      },
      colors: {
        'primary': '#27AE60',
        'minor' : '#B4F2B3',
      }
    },
  },
  plugins: [],
}
