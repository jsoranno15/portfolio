import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        "ds-main-accent": "#CBACF9",
        "ds-secondary-accent": "#45A29E",
        "ds-white": "#e3ecff",
        "ds-grey": "#8F95A1",
        "darkest-purple": "#010319",
        "dark-purple": "#0D0121",
        "neon-purple": "#A632FE",
        "ds-cyan": "#71F6F7",
      },
    },
  },
  plugins: [],
};
export default config;
