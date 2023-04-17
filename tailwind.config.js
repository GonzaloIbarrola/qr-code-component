/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue' : '#2C7DFA',
        'Blue-shade' : '#3685FF',
        'Dark-navy' : '#1F314F',
        'Grey' : '#7D889E',
        'Light-grey' : '#D5E1EF',
        'White' : '#FFFFFF',
      },
      fontFamily: {
        'Outfit' : ['Outfit'],
      },
      fontSize: {
        'Heading' : ['22px',{
          lineHeight: '28px',
          fontWeight: '700'
        }],
        'Body' : ['15px',{
          lineHeight: '19px',
          fontWeight: '400'
        }]
      },
      width: {
        'card' : '320px'
      },
      height: {
        'card' : '497px'
      },
      boxShadow: {
        'card': '0px 25px 25px 0px #0000000C',
      },
    },
  },
  plugins: [],
}

