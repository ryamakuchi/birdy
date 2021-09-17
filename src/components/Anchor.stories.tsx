import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Anchor, AnchorProps } from './Anchor'

export default {
  title: 'Anchor',
  component: Anchor,
} as Meta<typeof Anchor>

const Template: Story<AnchorProps> = (args) => (
  <div>
    <Anchor {...args}>birdy</Anchor>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  href: 'https://github.com/ryamakuchi/birdy',
}
