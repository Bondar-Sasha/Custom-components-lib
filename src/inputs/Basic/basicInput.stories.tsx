import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent, FC, useState } from 'react'

import BasicInputTemplate, { InputProps } from './BasicInput'
import { InputVariants } from '../utils/variants'

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
            options: Object.keys(InputVariants) as Array<keyof typeof InputVariants>,
         },
         defaultValue: 'standard',
         description: 'Input kind.',
      },
      bgColor: { control: 'text', defaultValue: '#c5c5c5', description: 'Button background.' },
      error: {
         control: 'boolean',
         description: 'Behaver when error.',
         defaultValue: false,
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
