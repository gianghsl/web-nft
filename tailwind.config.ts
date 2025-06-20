import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC700',
        background: '#131415',
        'secondary-background': '#1F2023',
        'ui-background': '#383A42',
        'text-primary': '#FFFFFF',
        'text-secondary': '#D2D2D2',
        danger: '#FF0000',
        icon: '#F5B923',
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        heading: ['var(--font-barlow)', 'sans-serif'],
      },
    },
    container: {
      screens: {
        DEFAULT: '1128px',
      },
      center: true,
    },
  },
  plugins: [],
};
export default config;
