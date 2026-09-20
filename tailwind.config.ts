import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#100b09",
        wine: "#650d20",
        "wine-dark": "#420b16",
        champagne: "#e7c38f",
        ivory: "#f7f4ef",
      },
    },
  },
  plugins: [],
} satisfies Config;
