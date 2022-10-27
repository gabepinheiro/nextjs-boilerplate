import { extendTheme } from '@/lib/utilities/extend-theme'
import { theme as chakraTheme, ThemeConfig } from '@chakra-ui/theme'

export const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const colors = {
  brand: {
    gray: {
      50: '#ddd',
    },
  },
}

export const extendedTheme = extendTheme({ config, colors })

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    ...colors,
  },
  config,
}

export type DefaultTheme = typeof theme
