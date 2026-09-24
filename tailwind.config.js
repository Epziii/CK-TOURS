/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ceylon: {
          950: '#041611',
          900: '#07241C',
          850: '#0B2E24',
          800: '#0F3A2E',
          700: '#175141',
          600: '#1F6A56',
          500: '#2A856D',
          400: '#3D9F84',
          300: '#62BAA2',
          200: '#94D4C2',
          100: '#CBEBE1',
          50: '#F0F9F6',
        },
        gold: {
          900: '#7A5210',
          800: '#9A6714',
          700: '#B87B19',
          600: '#D59220',
          500: '#E4A22E',
          400: '#EEB550',
          300: '#F6CD7D',
          200: '#FAE1AC',
          100: '#FDF2DC',
          50: '#FEF9EE',
        },
        warm: {
          50: '#FBF9F5',
          100: '#F6F2EB',
          200: '#ECE4D7',
          300: '#DCD0BE',
          400: '#BDB09D',
          500: '#958876',
          600: '#726757',
          700: '#544B3F',
          800: '#39332A',
          900: '#201C17',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(12, 43, 34, 0.06)',
        'luxury': '0 20px 40px -15px rgba(12, 43, 34, 0.12)',
        'elevated': '0 25px 50px -12px rgba(7, 36, 28, 0.25)',
      }
    },
  },
  plugins: [],
}
