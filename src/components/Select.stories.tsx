import React from 'react'
import { Story, Meta } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Select, SelectProps } from './Select'

export default {
  title: 'Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => (
  <div>
    <Select {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'セレクトボックス',
  name: 'select',
  value: '',
  values: ['アメリカ', 'イギリス', '日本'],
  placeholder: '選択してください',
  disabled: false,
  readonly: false,
  size: 'medium',
  error: false,
  onChange: action('select!'),
}

export const Selected = Template.bind({})
Selected.args = {
  label: 'セレクトボックス',
  name: 'select',
  value: '日本',
  values: ['アメリカ', 'イギリス', '日本'],
  placeholder: '選択してください',
  onChange: action('select!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'セレクトボックス',
  name: 'select',
  value: '日本',
  values: ['アメリカ', 'イギリス', '日本'],
  disabled: true,
  onChange: action('input!'),
}

export const Readonly = Template.bind({})
Readonly.args = {
  label: 'セレクトボックス',
  name: 'select',
  value: '日本',
  values: ['アメリカ', 'イギリス', '日本'],
  readonly: true,
  onChange: action('select!'),
}

export const Error = Template.bind({})
Error.args = {
  label: 'セレクトボックス',
  name: 'select',
  value: '日本',
  values: ['アメリカ', 'イギリス', '日本'],
  error: true,
  onChange: action('input!'),
}
