/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    letterSpacing: {
        tightest: '-.05em',
        tighter: '-0.025em',
        tight: '0',
        normal: '0.025em',
        wide: '0.075em',
        wider: '0.1em',
        widest: '0.125em',
    },
    extend: {
      fontFamily: {
        sans: ['Futura Std'],
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require('daisyui'),
  ],
  daisyui: {
    themes: ["pastel", "dracula"],
  },
}

