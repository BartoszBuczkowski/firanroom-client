module.exports = {
   purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'media',
   theme: {
      screens: {
         sm: '480px',
         md: '768px',
         lg: '976px',
         xl: '1440px',
      },
      colors: {
         red: 'red',
         green: 'green',
         white: '#fff',
         black: '#000',
         gray: {
            20: '#fafafa',
            50: '#efefef',
            100: '#e0e0e0',
            200: '#d0d0d0',
            700: '#6b6b6b',
            800: '#232323',
            900: '#171717',
         },
      },
      fontSize: {
         '2xs': '.6rem',
         xs: '.75rem',
         sm: '.875rem',
         tiny: '.875rem',
         base: '1rem',
         lg: '1.125rem',
         xl: '1.25rem',
         '2xl': '1.5rem',
         '3xl': '1.875rem',
         '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
         '7xl': '5rem',
      },
      fontFamily: {
         sans: ['Ubuntu', 'sans-serif'],
         // sans: ['Graphik', 'sans-serif'],
         serif: ['Merriweather', 'serif'],
      },
      extend: {
         spacing: {
            128: '32rem',
            144: '36rem',
         },
         borderRadius: {
            '4xl': '2rem',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
