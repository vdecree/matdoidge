const tailwindCSSVariables = require('@bly-th/tailwind-css-variables');
const tailwindCustomUtilities = require('@bly-th/tailwind-custom-utilities');

module.exports = {
  content: ["./src/**/*.njk"],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    extend: {
      dropShadow: {
        'bossmode': '0 25px 25px rgba(0, 0, 0, 1)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.80)',
            '0 45px 65px rgba(0, 0, 0, 0.80)'
        ]
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        realistic: 'cubic-bezier(.16, 1, .3, 1)',
      },
    },
    colors: {
      primary: '#B56E46',
      secondary: '#054541',
      light: '#D9D9D9',
      dark: '#070707',
      darkgreen: '#003837',
      white: '#ffffff',
      notice: '#d65f3d',
    },
    fontSize: {
      ///* https://utopia.fyi/type/calculator?c=320,16,1.125,1600,18,1.25,10,0,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */ 
      200: 'clamp(1.00rem, calc(0.97rem + 0.16vw), 1.13rem)', //0
      300: 'clamp(1.13rem, calc(1.05rem + 0.35vw), 1.41rem)',
      400: 'clamp(1.27rem, calc(1.14rem + 0.62vw), 1.76rem)',
      500: 'clamp(1.42rem, calc(1.23rem + 0.97vw), 2.20rem)',
      600: 'clamp(1.60rem, calc(1.32rem + 1.43vw), 2.75rem)',
      700: 'clamp(1.80rem, calc(1.39rem + 2.04vw), 3.43rem)',
      800: 'clamp(2.03rem, calc(1.46rem + 2.83vw), 4.29rem)',
      900: 'clamp(2.28rem, calc(1.51rem + 3.85vw), 5.36rem)',
      1000: 'clamp(2.57rem, calc(1.53rem + 5.18vw), 6.71rem)',
      1100: 'clamp(2.89rem, calc(1.51rem + 6.87vw), 8.38rem)',
      1200: 'clamp(3.25rem, calc(1.44rem + 9.04vw), 10.48rem)', //10
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1378px',
      '2xl': '1536px'
    },
    spacing: {
      // https://utopia.fyi/space/calculator/?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l
      0: 0,
      100: 'clamp(0.19rem, calc(0.11rem + 0.37vw), 0.38rem)',
      200: 'clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)',
      300: 'clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)',
      400: 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)',
      500: 'clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)',
      600: 'clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)',
      700: 'clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)',
      800: 'clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)',
      900: 'clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)',
      1000: 'clamp(7.88rem, calc(6.85rem + 5.12vw), 10.50rem)',
    }
  },
  plugins: [
    // Generates custom property values from tailwind config
    tailwindCSSVariables({
      colors: 'color',
      spacing: 'size',
      fontSize: 'text',
      fontFamily: 'font',
      borderRadius: 'rounded',
      fontWeight: 'font',
      lineHeight: 'leading',
    }),
    tailwindCustomUtilities({
      spacing: {
        name: 'flow-space',
        property: '--flow-space',
      },
    })
  ]
};