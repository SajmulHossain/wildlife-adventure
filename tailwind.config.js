import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#131e01",
        background: "#fbfff5",
        primary: "#94f91f",
        secondary: "#6fe4fb",
        accent: "#528afa",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(225deg, rgba(148,249,31,1) 0%, rgba(111,228,251,1) 100%);",
      },
    },
  },
  plugins: [daisyui],
};
