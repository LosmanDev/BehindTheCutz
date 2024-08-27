/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4A44F3',

          secondary: '#007300',

          accent: '#0057ff',

          neutral: '#1C222A',

          'base-100': '#000000',

          info: '#000dffb3',

          success: '#008d34',

          warning: '#ff6800',

          error: '#ff1e00e9',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
