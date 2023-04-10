import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const TooltipProvider = styled(Tooltip.Provider, {})
export const TooltipContainer = styled(Tooltip.Root, {})
export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',

  span: {
    color: '$gray100',
    fontFamily: '$default',
    fontWeight: '$medium',
  },

  // "&[data-state='delayed-open'][data-side='top']": {
  //   animationName: 'slideDownAndFade',
  // },
  // "&[data-state='delayed-open'][data-side='right']": {
  //   animationName: 'slideLeftAndFade',
  // },
  // "&[data-state='delayed-open'][data-side='bottom']": {
  //   animationName: 'slideUpAndFade',
  // },
  // "&[data-state='delayed-open'][data-side='left']": {
  //   animationName: 'slideRightAndFade',
  // },
})
