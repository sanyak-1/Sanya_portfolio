/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Industrial dark surfaces
        ink: {
          950: "#09090b",
          900: "#0c0c0f",
          850: "#111114",
          800: "#18181b",
          700: "#27272a",
          600: "#3f3f46",
        },
        // Electric mint / emerald accent
        volt: {
          50: "#ecfff6",
          100: "#d1ffe9",
          200: "#a6ffd3",
          300: "#6cfbb8",
          400: "#2ef09a",
          500: "#10d982",
          600: "#07b06a",
          700: "#098a56",
          800: "#0c6b47",
          900: "#0b583c",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,240,154,0.25), 0 0 32px -8px rgba(46,240,154,0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};