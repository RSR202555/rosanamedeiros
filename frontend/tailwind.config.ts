import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        background: {
          DEFAULT: 'var(--color-background)',
          light: 'var(--color-background-light, #b3f1ff)',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1280px',
        }
      },
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          ...fontFamily.sans,
        ],
        mono: [
          'var(--font-geist-mono)',
          ...fontFamily.mono,
        ]
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 215, 255, 0.15)'
      },
      backgroundImage: {
        'radial-primary': 'radial-gradient(800px 400px at 50% -20%, rgba(255,255,255,0.25), transparent)',
        'gradient-primary': 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.05))'
      }
    }
  },
  plugins: [],
}

export default config
