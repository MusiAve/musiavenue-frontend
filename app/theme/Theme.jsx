import { createTheme } from '@mui/material';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const Theme = createTheme({
  palette: {
    primary: {
      light: '#ffcecb', // light
      main: '#3f30ff', // Main
      // main: '#00fcb8', // Main
      dark: '#0f00e1', // Dark
      contrastText: '#fff',
    },
    secondary: {
      light: '#c4c4c424', // light grey bg
      main: '#000000b8', // medium grey para
      dark: '#000', // black
      contrastText: '#9D9B95', // light para
    },
    error: {
      light: '#d32f2f', // light red
      main: '#c62828', // Main red
      dark: '#e65100', // orange
      contrastText: '#ed6c02', // light orange
    },
    success: {
      light: '#4caf50', // light green
      main: '#2e7d32', // Main green
      dark: '#1b5e20', // orange
    },
    info: {
      light: '#3f30ff2b', // transparent light blue
      main: '#4D4949', // btn grey bg color
      contrastText: '#9D9B95', // list secondary grey color
    },
    grey: {
      50: '#F8F9FD',
      100: '#c4c4c424',
      200: '#c4c4c42e',
      300: '#9D9B95',
      400: '#0000008a',
      500: '#3E3A37',
      600: '#0000009e',
      700: '#5A5B5F',
      800: '#00000021',
      A100: '#BDBABA', // sidebar link color
    },
  },
  typography: {
    h1: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '35px',
      fontWeight: 600,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '45px',
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '25px',
      },
    },
    h2: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '30px',
      fontWeight: 600,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '38px',
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '20px',
      },
    },
    h3: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '25px',
      fontWeight: 600,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '30px',
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '20px',
      },
    },
    h4: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '25px',
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '18px',
      },
    },
    h5: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '18px',
      },
    },
    h6: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      fontWeight: 600,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '18px',
      },
    },
    body1: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '18px',
      display: 'block',
      color: '#9D9B95',
      fontWeight: 300,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '20px',
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '16px',
      },
    },
    subtitle1: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '22px',
      display: 'block',
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '25px',
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '18px',
      },
    },
    subtitle2: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      display: 'block',
      fontWeight: 300,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '18px',
      },
    },
    caption: {
      textTransform: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      display: 'block',
      color: '#9D9B95',
      fontWeight: 300,
      [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
        fontSize: '18px',
      },
    },
    fontFamily: ['Poppins', 'Lato', 'Montserrat', 'sans-serif'].join(','),
  },
  shadows: [
    'none',
    '0 0 15px #efefef', // shadow for white button
    '0 0 15px #e1e1e1', // shadow for hover in white button
    '0px 4px 6px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02)', // shadow for input field
    '0px 4px 21px rgba(0, 0, 0, 0.04)', // shadow for card
    '0px 3px 5px -1px rgba(80,80,80, 0.2),0px 5px 8px 0px rgba(80,80,80, 0.14),0px 1px 14px 0px rgba(80,80,80, 0.12)',
    '0px 3px 5px -1px rgba(80,80,80, 0.2),0px 6px 10px 0px rgba(80,80,80, 0.14),0px 1px 18px 0px rgba(80,80,80, 0.12)',
    '0px 4px 5px -2px rgba(80,80,80, 0.2),0px 7px 10px 1px rgba(80,80,80, 0.14),0px 2px 16px 1px rgba(80,80,80, 0.12)',
    '0px 5px 5px -3px rgba(80,80,80, 0.2),0px 8px 10px 1px rgba(80,80,80, 0.14),0px 3px 14px 2px rgba(80,80,80, 0.12)',
    '0px 5px 6px -3px rgba(80,80,80, 0.2),0px 9px 12px 1px rgba(80,80,80, 0.14),0px 3px 16px 2px rgba(80,80,80, 0.12)',
    '0px 6px 6px -3px rgba(80,80,80, 0.2),0px 10px 14px 1px rgba(80,80,80, 0.14),0px 4px 18px 3px rgba(80,80,80, 0.12)',
    '0px 6px 7px -4px rgba(80,80,80, 0.2),0px 11px 15px 1px rgba(80,80,80, 0.14),0px 4px 20px 3px rgba(80,80,80, 0.12)',
    '0px 7px 8px -4px rgba(80,80,80, 0.2),0px 12px 17px 2px rgba(80,80,80, 0.14),0px 5px 22px 4px rgba(80,80,80, 0.12)',
    '0px 7px 8px -4px rgba(80,80,80, 0.2),0px 13px 19px 2px rgba(80,80,80, 0.14),0px 5px 24px 4px rgba(80,80,80, 0.12)',
    '0px 7px 9px -4px rgba(80,80,80, 0.2),0px 14px 21px 2px rgba(80,80,80, 0.14),0px 5px 26px 4px rgba(80,80,80, 0.12)',
    '0px 8px 9px -5px rgba(80,80,80, 0.2),0px 15px 22px 2px rgba(80,80,80, 0.14),0px 6px 28px 5px rgba(80,80,80, 0.12)',
    '0px 8px 10px -5px rgba(80,80,80, 0.2),0px 16px 24px 2px rgba(80,80,80, 0.14),0px 6px 30px 5px rgba(80,80,80, 0.12)',
    '0px 8px 11px -5px rgba(80,80,80, 0.2),0px 17px 26px 2px rgba(80,80,80, 0.14),0px 6px 32px 5px rgba(80,80,80, 0.12)',
    '0px 9px 11px -5px rgba(80,80,80, 0.2),0px 18px 28px 2px rgba(80,80,80, 0.14),0px 7px 34px 6px rgba(80,80,80, 0.12)',
    '0px 9px 12px -6px rgba(80,80,80, 0.2),0px 19px 29px 2px rgba(80,80,80, 0.14),0px 7px 36px 6px rgba(80,80,80, 0.12)',
    '0px 10px 13px -6px rgba(80,80,80, 0.2),0px 20px 31px 3px rgba(80,80,80, 0.14),0px 8px 38px 7px rgba(80,80,80, 0.12)',
    '0px 10px 13px -6px rgba(80,80,80, 0.2),0px 21px 33px 3px rgba(80,80,80, 0.14),0px 8px 40px 7px rgba(80,80,80, 0.12)',
    '0px 10px 14px -6px rgba(80,80,80, 0.2),0px 22px 35px 3px rgba(80,80,80, 0.14),0px 8px 42px 7px rgba(80,80,80, 0.12)',
    '0px 11px 14px -7px rgba(80,80,80, 0.2),0px 23px 36px 3px rgba(80,80,80, 0.14),0px 9px 44px 8px rgba(80,80,80, 0.12)',
    '0px 11px 15px -7px rgba(80,80,80, 0.2),0px 24px 38px 3px rgba(80,80,80, 0.14),0px 9px 46px 8px rgba(80,80,80, 0.12)',
  ],
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        sx: {
          mb: 2,
          width: '100%',
          '[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button':
          {
            webkitAppearance: 'none',
            mozAppearance: 'none',
            appearance: 'none',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        sx: {
          py: 1,
          fontWeight: 500,
          fontFamily: 'Poppins, sans-serif !important',
          fontSize: '18px',
          textTransform: 'inherit !important',
          [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
            fontSize: '20px',
          },
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: '16px',
            px: 1.5,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
        display: 'inline-block',
        fontWeight: 500,
        textTransform: 'inherit',
        color: 'secondary.dark',
        sx: {
          fontFamily: 'Poppins, sans-serif !important',
          fontSize: '16px',
          transition: '0.5s',
          '&:hover': {
            color: 'primary.dark',
            transition: '0.5s',
          },
          [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
            fontSize: '20px',
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: '16px',
          },
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        size: 30,
      },
    },
  },
});

export default Theme;
