/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2d5a8a',
          dark: '#0f1f33',
        },
        accent: {
          DEFAULT: '#ff6b35',
          light: '#ff8555',
        },
        paper: '#faf8f5',
        cream: '#f5f0e8',
      },
    },
  },
  plugins: [],
}
