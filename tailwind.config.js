/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
    colors: {
      //gradient scissors
      'yellow': '#ec9e0e',
      'light-yellow': '#eca922',

      // Paper gradient
      'blue': '#4865f4',
      'light-blue': '#5671f5',

      // Rock Gradient
      'pink': '#dc2e4e',
      'light': '#dd405d',

      // Lizard gradient
      'opac-pink': '#dd405d',
      'purple': '#8c5de5',

      // Cyan gradien
      'cyan': '#40b9ce',
      'light-cyan': '#52bed1',

      //Radian gradient
      'dark-blue':'#1f3756',
      'dark-purple':'#141539',

      'dark-text': '#3b4363',
      'score-text': '#2a46c0',
      'header-outline': '#606e85',
      'white': '#ffffff'

    }
  },
  plugins: [],
}
