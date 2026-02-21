import type { Config } from "tailwindcss";

/**
 * TAILWIND CONFIGURATION — Design Token System
 * =============================================
 * This file is the single source of truth for your design system.
 * By defining everything here under `theme.extend`, we ADD to
 * Tailwind's defaults rather than replacing them, so all the
 * built-in utilities (flex, grid, padding, etc.) still work.
 *
 * THEORY: A design token is a named value for a design decision
 * (color, spacing, font). Instead of writing bg-[#f4efe6] in
 * every component, you write bg-parchment. This means changing
 * the palette is a ONE-LINE edit here rather than a find-and-replace
 * across dozens of files. This is the core principle of systematic
 * design in code.
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
       * COLORS — named semantically, not visually.
       *
       * Palette rationale:
       * - parchment:    warm off-white, like aged paper
       * - parchment-dark: slightly deeper for code blocks / inset panels
       * - ink:          very dark warm brown (not pure black — softer contrast)
       * - ink-light:    mid-tone for captions, dates, secondary text
       * - rule:         muted tan for borders and dividers
       * - accent:       deep rust-red — the "iron gall ink" annotation color
       * - accent-dark:  deeper variant for hover states
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
       * Three fonts, each with a distinct role:
       * 1. display  — IM Fell English — Headings (17th-c. typeface, organic feel)
       * 2. body     — Lora            — Body text (calligraphic literary serif)
       * 3. mono     — Courier Prime   — Code, dates, nav (refined typewriter)
       *
       * CSS variables (--font-display etc.) are injected by next/font in layout.tsx.
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