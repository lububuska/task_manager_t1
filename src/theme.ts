import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat Alternates",
    fontWeightMedium: 400,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})