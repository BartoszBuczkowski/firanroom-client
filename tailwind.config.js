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
         red: {
            50: '#f6cacc',
            100: '#f1a7a9',
            200: '#ec8385',
            300: '#e66063',
            400: '#e35053',
            500: '#dd2c2f',
            600: '#d02224',
            700: '#bd1f21',
            800: '#ac1c1e',
            900: '#9c191b',
         },
         green: {
            50: '#f9fbf5',
            100: '#f6f9e1',
            200: '#ebf3ab',
            300: '#d9e768',
            400: '#a8cf28',
            500: '#71b40e',
            600: '#4f9308',
            700: '#40720b',
            800: '#33550f',
            900: '#284210',
         },
         blue: {
            50: '#f6fbfd',
            100: '#e7f8fd',
            200: '#c2e8fb',
            300: '#98d2fb',
            400: '#5fa7fa',
            500: '#2f7af9',
            600: '#0963ef',
            700: '#1b43dd',
            800: '#1733aa',
            900: '#132a82',
         },
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
