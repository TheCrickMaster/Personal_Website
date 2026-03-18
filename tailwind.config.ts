import type { Config } from "tailwindcss";

/**
 * TAILWIND CONFIGURATION — Design Token System
 * =============================================
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      /**
       * COLORS 
       */
      colors: {
        parchment: {
          DEFAULT: "#f4efe6",
          dark: "#e8e0d0",
        },
        ink: {
          DEFAULT: "#2a2218",
          light: "#5c4f3a",
        },
        rule: "#c8b89a",
        accent: {
          DEFAULT: "#8b3a2f",
          dark: "#6a2c23",
        },
      },

      /**
       * FONT FAMILIES
       */
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "'Courier New'", "monospace"],
      },

      lineHeight: {
        reading: "1.75",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;