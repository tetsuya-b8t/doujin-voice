import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#12111a",
        card: "#1e1b2e",
        accent: "#f472b6",
        "accent-hover": "#e879a0",
      },
    },
  },
  plugins: [],
};

export default config;
