import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
export default config;
