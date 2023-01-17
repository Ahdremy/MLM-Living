/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },

    extend: {
      colors: {
        Main: '#F4511E',
        Secondary: '#011622',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },

      backgroundImage: {
        'hero': "url('./images/bg-Hero.png')",
      },
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    // ...
  ],
}
