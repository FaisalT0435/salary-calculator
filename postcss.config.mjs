import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/postcss"],
  autoprefixer: {},
};

export default config;
