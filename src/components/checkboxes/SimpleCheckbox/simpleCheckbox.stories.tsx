import React, { FC, useState, MouseEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import checkboxSizes from '../utils/sizes'
import SimpleCheckboxTemplate, { defaultProps, ISimpleCheckbox } from './SimpleCheckbox'

const SimpleCheckbox: FC<ISimpleCheckbox> = props => {
   const [state, setState] = useState<boolean>(false)
   const handleClick: MouseEventHandler<HTMLInputElement> = () => {
      setState(prev => !prev)
   }
   return <SimpleCheckboxTemplate checked={state} {...props} onClick={handleClick} />
}

const meta: Meta<typeof SimpleCheckbox> = {
   title: 'Checkboxes/SimpleCheckbox',
   component: SimpleCheckbox,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      label: {
         control: 'text',
         description: 'Label for checkbox.',
         table: {
            defaultValue: { summary: defaultProps.label },
            type: {},
         },
      },

      checkboxSize: {
         options: Object.keys(checkboxSizes) as Array<keyof typeof checkboxSizes>,
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: defaultProps.checkboxSize },
            type: {},
         },
         description: 'Checkbox size.',
      },
      checked: {
         control: 'boolean',
         description: 'Whether the checkbox is checked.',
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
            story: 'Basic checkbox.',
         },
      },
   },
}
export const BasicWithLabel: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Basic checkbox with label.',
         },
      },
   },
   args: { label: 'label', checkboxSize: 'small' },
}
export const BasicDisabled: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Basic checkbox with label.',
         },
      },
   },
   args: { label: 'disabled', disabled: true },
}
