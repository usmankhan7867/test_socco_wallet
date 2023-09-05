/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#064748",
        banner: "#127040",
        btn: "#29974D",
        btn_gray: "#35383F",
        error: "#F65554",
        disable: "#0C4D44",
        light_green: "#94C119",
      },
    },
  },
  plugins: [],
};
