import React from 'react'
import { Story, Meta } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

const Template: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args}>Checkbox</Checkbox>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'checkbox',
  value: 'check',
  size: 'medium',
  checkedValues: [],
  disabled: false,
  readonly: false,
  error: false,
  onChange: action('value!'),
}

export const Checked = Template.bind({})
Checked.args = {
  name: 'checkbox',
  value: 'check',
  checkedValues: ['check'],
  onChange: action('value!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'checkbox',
  value: 'check',
  checkedValues: [],
  disabled: true,
  onChange: action('value!'),
}

export const Readonly = Template.bind({})
Readonly.args = {
  name: 'checkbox',
  value: 'check',
  checkedValues: [],
  readonly: true,
  onChange: action('value!'),
}

export const Error = Template.bind({})
Error.args = {
  name: 'checkbox',
  value: 'check',
  checkedValues: [],
  error: true,
  onChange: action('value!'),
}
