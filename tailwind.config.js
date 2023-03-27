/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// to remove the build warning, can be remove in the future
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "giants-orange": "#FA611E",
        "oxford-blue": "#171F32",
        "rich-black": "#101726",
        seasalt: "#FAFAFA",
        silver: "#A8A4A4",
        ...colors,
      }
    },
  },
  plugins: [],
}
