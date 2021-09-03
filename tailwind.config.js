module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: "2px",
        6: "6px",
        10: "10px",
      },
      width: {
        100: "32rem",
      },
      colors: {
        text: "#0F294E",
      },
      spacing: {
        100: "30rem",
        68: "17rem",
      },
      fontFamily: {
        bal: ["Balsamiq Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
