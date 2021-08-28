import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Textarea, TextareaProps } from './Textarea'

export default {
  title: 'Textarea',
  component: Textarea,
} as Meta

const Template: Story<TextareaProps> = (args) => (
  <div>
    <Textarea {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'テキスト',
  value: '',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  onChange: action('input!'),
}

export const HasValue = Template.bind({})
HasValue.args = {
  label: 'テキスト',
  value: 'てきすと',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  onChange: action('input!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'テキスト',
  value: 'てきすと',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  disabled: true,
  onChange: action('input!'),
}

export const Readonly = Template.bind({})
Readonly.args = {
  label: 'テキスト',
  value: 'てきすと',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  readonly: true,
  onChange: action('input!'),
}

export const Error = Template.bind({})
Error.args = {
  label: 'テキスト',
  value: 'てきすと',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  error: true,
  onChange: action('input!'),
}

export const FixedHeight = Template.bind({})
FixedHeight.args = {
  label: 'テキスト',
  value: 'てきすと',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  fixedHeight: '200px',
  onChange: action('input!'),
}
