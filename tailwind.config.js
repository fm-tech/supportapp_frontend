module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom theme color
        primary: {
          100: "#caf0f8",
          200: "#ade8f4",
          300: "#90e0ef",
          400: "#48cae4",
          500: "#00b4d8",
          600: "#0096c7",
          700: "#0077b6",
          800: "#023e8a",
          900: "#03045e",
        }
      }
    },
    // Import fonts 
    fontFamily: {
      display: ["Roboto"],
      primary: ["Open Sans"]
    }
  },
  plugins: [
    require('daisyui'),
  ],
  // daisyUI config (optional)
  daisyui: {
    themes: [ "corporate" ],
  },
}
