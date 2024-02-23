/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
    // height: {
    //   banner: 'calc(100vh - 80px)',
    // },
  },
  plugins: [],
};
