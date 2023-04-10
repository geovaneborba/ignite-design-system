import { useState } from 'react'
import { Button, Toast, ToastProps } from '@gn-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    const handleOpenToast = () => {
      setOpen(true)
    }

    const handleCloseToast = () => {
      setOpen(false)
    }

    return (
      <>
        <Button variant={'primary'} onClick={handleOpenToast}>
          Show Toast
        </Button>

        <Toast {...args} open={open} onClose={handleCloseToast} />
      </>
    )
  },
}
