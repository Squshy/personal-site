module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-self-photo": "url(../public/images/main-self-photo.jpg)",
      }),
      fontFamily: {
        raleway: ["Raleway"],
      },
      colors: (theme) => ({
        gray: {
          999: "#1e1e1e",
          ...theme.gray,
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
