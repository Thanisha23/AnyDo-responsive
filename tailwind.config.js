/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crisis: ["Oranienbaum", "serif"],
      },
      spacing: {
        33: "8.5px",
        97: "24rem",
      },
      animation: {
        "bounce-twice": "spin 3s 1",
      },
    },
  },
  plugins: [],
}

