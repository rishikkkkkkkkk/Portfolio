/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        bg: {
          DEFAULT: '#0a0e0f',
          surface: '#0f1517',
          elevated: '#141a1c',
          card: '#161d1f',
        },
        // Teal/cyan accent — the "terminal cursor" color
        accent: {
          DEFAULT: '#2dd4bf',
          dim: '#1a9e8f',
          glow: 'rgba(45, 212, 191, 0.15)',
          border: 'rgba(45, 212, 191, 0.25)',
        },
        // Muted greens for terminal text
        terminal: {
          green: '#4ade80',
          comment: '#4b5563',
          prompt: '#2dd4bf',
          output: '#94a3b8',
          error: '#f87171',
        },
        // Neutral grays for text hierarchy
        muted: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
          lighter: '#cbd5e1',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(45, 212, 191, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(45, 212, 191, 0.03) 1px, transparent 1px)`,
        'accent-gradient': 'linear-gradient(135deg, #2dd4bf, #06b6d4)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(45, 212, 191, 0.12) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'accent': '0 0 20px rgba(45, 212, 191, 0.15)',
        'accent-lg': '0 0 40px rgba(45, 212, 191, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 212, 191, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(45, 212, 191, 0.25)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}