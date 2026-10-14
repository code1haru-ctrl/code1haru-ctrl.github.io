import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060B",
          900: "#0A0C14",
          800: "#10131E",
          700: "#181C2B",
          600: "#252A3D",
        },
        aurora: {
          violet: "#8B5CF6",
          cyan: "#22D3EE",
          pink: "#F472B6",
          lime: "#A3E635",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        drift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.15)" },
          "66%": { transform: "translate(-30px,30px) scale(0.9)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        blink: "blink 1s step-end infinite",
        drift: "drift 18s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
