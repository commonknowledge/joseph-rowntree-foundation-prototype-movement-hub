/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
  purge: [
    './app/**/*.html',
    './app/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        marquis: '"MarquisWeb", "HelveticaNeue", "Helvetica Neue", "Arial", "Helvetica", sans-serif'
      },
      colors: {
        text: "#222222",
        border: "#2F3130",
        green: "#BEC4A0",
        greenLight: "#D6DAC6",
        yellow: "#F5D800",
        yellowLight: "#F7F1C1",
        red: "#C94E3E",
        redLight: "#F2B7B1",
        blue: "#2C2264",
        blueLight: "#DAD6F0",
      }
    },
  },
  variants: {},
  plugins: [],
}