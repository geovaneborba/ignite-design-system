import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@gn-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento box</Text>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
