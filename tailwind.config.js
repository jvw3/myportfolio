/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { min: "300px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      xxl: "1536px",
    },
    extend: {
      backgroundImage: {
        homebackground: "url(../src/images/portfoliobackground.jpg)",
        buttonbackground1: "url(../src/images/buttonback2.jpg)",
        experiencebackground: "url(../src/images/buttonback1.jpg)",
        purpleyblueimage: "url(../src/images/purpleyblueimage.jpg)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        spacemono: ["Space Mono, sans-serif"],

      },
      height: {
        89: "89vh",
        75: "75vh",
        40: "40vh",
        50: "50vh",
        80: "80vh",
        90: "90vh",
      },
      colors: {
        contentbackground: "#000053",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        disappear: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slide2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        appear: "appear 0.25s ease-in-out",
        disappear: "disappear 0.25s ease-in-out",
        slide: "slide 30s infinite linear",
        slide2: "slide2 30s infinite linear",
      },
    },
  },
  plugins: [],
};
