import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EBEBD3',
        darkGreen: '#1C2826',
        tileGreen: '#2A7F62',
        accentGreen: '#00A878',
        accentRed: '#D64550',
      },
      borderRadius: {
        tile: '1rem',
      },
      fontFamily: {
        serif: ['"Montague Slab"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        pulseSlow: 'pulse 4s ease-in-out infinite',
        fadeIn: 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
export default config
