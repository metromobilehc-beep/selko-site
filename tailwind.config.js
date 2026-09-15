/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Registry palette — a credential file's own materials: manila,
        // ledger ink, verification-stamp green, flagged-item amber.
        // Deliberately cooler/deeper than a generic warm-cream site, and
        // the accents are functional status colors (verified / flagged)
        // rather than decorative ones.
        paper: '#EDE9DE',
        'paper-alt': '#E2DCC8',
        ink: '#1B2A22',
        'ink-soft': '#52594E',
        gold: '#B5722B',
        teal: '#2F6F4E',
        rust: '#8B3A2B',
        line: '#C9C2AE',
      },
      fontFamily: {
        display: ['var(--font-plex-serif)', 'serif'],
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
