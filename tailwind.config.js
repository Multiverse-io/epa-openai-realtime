/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@multiverse-io/stardust-react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        'optimal-reading-length': '35rem',
        'dynamic-screen': '100dvh',
      },
      boxShadow: {
        'button-hover': `inset 0rem -0.25rem #0000003D`,
        'button-press': `inset 0rem  0.25rem #0000003D`,
        'button-border': `inset 0 0 0 0.125rem`,
        'toggle-thumb-shadow-black': '0 1px 2px rgba(0, 0, 0, 0.16)',
        'toggle-thumb-shadow-grey': '0 0 2px rgba(132, 151, 176, 0.24)',
        'toggle-root-shadow': 'inset 0 1px 4px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        'optimal-reading-length': '35rem',
        message: '25rem',
      },
    },
    fontFamily: {
      'sans-serif': ['var(--font-saans)', 'Helvetica', 'Arial', 'sans-serif'],
      serif: [
        'var(--font-times-condensed)',
        'Times New Roman',
        'Times',
        'Baskerville',
        'Georgia',
        'serif',
      ],
    },
    screens: {
      md: '768px',
      lg: '1024px',
      desktop: '900px',
      xl: '1280px',
    },
    container: {
      center: true,
    },
  },
  presets: [require('@multiverse-io/stardust/tailwind-preset.js')],
};
