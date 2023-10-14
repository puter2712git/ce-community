import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
