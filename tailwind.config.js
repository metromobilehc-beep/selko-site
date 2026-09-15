/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Matches Selko Cred's own design tokens exactly (styles.css:
        // --navy, --teal, --gold, --offwhite, --gray-*) so the marketing
        // site and the actual product read as the same brand, not two
        // different designs bolted together.
        paper: '#F8FAFC',        // --offwhite (page canvas)
        'paper-alt': '#E2E8F0',  // --gray-200 (subtle secondary surface)
        ink: '#0F1F2E',          // --navy (dark panel background)
        'ink-soft': '#475569',   // --gray-600 (secondary text on light bg)
        gold: '#F59E0B',         // --gold
        teal: '#0D9488',         // --teal
        'teal-l': '#14B8A6',     // --teal-l (panel micro-labels, hovers)
        rust: '#EF4444',         // --danger
        line: '#E2E8F0',         // --gray-200
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
