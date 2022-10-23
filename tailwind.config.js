/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
    "./routes/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily:{
      "rob" : ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
