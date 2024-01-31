import { createTheme } from '@mui/material';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8000',
      light: '#FFFFFF'
    },
    secondary: {
      main: '#0A3847',
      light: '#FFFFFF'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          color: '#FFFFFF',
          fontWeight: 700
        })
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(!ownerState.disableGutters && {
            [theme.breakpoints.up('md')]: {
              padding: '0 56px'
            }
          })
        })
      }
    }
  },
  typography: {
    body1: {
      color: '#205A6D',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '18px'
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '20px'
    }
  }
});
