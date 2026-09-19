import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#f6f3ec',
          dark: '#0b0d10',
        },
        ink: {
          DEFAULT: '#14181f',
          muted: '#5c6573',
          dark: '#e8ecef',
          'muted-dark': '#9aa3b0',
        },
        surface: {
          DEFAULT: '#fffdf8',
          dark: '#14181e',
        },
        line: {
          DEFAULT: '#e4ddd2',
          dark: '#2a3038',
        },
        accent: {
          DEFAULT: '#0f766e',
          dark: '#2dd4bf',
          soft: '#ccfbf1',
          'soft-dark': '#134e4a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        lift: '0 12px 30px -18px rgba(15, 23, 42, 0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config;
