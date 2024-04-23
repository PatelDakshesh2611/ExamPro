/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': {'max': '499px'},
        'md': {'min': '500px', 'max': '900px'},
        'lg': {'min': '901px'},
      }
    },
  },
  plugins: [],
}

