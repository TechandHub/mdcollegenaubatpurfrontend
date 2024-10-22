/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        primaryColor: "#1A3E59",
        secondaryColor: "#4FC3F7",
        accentColor: "#FF6F61",
        bgColor: "#F7F7F7",
        textColor: "#333333",
        borderColor: "#DDDDDD",
        hoverColor: "#38B3E2"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
}

