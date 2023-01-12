/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      backgroundImage: {
        homebackground: "url(../src/images/portfoliobackground.jpg)",
        buttonbackground1: "url(../src/images/buttonback2.jpg)",
      },
      colors: {
        "contentbackground": "#000053"
      },
    },
  },
  plugins: [],
};
