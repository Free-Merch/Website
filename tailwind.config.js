/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        "414px": "414px",
      },
      borderWidth: {
        "1px": "1px",
      },
      colors: {
        white: "#ffffff",
        grey: {
          100: "#F5F8FF",
          200: "#FEFEFF",
          300: "#667085",
          400: "#D0D7E5",
          500: "#333333"
        },
        green: {
          100: "#2EC866",
          900: "#1E1E1E",
        },
        black: {
          100: "#120C26",
        },
        blue: {
          400: "#0B1237",
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
  ],
};
