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
         white: '#fff',
         black: '#000',
         gray: {
            50: '#efefef',
            100: '#e0e0e0',
            200: '#d0d0d0',
            700: '#6b6b6b',
            800: '#232323',
            900: '#171717',
         },
      },
      fontFamily: {
         sans: ['Graphik', 'sans-serif'],
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
