/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'Poppins': ['"Poppins"', "sans-serif"],
      'Schoolbell': ['"Schoolbell"', "sans-serif"],

    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    }
}