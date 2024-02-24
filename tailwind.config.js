/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans',serif",
      },
    },
    colors: {
      primary: "#37517E",
      white: "white",
      black: "black",
      action: "#47B2E4",
    },
  },
  plugins: [],
};
