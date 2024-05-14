import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          lg: "60px",
        },
        screens: {
          xl: "1120px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#9A9E7A",
        },
        secondary: {
          DEFAULT: "#f9f9f9",
          100: "#1a1a1a",
          900: "#999",
        },
      },
    },
  },
  plugins: [],
};
export default config;
