/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#2CBCE9",
        red:"#DC4492",
        yellow:"#fdcc49",
        grey:"#ededed",
        "deep-blue":'#010026',
        "opaque-black":'rgba(0,0,0,0.35)',
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'mountain': "url('/mountains.png')",
        'stars': "url('/stars.png')",
        'planets': "url('/planets.png')",
        'sun': "url('/sun.png')",
      }
    },
  },
  plugins: [],
}