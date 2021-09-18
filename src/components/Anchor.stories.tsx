import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Anchor, AnchorProps } from './Anchor'

const args: AnchorProps = {
  href: 'https://github.com/ryamakuchi/birdy',
  children: 'birdy',
}

export default {
  title: 'Anchor',
  component: Anchor,
  args,
} as Meta<typeof Anchor>

const Template: Story<AnchorProps> = (args) => (
  <div>
    <Anchor {...args} />
  </div>
)

export const Default = Template.bind({})
