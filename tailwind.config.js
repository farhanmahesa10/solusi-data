/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans',serif",
      },
      boxShadow: {
        btn: "2px 2px 0px 0px #47B2E4",
        "btn-hover": "4px 5px 0px 0px #47B2E4",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "2200px",
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
