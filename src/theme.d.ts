import '@mui/material/Paper'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    cardSquare: true
  }
}