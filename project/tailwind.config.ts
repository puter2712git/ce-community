import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      screens: {
        sm: { min: '390px', max: '819px' },
        md: { min: '820px', max: '1023px' },
        lg: { min: '1080px' },
      },
    },
    extend: {
      animation: {
        fade: 'fadeOut 0.5s linear forwards',
      },
      keyframes: {
        fadeOut: {
          '100%': { opacity: '0.5' },
        },
      },
      colors: {
        transparent: 'transparent',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        neutral: 'rgb(var(--color-neutral) / <alpha-value>)',
      },
      fontSize: {
        xs: '0.5rem',
        s: '0.75rem',
        m: '1.25rem',
        lg: '1.5rem',
        xlg: '1.75rem',
        xxlg: '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
