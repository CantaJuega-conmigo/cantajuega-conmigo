/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        black: "#1b1b1b",
        withe: "#f5f5f5",
        orange: "#ffc172",
        blue: "#26798e", 
        green: "#63caa7", 
        cream: "#ffe3b3",
      }
    },
  },
  plugins: [],
}