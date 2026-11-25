/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004aad',
          dark: '#0f8cb5',
          light: '#4dd0f5',
          brand: '#004AAD',
        },
        secondary: {
          DEFAULT: '#FEE600',
          dark: '#C9A800',
          darker: '#A08700',
          light: '#FFF5B3',
          lighter: '#FFFCE6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}