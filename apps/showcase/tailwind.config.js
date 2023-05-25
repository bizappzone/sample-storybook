const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [
    require('../../tailwind/tailwind-gc-theme-base'),
    require('../../tailwind/tailwind-gc-theme-forms'),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
