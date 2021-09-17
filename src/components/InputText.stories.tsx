import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { InputText, InputTextProps } from './InputText'

export default {
  title: 'InputText',
  component: InputText,
} as Meta<typeof InputText>

const Template: Story<InputTextProps> = (args) => {
  return (
    <div>
      <InputText {...args} />
    </div>
  )
}

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
  value: 'バリュー',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  onChange: action('input!'),
}

export const AutoComplete = Template.bind({})
AutoComplete.args = {
  label: '名前',
  value: '',
  placeholder: 'プレースホルダー',
  type: 'text',
  autoComplete: 'name',
  size: 'medium',
  onChange: action('input!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'テキスト',
  value: 'バリュー',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  disabled: true,
  onChange: action('input!'),
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  label: 'テキスト',
  value: 'バリュー',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  readonly: true,
  onChange: action('input!'),
}

export const Error = Template.bind({})
Error.args = {
  label: 'テキスト',
  value: 'バリュー',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  error: true,
  onChange: action('input!'),
}
