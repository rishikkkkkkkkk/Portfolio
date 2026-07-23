/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f4f1ea',
          warm: '#ede8df',
          bright: '#faf8f5',
          deep: '#e2ddd2',
        },
        ink: {
          DEFAULT: '#16140f',
          soft: '#57534a',
          light: '#787369',
        },
        stamp: {
          DEFAULT: '#a6382c',
          dark: '#852a1f',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        gothic: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        text: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'paper-card': '0 2px 14px rgba(22, 20, 15, 0.12)',
        'stamp': '0 0 0 2px #a6382c',
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