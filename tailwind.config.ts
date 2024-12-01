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
        darktxt : "var(--darktxt)",
        scoretxt : "var(--scoretxt)",
        header : "var(--header)",
      },
      backgroundImage: {
        'triangle': "url('/bg-triangle.svg')",
      },
      animation: {
        'ripple-slow': 'ripple 3s linear infinite',
        'ripple-medium': 'ripple 3s linear infinite 2s',
        'ripple-fast': 'ripple 3s linear infinite 2s',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
