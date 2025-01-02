import React, { FC, useState, MouseEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import BasicCheckboxTemplate, { BasicCheckboxProps } from './BasicCheckbox'

const BasicCheckbox: FC<BasicCheckboxProps> = props => {
   const [state, setState] = useState<boolean>(false)
   const handleClick: MouseEventHandler<HTMLInputElement> = () => {
      setState(prev => !prev)
   }
   return <BasicCheckboxTemplate checked={state} {...props} onClick={handleClick} />
}

const meta: Meta<typeof BasicCheckbox> = {
   title: 'Checkboxes/BasicCheckbox',
   component: BasicCheckbox,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      label: {
         control: 'text',
         description: 'Label for checkbox.',
         table: {
            type: {},
         },
      },
      classes: {
         control: 'object',
         table: {
            type: {},
         },
         description: 'Classes for each part of the checkbox.',
      },

      checked: {
         control: 'boolean',
         description: 'Whether the checkbox is checked.',
         table: {
            defaultValue: { summary: 'false' },
            type: {},
         },
      },
      onClick: {
         control: 'object',
         description: 'Event triggered when the checkbox was clicked.',
      },
      onFocus: {
         control: 'object',
         description: 'Event triggered when the checkbox field receives focus.',
      },
      onBlur: {
         control: 'object',
         description: 'Event triggered when the checkbox field loses focus.',
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
            story: 'Checkbox.',
         },
      },
   },
}
export const WithLabel: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Checkbox with label.',
         },
      },
   },
   args: { label: 'label' },
}
export const Disabled: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Checkbox with label.',
         },
      },
   },
   args: { label: 'disabled', disabled: true },
}
