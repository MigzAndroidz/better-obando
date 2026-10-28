import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Figtree',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: {
          50: 'var(--theme-primary-50, #f0f4fa)',
          100: 'var(--theme-primary-100, #dbe6f5)',
          200: 'var(--theme-primary-200, #9ebde4)',
          300: 'var(--theme-primary-300, #5b8ecb)',
          400: 'var(--theme-primary-400, #2563b0)',
          500: 'var(--theme-primary-500, #082f65)', // Official Primary Navy
          600: 'var(--theme-primary-600, #052759)', // Logo Core Navy Badge
          700: 'var(--theme-primary-700, #03204a)',
          800: 'var(--theme-primary-800, #021838)',
          900: 'var(--theme-primary-900, #011026)',
        },
        secondary: {
          50: '#ffede6',
          100: '#ffdbcc',
          200: '#ffb799',
          300: '#ff9466',
          400: '#ff7033',
          500: '#ff4d00',
          600: '#cc3e00',
          700: '#992e00',
          800: '#661f00',
          900: '#330f00',
        },
        accent: {
          50: 'var(--theme-accent-50, #fffcf2)',
          100: 'var(--theme-accent-100, #fff8e5)',
          200: 'var(--theme-accent-200, #ffedb9)',
          300: 'var(--theme-accent-300, #ffe089)',
          400: 'var(--theme-accent-400, #ffd359)',
          500: 'var(--theme-accent-500, #ffc629)', // Official Golden Sun Yellow
          600: 'var(--theme-accent-600, #d99f12)',
          700: 'var(--theme-accent-700, #b37d06)',
          800: 'var(--theme-accent-800, #8e5f05)',
          900: 'var(--theme-accent-900, #6b4504)',
        },
        success: {
          50: '#e6f7ef',
          100: '#ccefdf',
          200: '#99dfbf',
          300: '#66cf9f',
          400: '#33bf7f',
          500: '#00af5f',
          600: '#008c4c',
          700: '#006939',
          800: '#004626',
          900: '#002313',
        },
        warning: {
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe399',
          300: '#ffd566',
          400: '#ffc733',
          500: '#ffb900',
          600: '#cc9400',
          700: '#996f00',
          800: '#664a00',
          900: '#332500',
        },
        error: {
          50: '#fceaea',
          100: '#f9d5d5',
          200: '#f3abab',
          300: '#ed8282',
          400: '#e75858',
          500: '#e12e2e',
          600: '#b42525',
          700: '#871c1c',
          800: '#5a1212',
          900: '#2d0909',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [typography],
};
