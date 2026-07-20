/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F1B1E",
        surface: "#16262A",
        surface2: "#1D2F33",
        edge: "#25383C",
        gold: "#F2B807",
        mint: "#4FD1C5",
        ink: "#EDEFEE",
        dim: "#9FB0AF",
        faint: "#5E7276",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      keyframes: {
        pulse2: {
          "0%": { boxShadow: "0 0 0 0 rgba(242,184,7,0.5)" },
          "70%": { boxShadow: "0 0 0 7px rgba(242,184,7,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(242,184,7,0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(14px,-18px) scale(1.06)" },
          "66%": { transform: "translate(-12px,12px) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        pulse2: "pulse2 2.2s infinite",
        blob: "blob 9s infinite ease-in-out",
        float: "float 4s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
