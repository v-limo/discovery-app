import { createTheme } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ff4081',
    },
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ff4081',
    },
    mode: 'light',
  },
})

export { darkTheme, lightTheme }
