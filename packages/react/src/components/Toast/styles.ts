import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider)

export const ToastContainer = styled(Toast.Root, {
  boxSizing: 'border-box',
  minWidth: 360,
  minHeight: 82,
  width: 360,
  height: 82,
  padding: '$3 $5',
  gap: '$1',

  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',

  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$white',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastCloseButton = styled(Toast.Close, {
  position: 'absolute',
  right: 16,
  top: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  background: 'transparent',
  cursor: 'pointer',

  svg: {
    width: 20,
    height: 20,
    color: '$gray200',
  },
})
