import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem', 
        center: true,
      },
      keyframes: {
        twist: {
          '100%': {transform: 'translateY(0) rotate(0)'}
        }
      }
    },
  },
  plugins: [],
};
export default config;
