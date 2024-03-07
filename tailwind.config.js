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
        "bounce-slow": "bounce 6s linear infinite",
      },
    },
  },
  plugins: [],
};
