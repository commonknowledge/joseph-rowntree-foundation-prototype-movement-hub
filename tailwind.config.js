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
    fontFamily: {
      marquis: '"MarquisWeb", "HelveticaNeue", "Helvetica Neue", "Arial", "Helvetica", sans-serif'
    },
    fontSize: {
      // 'heading-mobile': ['2.2vw', {
      //   letterSpacing: 0,
      //   lineHeight: '1.25',
      // }],
      'xl': ['4.8vw', {
        letterSpacing: '-0.0025em',
        lineHeight: 1.15,
      }],
      // Or with a default line-height as well
      // 'body-mobile': ['16px', {
      //   letterSpacing: 0,
      //   lineHeight: '24px',
      // }],
      'body': ['20px', {
        lineHeight: '28px',
      }],
      'detail-mobile': ['14px', {
        lineHeight: '18px',
      }],
      'detail': ['15px', {
        lineHeight: '20px',
      }],
      'interface': ['13px', {
        lineHeight: '16px',
        letterSpacing: '0.05em',
      }],
    },
    extend: {
      colors: {
        text: "#222222",
        border: "#2F3130",
        borderTable: "#b1b4b6",
        gray: '#E1E1E1',
        pageWhite: '#FAFAFA',
        green: "#BEC4A0",
        greenLight: "#D6DAC6",
        greenDark: "#929874",
        yellow: "#F5D800",
        yellowLight: "#F7F1C1",
        red: "#C94E3E",
        redLight: "#F2B7B1",
        blue: "#2C2264",
        blueLight: "#DAD6F0",
        blueBright: "#2F18B4",
        transparent: 'transparent'
      },
      spacing: {
        0: '0px',
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '40px',
        6: '60px',
        7: '80px',
        '40p': '40%',
        '60p': '60%',
      },
      minHeight: {
        '75vh': '75vh',
        'none': 'none'
      },
      maxWidth: {
        headline: '20em',
        body: '40em',
        detail: '18em',
        interface: '23em'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}