/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f7f4ef',
        carbon: '#100f0e',
        panel: '#1c1a18',
        ember: '#ff6a00',
        flame: '#ff2f12',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(255, 106, 0, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
