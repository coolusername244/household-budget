import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#CED7DA',
        primary: '#EBF0F2',
        secondary: '#6F90DE',
        secondaryDark: '#3F6BD3',
        secondaryDarker: '#2F509E',
        tertiary: '#49AB98',
        accent: '#515D86',
        dark: '#212735',
      },
    },
  },
  plugins: [],
};
export default config;
