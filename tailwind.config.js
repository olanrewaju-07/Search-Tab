/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#5A35EC",
      },
      screens: {
        tablet: { max: "1024px" },
        ipad: { max: "834px" },
        mobile: { max: "428px" },
      },
    },
  },
  plugins: [],
};
