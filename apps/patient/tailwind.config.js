const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../shared/src/styles/tailwind.config.js'); // Absolute path

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedTailwindConfig,

  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  plugins: [],
};
