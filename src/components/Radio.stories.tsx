import React from 'react'
import { Story, Meta } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Radio, RadioProps } from './Radio'

export default {
  title: 'Radio',
  component: Radio,
} as Meta

const Template: Story<RadioProps> = (args) => (
  <div>
    <Radio {...args}>Radio</Radio>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'radio',
  value: 'radio',
  checkedValue: '',
  size: 'medium',
  readonly: false,
  required: false,
  error: false,
  onChange: action('value!'),
}

export const Checked = Template.bind({})
Checked.args = {
  name: 'radio',
  value: 'radio',
  checkedValue: 'radio',
  onChange: action('value!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'radio',
  value: 'radio',
  checkedValue: 'radio',
  disabled: true,
  onChange: action('value!'),
}

export const Readonly = Template.bind({})
Readonly.args = {
  name: 'radio',
  value: 'radio',
  checkedValue: 'radio',
  readonly: true,
  onChange: action('value!'),
}

export const Error = Template.bind({})
Error.args = {
  name: 'radio',
  value: 'radio',
  checkedValue: 'radio',
  error: true,
  onChange: action('value!'),
}
