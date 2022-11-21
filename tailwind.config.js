/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      colors: {
        'dark-header': '#131313',
        'white-header': '#999999',
        'white-hover': '#E5E5E5',
        'dark-hover': '#4c4c4c',
      },
      spacing: {
        '128': '22rem',
        '256': '32rem'
      }
    },
  },
  plugins: [],
}
