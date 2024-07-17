// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "orange-glow": "0 0 25px #FF5722",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: `
              0 0 15px rgba(255, 123, 83, 0.5),
              0 0 30px rgba(255, 111, 67, 0.4),
              0 0 40px rgba(255, 99, 51, 0.3),
              0 0 50px rgba(255, 87, 34, 0.2)
            `,
          },
          "50%": {
            boxShadow: `
              0 0 10px rgba(255, 123, 83, 0.5),
              0 0 20px rgba(255, 111, 67, 0.4),
              0 0 30px rgba(255, 99, 51, 0.3),
              0 0 40px rgba(255, 87, 34, 0.2)
            `,
          },
        },
      },
      animation: {
        "glow-orange": "glow 2s ease-in-out infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#FF5722",
          BG_LIGHT: "#FFF3EF",
          TRANSPARENT: "rgba(255, 87, 34, 0.25)",
          TRANSPARENT_DARK: "rgba(204, 70, 27, 0.25)",
          ALMOST_WHITE: "#FAFAFA",
          dark: "#E65100",
        },
        functional: {
          DEFAULT: "#F93A00",
          gray: "rgba(26, 26, 26, 0.50)",
          LIGHT: "#FFF3EF",
          dark: "#008BA3",
        },
        dark: {
          super: "#16151B",
          lighter: "#2B2934",
          upper: "#3A3846",
          upper2: "#474556",
          text: "#817C9A",
          lightText: "#B7B4C5",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          dark: "#008BA3",
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

export default tailwindConfig;
