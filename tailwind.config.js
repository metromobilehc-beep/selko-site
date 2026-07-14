/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F2F0E9',
        'paper-alt': '#E7E2D2',
        ink: '#1F2A24',
        'ink-soft': '#4A554E',
        gold: '#C08A2E',
        teal: '#3A6B5C',
        rust: '#A64B3A',
        line: '#D8D4C7',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-plex-sans)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};
