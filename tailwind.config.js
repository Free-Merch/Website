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
  plugins: [],
};
