import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        bg: '#020b14',
        bg2: '#030f1c',
        cyan: {
          DEFAULT: '#22d3ee',
          2: '#06b6d4',
        },
        pink: '#f472b6',
        orange: '#f472b6',
        green: '#39ff14',
        purple: '#a855f7',
        text: '#c8e6f0',
        muted: '#4a7a8a',
      },
      boxShadow: {
        glow: '0 0 20px rgba(34,211,238,0.3)',
        'glow-lg': '0 0 40px rgba(34,211,238,0.4)',
        'glow-orange': '0 0 20px rgba(244,114,182,0.3)',
        'glow-green': '0 0 20px rgba(57,255,20,0.3)',
        'glow-purple': '0 0 20px rgba(168,85,247,0.3)',
        'glow-pink': '0 0 20px rgba(244,114,182,0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'blink': 'blink 0.7s steps(2) infinite',
        'rim-light': 'rimLight 3s linear infinite',
        'scanline': 'scanline 4s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(34,211,238,0.3)', transform: 'scale(1)' },
          '50%': { boxShadow: '0 0 20px rgba(34,211,238,0.8)', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        rimLight: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
