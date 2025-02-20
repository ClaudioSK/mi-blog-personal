import type { Config } from "tailwindcss";
import typographyPlugin from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              fontWeight: '400',
              backgroundColor: 'rgb(240, 240, 240)',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.2rem',
              fontSize: '0.9em',
            },
            'code.dark': {
              backgroundColor: 'rgb(50, 50, 50)',
            },
            'a:hover': {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
            },
            'a:visited': {
              color: 'var(--tw-prose-links)',
            },
            pre: {
              backgroundColor: 'rgb(40, 44, 52)',
              color: 'rgb(248, 248, 242)',
              overflowX: 'auto',
              fontSize: '0.9em',
              borderRadius: '0.5rem',
              padding: '1rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              fontSize: 'inherit',
            },
            h1: {
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            blockquote: {
              borderLeftColor: 'rgb(59, 130, 246)',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: 'rgb(107, 114, 128)',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [typographyPlugin],
};

export default config;