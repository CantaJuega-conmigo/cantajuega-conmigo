
const contentPaths = [
  "./app//*.{js,ts,jsx,tsx}",
  "./pages//.{js,ts,jsx,tsx}",
  "./components/**/.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
];

module.exports = {
  content: contentPaths,
  theme: {
    extend: {
      colors: {
        black: "#1b1b1b",
        withe: "#f5f5f5",
        orange: "#ffc172",
        blue: "#26798e",
        green: "#63caa7",
        cream: "#ffe3b3",
      },
      fontFamily: {
        main: ["./public/fonts/ITCKRIST/ITCKRIST.ttf"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
