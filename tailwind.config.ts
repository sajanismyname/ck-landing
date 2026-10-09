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
        agri: {
          50: "#f2f8f2",
          100: "#e1efe1",
          200: "#c4dec4",
          300: "#9ec59e",
          400: "#6fa66f",
          500: "#498849",
          600: "#366d36",
          700: "#2d572d",
          800: "#264626",
          900: "#1f3b1f",
          950: "#0f200f",
        },
        earth: {
          50: "#faf8f5",
          100: "#f4f0e9",
          200: "#e9dfd1",
          300: "#d9c8b1",
          400: "#c4aa8b",
          500: "#b3916d",
          600: "#a27d5b",
          700: "#86634a",
          800: "#6e523f",
          900: "#5a4336",
        },
        harvest: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
