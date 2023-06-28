/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      black: "#0b132a",
      red: "#f53838",
      red2: "#2fab73",
      blue: "#0b132a",
      white: "#f8f8f8",
      white2: "#fff",
      grey: "#eeeff2",
      grey2: "#FFECEC",
      border: "#DDDDDD",
      border2: "#f53838",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}