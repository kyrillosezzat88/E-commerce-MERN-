/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#5570F1",
        secondary: "#FFCC91",
        black: "#1C1D22",
        white: "#fff",
        success: "#519C66",
        danger: "#CC5F5F",
      },
    },
  },
  plugins: [],
};
