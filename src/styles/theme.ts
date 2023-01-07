import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Roboto',
        bg: 'white',
        color: 'gray.500',
      },
    },
  },
})
