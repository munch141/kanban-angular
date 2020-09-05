module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        rose: "#FFE3E0",
        pink: "#FBC3BC",
        tangerine: "#F7A399",
        salmon: "#F38375",
        opal: "#EF6351",
      },
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
  },
  variants: {},
  plugins: [],
};
