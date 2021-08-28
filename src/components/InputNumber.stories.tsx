import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { InputNumber, InputNumberProps } from './InputNumber'

export default {
  title: 'InputNumber',
  component: InputNumber,
} as Meta

const Template: Story<InputNumberProps> = (args) => {
  return (
    <div>
      <InputNumber {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'ナンバー',
  placeholder: '20',
  size: 'medium',
  onChange: action('input!'),
}

export const HasValue = Template.bind({})
HasValue.args = {
  label: 'ナンバー',
  value: 1,
  placeholder: '20',
  size: 'medium',
  onChange: action('input!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'ナンバー',
  value: 1,
  placeholder: '20',
  size: 'medium',
  disabled: true,
  onChange: action('input!'),
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  label: 'ナンバー',
  value: 1,
  placeholder: '20',
  size: 'medium',
  readonly: true,
  onChange: action('input!'),
}

export const Error = Template.bind({})
Error.args = {
  label: 'ナンバー',
  value: 1,
  placeholder: '20',
  size: 'medium',
  error: true,
  onChange: action('input!'),
}
