import React, { FC, useState, ChangeEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import BasicSwitchTemplate, { BasicSwitchProps } from './BasicSwitch'

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
      disabled: {
         control: {
            type: 'boolean',
         },
         table: {
            type: {},
         },
         description: 'Is switch disabled.',
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
            story: 'Switch with label.',
         },
      },
   },
   args: { label: 'label' },
}
