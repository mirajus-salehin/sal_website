module.exports = {
    purge: {
      content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      fontFamily:{
        sans:['Raleway', 'sans-serif']
      },
      extend: {
        colors: {
          "brand-green": '#35C75A',
          "brand-dark": '#263238',
          "brand-red":"#DB2545",
          "brand-sky":"#6EC2B7",
          "brand-black": "#204E52",
          "brand-green-lighter": "#86BAB6",
          'brand': {
            '50': '#f3faf8',
            '100': '#d7f0ec',
            '200': '#afe0d8',
            '300': '#6ec2b7',
            '400': '#54ada4',
            '500': '#3b918a',
            '600': '#2d7470',
            '700': '#275e5b',
            '800': '#234c4a',
            '900': '#21403f',
            '950': '#0e2525',
        },
        
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
    ],
  }