/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B4ED8",
        secondary: "#64748B",
        dark: "#1C2434",
        backGround: "#F1F5F9",
        foreGround: "#FFFFFF",
        menuHover: "#323A48",
        subMenu: "#DAE0EA",
        lightGreen: "#27C08D",
      },
      padding: {
        22: "100px",
      },
      margin: {
        22: "100px",
      },
      borderRadius: {
        complete: "50%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "3xl": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
