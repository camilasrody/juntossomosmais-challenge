// load default theme settings
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      fontFamily: {
        mono: ['PT Mono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {},
  plugins: []
}
