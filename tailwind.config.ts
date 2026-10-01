import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6)',
        'gradient-brand-r': 'linear-gradient(135deg, #3b82f6, #8b5cf6, #6366f1)',
        'gradient-card': 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))',
        'gradient-hero': 'radial-gradient(ellipse at top, rgba(99,102,241,0.2) 0%, transparent 60%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(139,92,246,0.15), 0 0 80px rgba(99,102,241,0.1)' },
          '50%': { boxShadow: '0 0 60px rgba(139,92,246,0.35), 0 0 120px rgba(99,102,241,0.2)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
