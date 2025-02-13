import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: {
      main: 'rgb(45 84 147)',
      light: 'rgb(65 104 167)',
      dark: 'rgb(35 74 137)',
    },
    secondary: {
      main: 'rgb(231 50 35)',
      light: 'rgb(251 70 55)',
      dark: 'rgb(211 30 15)',
    },
    grey: {
      100: '#f7f7f7',
      200: '#e6e6e6',
      300: '#d6d6d6',
      400: '#c2c2c2',
      500: '#a3a3a3',
      600: '#737373',
      700: '#525252',
      800: '#404040',
      900: '#262626',
    },
    white: '#ffffff',
    black: '#000000',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  container: {
    padding: '1rem',
    maxWidth: '1280px',
  },
  font: {
    family: {
      body: 'system-ui, sans-serif',
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
  },
};

export default theme;