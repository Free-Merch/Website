/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      green: { 
        100: "#2EC866",
        900: "#1E1E1E"
      },
      black: {
        100: "#120C26"

      }
    },
    extend: {
      margin: {
        "414px": "414px",
      },
      borderWidth:{
        "1px": "1px"
      }
    },

  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
};
