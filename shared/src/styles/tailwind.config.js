module.exports = {
  content: [
    '../../src/**/*.{js,jsx,ts,tsx}', // Include library files
    '../../../apps/**/src/**/*.{js,jsx,ts,tsx}', // Include consuming apps
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        // primary: '#17b92f',
      },
    },
  },
  plugins: [],
};
