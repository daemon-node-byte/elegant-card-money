/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
        blue: {
          100: '#EBF8FF',
          200: '#D1EEFC',
          300: '#A7D8F0',
          400: '#7CC1E4',
          500: '#55AAD4',
          600: '#3994C1',
          700: '#2D83AE',
          800: '#1D6F98',
          900: '#166086',
          950: '#0B4F71',
        },
        green: {
          100: '#E3F9E5',
          200: '#C1EAC5',
          300: '#A3D9A5',
          400: '#7BC47F',
          500: '#57AE5B',
          600: '#3F9142',
          700: '#2F8132',
          800: '#207227',
          900: '#0E5814',
          950: '#05400A',
        },
      },
      neutral: {

        grey: {
          100: '#F5F7FA',
          200: '#E4E7EB',
          300: '#CBD2D9',
          400: '#9AA5B1',
          500: '#7B8794',
          600: '#616E7C',
          700: '#52606D',
          800: '#3E4C59',
          900: '#323F4B',
          950: '#1F2933',
        },
      },
      support: {
        purple: {
          100: '#EAE2F8',
          200: '#CFBCF2',
          300: '#A081D9',
          400: '#8662C7',
          500: '#724BB7',
          600: '#653CAD',
          700: '#51279B',
          800: '#421987',
          900: '#34126F',
          950: '#240754',
        },
        red: {
          100: '#FFEEEE',
          200: '#FACDCD',
          300: '#F29B9B',
          400: '#E66A6A',
          500: '#D64545',
          600: '#BA2525',
          700: '#A61B1B',
          800: '#911111',
          900: '#780A0A',
          950: '#610404',
        },
        yellow: {
          100: '#FFFAEB',
          200: '#FCEFC7',
          300: '#F8E3A3',
          400: '#F9DA8B',
          500: '#F7D070',
          600: '#E9B949',
          700: '#C99A2E',
          800: '#A27C1A',
          900: '#7C5E10',
          950: '#513C06',
        },
      },
      },
    },
  },
  plugins: [],
}

