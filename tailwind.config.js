/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f7f4ef',
        carbon: '#0e0e0e',
        panel: '#141414',
        ember: '#e53e3e',
        flame: '#9b1c1c',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(229, 62, 62, 0.18)',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
