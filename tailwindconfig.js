/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0D1117',
          800: '#161B24',
          700: '#1C2333',
          600: '#253047',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#DFC57A',
          dim: '#8A6F2E',
        },
        cream: {
          DEFAULT: '#E8DCC8',
          dim: '#B8A98A',
        },
        teal: {
          DEFAULT: '#4ECDC4',
          dim: '#2A8F88',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flip-in': 'flipIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        flipIn: {
          '0%': { transform: 'rotateY(-90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201,168,76,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
