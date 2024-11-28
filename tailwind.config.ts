import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        scissors : "var(--scissors)",
        paper : "var(--paper)",
        rock : "var(--rock)",
        lizard : "var(--lizard)",
        spock : "var(--spock)",
        darktext : "var(--darktext)",
        scoretxt : "var(--scoretxt)",
        header : "var(--header)",
      },
      backgroundImage: {
        'triangle': "url('/bg-triangle.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
