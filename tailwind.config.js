/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1250px",
    },
    extend: {
      boxShadow: {
        shadow1: "6px 27px 34px 0 rgba(0, 0, 0, 0.1)",
        shadow2: "-2px 22px 38px 0 rgba(142,255,154,0.5)",
        shadow3: "2px 10px 30px 0 #0000001a",
      },
      colors: {
        primary: "#39DB4A",
        secondary: "#272727",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
