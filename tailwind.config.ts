import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        sand: "var(--sand)",
        mushroom: "var(--mushroom)",
        plum: "var(--plum)",
        copper: "var(--copper)",
        orchid: "var(--orchid)",
        turquoise: "var(--turquoise)",
        ink: "var(--ink)"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        card: "0 24px 60px rgba(78, 55, 57, 0.08)",
        soft: "0 10px 24px rgba(96, 74, 67, 0.08)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      backgroundImage: {
        paper: "radial-gradient(circle at top left, rgba(255,255,255,0.7), transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0))"
      }
    },
  },
  plugins: [],
};

export default config;
