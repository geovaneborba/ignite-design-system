import { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'
import React from 'react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text size="sm">Accept terms</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
