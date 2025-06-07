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
        primary: {
          DEFAULT: "#2E8B57",
          dark: "#1F6E43",
          light: "#4CAF7D",
        },
        secondary: {
          DEFAULT: "#FF6B6B",
          dark: "#E05252",
        },
        accent: "#FFD166",
        background: "#F5F0E6",
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#333333",
          light: "#666666",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};

export default config;
