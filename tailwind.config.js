module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "/components/**/*.{js,ts,jsx,tsx}",
    // "/modules/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // "/constant/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: "#120360",
      light_purple: "rgba(235, 225, 255, 1)",
      secondary: "#FF008A",
      grey_bg: "rgba(18, 3, 96, 0.03)",
      input_grey: "rgba(176, 186, 195, 0.4)",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sx: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      customTablet: "1090px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
