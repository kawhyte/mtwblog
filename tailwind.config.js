const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        fancy: ['Playfair Display'],
         //'Montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
        // 'playfair-display': ['Playfair Display', ...defaultTheme.fontFamily.sans],
        //sans: [ 'Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        rootBG:'#FAFAB',
        accent:'#FB6E3B',
        darkblue:'#05073C'

      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
   
  ],

}
