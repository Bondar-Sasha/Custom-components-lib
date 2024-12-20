import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent, FC, useState } from 'react'

import BasicInputTemplate, { InputProps } from './BasicInput'

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
      error: {
         control: 'boolean',
         description: 'Behaver when error.',
         defaultValue: false,
      },
      variant: {
         control: {
            type: 'select',
            options: ['outlined', 'filled', 'standard'],
         },
         defaultValue: 'standard',
         description: 'Input kind.',
      },
   },
   args: {
      error: false,
   },
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
