/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-image": "url('/src/assets/images/background.png')",
      },
      animation: {
        floating: "floating 6s linear infinite",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
    },
  },
  plugins: [],
};
