import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipContainer, TooltipContent, TooltipProvider } from './styles'
import { Children, ComponentProps, ReactNode } from 'react'

export type TooltipProps = ComponentProps<typeof TooltipContainer> & {
  content?: string
  children?: ReactNode
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipRadix.Trigger asChild>{props.children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent side="top">
            <span>{props.content}</span>
            <TooltipRadix.Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
