/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFF9F3",
        secondary: "#F3ECE4",
        main: "#AB3436",
        boxGrey: "#EFEEEE",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    backgroundImage: {
      sol: "url('/assets/sol.png')",
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
