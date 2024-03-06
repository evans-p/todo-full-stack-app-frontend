/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./pages/**"], //TODO : add more paths to the array if needed
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
