/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mistyrose: "#f6dada",
        wheat: "#f0e1bb",
        goldenrod: "#f0ad1a",
        lightcyan: "#d3e9e2",
        gray: "#131313",
        black: "#000",
        lightslategray: "#8f94a3",
        darkslateblue: "#5c2682",
        gray: {
          100: "#fcfcfc",
          200: "#8e949a",
          300: "#131313",
        },
        orange: "#fab613",
        whitesmoke: "#f5efef",
        mediumblue: "#2c14dd",
        white: "#fff",
        ghostwhite: "#f2f1fe",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    borderRadius: {
      "81xl": "100px",
      "8xs": "5px",
    },
    fontSize: {
      inherit: "inherit",
      xs: "0.75rem",
      sm: "0.88rem",
      "5xs": "0.5rem",
      "4xs": "0.56rem",
      base: "1rem",
      "3xs": "0.63rem",
    },
  },
  plugins: [],
};
