import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent, FC, useState } from 'react'

import BasicInputTemplate, { defaultProps, InputProps } from './BasicInput'
import inputVariants from '../utils/variants'

const BasicInput: FC<InputProps> = props => {
   const [value, setValue] = useState<string>('')

   const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => setValue(() => e.target.value)

   return <BasicInputTemplate value={value} onChange={handleSetValue} {...props} />
}

const meta: Meta<typeof BasicInput> = {
   title: 'Inputs/BasicInput',
   component: BasicInput,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      variant: {
         control: {
            type: 'select',
            options: inputVariants,
         },
         table: {
            defaultValue: { summary: defaultProps.variant },
            type: {},
         },
         description: 'Input kind.',
      },
      bgColor: {
         control: 'text',
         table: {
            defaultValue: { summary: defaultProps.bgColor },
            type: {},
         },
         description: 'Button background.',
      },
      error: {
         control: 'boolean',
         description: 'Behaver when error.',
         table: {
            defaultValue: { summary: String(defaultProps.error) },
            type: {},
         },
      },
   },
   args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Input without styles.',
         },
      },
   },
}

export const Outlined: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Text input',
         },
      },
   },
   args: {
      variant: 'outlined',
   },
}
export const Standard: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Standard input',
         },
      },
   },
   args: {
      variant: 'standard',
   },
}
export const Filled: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Filled input',
         },
      },
   },
   args: {
      variant: 'filled',
   },
}
