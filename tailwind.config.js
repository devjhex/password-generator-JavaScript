/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./view/view.js",
  ],
  theme: {
    extend: {
      animation:{
        'spin-once':'spin .5s linear 1',
      }
    },
  },
  plugins: [],
}

