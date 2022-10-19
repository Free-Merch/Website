/** @type {import('tailwindcss').Config} */

 
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "hero-small": { max: "1279px" },
        "initiative-small": { max: "1207px" },
        "desk-nav-mid": {max: "890px"}
      },
      margin: {
        "414px": "414px",
      },
      borderWidth: {
        "1px": "1px",
      },
      colors: {
        white: "#ffffff",
        purple: {
          100: "#6A42FE"
        },
        red: {
          150: "#CD0000"
        },
        grey: {
          100: "#F5F8FF",
          150: "#D7D9E4",
          200: "#FEFEFF",
          250: "#696F8C",
          300: "#667085",
          350: "#21223A",
          400: "#D0D7E5",
          450: "#5B5B60",
          500: "#333333",
          550: "#302E3C",
          600: "#F0F0F0",
          650: "#565462",
          700: "#7A797D",
          800: "#E9E8FA",
          900: "#E7E7FF",
        },
        green: {
          100: "#2EC866",
          900: "#1E1E1E",
        },
        black: {
          100: "#120C26",
          200: "#050624",
          900: "#000000",
        },
        blue: {
          300: "#1E1F48",
          400: "#0B1237",
          800: "#00012C",
          900: "#050624",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwind-scrollbar-hide"),
  ],
};
