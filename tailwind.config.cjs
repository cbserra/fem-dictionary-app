/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: '#FF5252',
        purple: '#A445ED',
        white: '#ffffff',
        gray: {
          50: '#f4f4f4',
          200: '#e9e9e9',
          500: '#757575',
          700: '#3a3a3a',
          800: '#2d2d2d',
          900: '#1f1f1f',
          950: '#050505',
        },
      },
    },
    fontFamily: {
      sans: ['inter', 'sans-serif'],
      serif: ['lora', 'serif'],
      mono: ['inconsolata', 'monospace'],
    },
    fontSize: {
      headingL: ['6.4rem', '7.7rem'],
      headingM: ['2.4rem', '2.9rem'],
      headingS: ['2.0rem', '2.4rem'],
      headingXS: ['1.8rem', '2.2rem'],
      headingXXS: ['1.6rem', '1.9rem'],
      bodyM: ['1.8rem', '2.4rem',],
      bodyS: ['1.5rem', '2.4rem'],
      bodyXS: ['1.4rem', '1.7rem'],
      base: '62.5%',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
}

export default tailwindConfig
