/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF6',
          100: '#F8F3EB',
          200: '#F2E8DC',
          300: '#E7D8C5',
          400: '#D8C3AB',
        },
        blush: {
          50: '#FDF6F6',
          100: '#FBECEB',
          200: '#F7D7D6',
          300: '#EEB5B3',
          400: '#E28E8C',
          500: '#D26765',
        },
        terracotta: {
          50: '#FAF2EE',
          100: '#F4E0D7',
          200: '#E8C0B2',
          300: '#DA9E8A',
          400: '#CA7860',
          500: '#B8583E',
          600: '#9E442D',
          700: '#803420',
          800: '#672A1B',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F3ECD2',
          200: '#E6D79E',
          300: '#D7BF64',
          400: '#C8A736',
          500: '#B8921C',
          600: '#967414',
          700: '#755810',
        },
        warmcharcoal: {
          600: '#52433F',
          700: '#3D322E',
          800: '#2C2320',
          900: '#1B1513',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 8px 30px rgba(184, 88, 62, 0.08)',
        'warm-hover': '0 14px 40px rgba(184, 88, 62, 0.14)',
        'gold-glow': '0 0 25px rgba(216, 181, 52, 0.25)',
      }
    },
  },
  plugins: [],
}
