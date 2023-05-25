const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,scss,html}'),

    ...createGlobPatternsForDependencies(__dirname),
    './packages/**/!(*.stories|*.spec).{ts,scss.html}',
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
