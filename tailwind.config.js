module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],

  safelist: ['w-0', 'w-1/12', 'w-2/12', 'w-3/12',
    'w-4/12', 'w-5/12', 'w-6/12', 'w-7/12', 'w-8/12',
    'w-9/12', 'w-10/12', 'w-11/12', 'w-12/12'],

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
