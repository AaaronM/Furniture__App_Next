/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Poppins",
      tertiary: "Aldrich",
    },
    extend: {
      colors: {
        gold: "#8A784E",
        dark: "#333333",
        light: "#efeeea",
        green: "#1E413D",
        red: "#361314",
        gray: "rgb(212 212 212)",
      },
    },

    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  },

  plugins: [],
};
