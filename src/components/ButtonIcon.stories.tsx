import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ButtonIcon, ButtonIconProps } from './ButtonIcon'
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
} as Meta<typeof ButtonIcon>

const Template: Story<ButtonIconProps> = (args) => (
  <div>
    <div className="mb-2">
      <ButtonIcon {...args} icon={faKiwiBird} />
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
