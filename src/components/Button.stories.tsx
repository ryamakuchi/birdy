import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => (
  <div>
    <div className="mb-2">
      <Button {...args}>button</Button>
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  type: 'button',
  color: 'primary',
  size: 'medium',
  disabled: false,
  onClick: action('click!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'button',
  color: 'primary',
  size: 'medium',
  disabled: true,
  onClick: () => action('click!'),
}
