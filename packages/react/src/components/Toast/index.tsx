import { ComponentProps } from 'react'
import {
  ToastCloseButton,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from './styles'
import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title?: string
  description?: string
  onClose?: () => void
  open?: boolean
}

export function Toast(props: ToastProps) {
  return (
    <ToastProvider duration={props.duration}>
      <ToastContainer open={props.open}>
        <ToastTitle>{props.title}</ToastTitle>
        <ToastDescription>{props.description}</ToastDescription>
        <ToastCloseButton onClick={props.onClose}>
          <X />
        </ToastCloseButton>
      </ToastContainer>

      <ToastRadix.Viewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
