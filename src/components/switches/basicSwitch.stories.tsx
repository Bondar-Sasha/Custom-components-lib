import React, { FC, useState, ChangeEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import switchSizes from './utils/sizes'
import BasicSwitchTemplate, { BasicSwitchProps } from './'

const BasicSwitch: FC<BasicSwitchProps> = props => {
   const [state, setState] = useState<boolean>(false)
   const handleClick: ChangeEventHandler<HTMLInputElement> = () => {
      setState(prev => !prev)
   }
   return <BasicSwitchTemplate checked={state} {...props} onChange={handleClick} />
}

const meta: Meta<typeof BasicSwitch> = {
   title: 'Switches/BasicSwitch',
   component: BasicSwitch,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      label: {
         control: 'text',
         description: 'Label for switch.',
         table: {
            defaultValue: { summary: '' },
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
            defaultValue: { summary: 'medium' },
            type: {},
         },
      },
      variant: {
         options: ['iOS'],
         control: {
            type: 'select',
         },
         description: 'Switch variant.',
         table: {
            defaultValue: { summary: 'iOS' },
            type: {},
         },
      },

      checked: {
         control: 'boolean',
         description: 'Whether the switch is checked.',
         table: {
            defaultValue: { summary: 'false' },
            type: {},
         },
      },
      onClick: {
         control: 'object',
         description: 'Event triggered when the switch was clicked.',
      },
      onFocus: {
         control: 'object',
         description: 'Event triggered when the switch field receives focus.',
      },
      onBlur: {
         control: 'object',
         description: 'Event triggered when the switch field loses focus.',
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
