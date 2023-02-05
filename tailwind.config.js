/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3C64B1",
        light: "#F4F6FB",
        success: "#61E025",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
