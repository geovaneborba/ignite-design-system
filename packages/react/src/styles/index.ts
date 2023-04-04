import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
