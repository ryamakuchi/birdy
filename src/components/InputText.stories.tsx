import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { InputText, InputTextProps } from './InputText'

export default {
  title: 'InputText',
  component: InputText,
} as Meta

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
  onChange: (val) => action(val),
}

export const HasValue = Template.bind({})
HasValue.args = {
  label: 'テキスト',
  value: 'バリュー',
  placeholder: 'プレースホルダー',
  type: 'text',
  size: 'medium',
  onChange: (val) => action(val),
}
