import React, { FC, useState, ChangeEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import switchSizes from '../utils/sizes'
import IOSSwitchTemplate, { defaultProps, IOSSwitchProps } from './IOSSwitch'

const IOSSwitch: FC<IOSSwitchProps> = props => {
   const [state, setState] = useState<boolean>(false)
   const handleClick: ChangeEventHandler<HTMLInputElement> = () => {
      setState(prev => !prev)
   }
   return <IOSSwitchTemplate checked={state} {...props} onChange={handleClick} />
}

const meta: Meta<typeof IOSSwitch> = {
   title: 'Switches/IOSSwitch',
   component: IOSSwitch,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      label: {
         control: 'text',
         description: 'Label for switch.',
         table: {
            defaultValue: { summary: defaultProps.label },
            type: {},
         },
      },

      switchSize: {
         options: Object.keys(switchSizes) as Array<keyof typeof switchSizes>,
         control: {
            type: 'select',
         },
         description: 'Switch size.',
         table: {
            defaultValue: { summary: defaultProps.switchSize },
            type: {},
         },
      },

      checked: {
         control: 'boolean',
         description: 'Whether the switch is checked.',
         table: {
            defaultValue: { summary: String(defaultProps.checked) },
            type: {},
         },
      },
   },
   args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Basic switch.',
         },
      },
   },
}
export const BasicWithLabel: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Basic switch with label.',
         },
      },
   },
   args: { label: 'label', switchSize: 'small' },
}
