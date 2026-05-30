/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0C0C0C',
        text: '#D7E2EA',
        accent: '#00ff88',
        accent2: '#00ccff',
      },
    },
  },
  plugins: [],
}
