/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbonetzGreen: "#00E676",
        carbonetzDarkGreen: "#00C853",
        carbonetzBlue: "#00B0FF",
        carbonetzDarkBlue: "#00C8E7",
        carbonetzBgWhite: "#FFF",
        carbonetzBgGray: "#F4F4F4",
        carbonetzText: "#000",
        carbonetzGrayText: "#4A4A4A"
      },
    },
  },
  plugins: [],
};
