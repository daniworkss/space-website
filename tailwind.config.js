/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./mainfiles/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        mobile :"375px",
        tablet :"768px",
        laptop: "1200px",
        desktop: "1400px",
      },
      colors:{
        dark: "hsl(230 , 35%, 7%)",
        purple: "hsl(231 , 77%, 90%)",
        ligray: "#50535b"
      } 

    },
  },
  plugins: [],
}

