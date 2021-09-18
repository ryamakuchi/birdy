import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Checkbox, CheckboxProps } from './Checkbox'

const CheckboxState = () => {
  const [checkedCheckbox, setCheckedCheckbox] = useState<string[]>([])
  return {
    checked: checkedCheckbox,
    setChecked: (ch: string[]): void => setCheckedCheckbox(ch),
  }
}

const args: CheckboxProps = {
  name: 'checkbox',
  value: 'check',
  size: 'medium',
  checkedValues: CheckboxState().checked,
  disabled: false,
  readonly: false,
  error: false,
  onChange: (values: string[]) => {
    action(values.join('!'))
    CheckboxState().setChecked(values)
  },
  children: 'Checkbox',
}

export default {
  title: 'Checkbox',
  component: Checkbox,
  args,
} as Meta<typeof Checkbox>

const Template: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} />
  </div>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({
  args: {
    disabled: true,
  },
})

export const Readonly = Template.bind({
  args: {
    readonly: true,
  },
})

export const Error = Template.bind({
  args: {
    error: true,
  },
})
