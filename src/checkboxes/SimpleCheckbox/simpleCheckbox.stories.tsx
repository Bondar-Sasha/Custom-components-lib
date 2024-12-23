import React, { FC, useState, MouseEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxPossibleSizes } from '../utils/sizes'
import SimpleCheckboxTemplate, { defaultProps, ISimpleCheckbox } from './SimpleCheckbox'

const SimpleCheckbox: FC<ISimpleCheckbox> = props => {
   const [state, setState] = useState<boolean>(false)
   const handleClick: MouseEventHandler<HTMLInputElement> = () => {
      setState(prev => !prev)
   }
   return <SimpleCheckboxTemplate {...props} checked={state} onClick={handleClick} />
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
         defaultValue: defaultProps.label,
      },

      checkboxSize: {
         control: {
            type: 'select',
            options: Object.keys(CheckboxPossibleSizes) as Array<keyof typeof CheckboxPossibleSizes>,
         },
         defaultValue: defaultProps.checkboxSize,
         description: 'Checkbox size.',
      },
      checked: {
         control: 'boolean',
         description: 'Whether the checkbox is checked.',
         defaultValue: defaultProps.label,
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
