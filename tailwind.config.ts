import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e6f0e4',
          DEFAULT: '#7c9a77',
          dark: '#4e644d',
        },
        background: '#f9f9f4',
        foreground: '#2f2f2f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
        glow: '0 0 12px rgba(124, 154, 119, 0.4)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseIn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        pulseIn: 'pulseIn 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
