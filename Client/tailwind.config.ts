import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      JostReg: ["Jost-Regular", "sans-serif"],
      JostSemiBold: ["Jost-SemiBold", "sans-serif"],
      JostBold: ["Jost-Bold", "sans-serif"],
      JostExBold: ["Jost-ExtraBold", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F8F6F5",
        black: "#010101",
        shadow: "#C8815F",
        "pink-light": "#ecc6c2",
      },
    },
  },
  plugins: [],
};
export default config;
