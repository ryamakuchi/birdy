import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ButtonIcon, ButtonIconProps } from './ButtonIcon'
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons'

const args: ButtonIconProps = {
  type: 'button',
  color: 'primary',
  size: 'medium',
  disabled: false,
  icon: faKiwiBird,
  onClick: action('click!'),
}

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  args,
} as Meta<typeof ButtonIcon>

const Template: Story<ButtonIconProps> = (args) => (
  <div>
    <div>
      <ButtonIcon {...args} />
    </div>
  </div>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({ disabled: true })
