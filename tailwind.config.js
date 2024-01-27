/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_color: '#041e42', 
      },
      fontFamily: {
        'sans-condensed': ['"Encode Sans Condensed"', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
