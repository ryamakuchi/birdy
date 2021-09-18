import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button, ButtonProps } from './Button'

const args: ButtonProps = {
  type: 'button',
  color: 'text',
  size: 'medium',
  disabled: false,
  onClick: action('click!'),
  children: 'button',
}

export default {
  title: 'Button',
  component: Button,
  args,
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => (
  <div>
    <div>
      <Button {...args} />
    </div>
  </div>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({
  args: {
    disabled: true,
  },
})
