import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@gn-ignite-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    content: '21 de Outubro - Indisponível',
    children: <Button>Tooltip Example</Button>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
