import type { SxProps, Theme } from '@mui/material/styles'
import type { SelectProps } from '@mui/material/Select'

export const textFieldStyles: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    color: 'black',
    '& fieldset': {
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },

  '& .MuiSelect-select': {
    textAlign: 'left',
    color: 'black',
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },

  '& .MuiOutlinedInput-input': {
    color: 'black',
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
}

export const selectMenuProps: SelectProps['MenuProps'] = {
  PaperProps: {
    sx: {
      '& .MuiMenuItem-root': {
        color: 'black',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '&.Mui-selected': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
  },
}
