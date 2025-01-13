import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent, FC, useState } from 'react'

import BasicInputTemplate, { BasicInputProps } from './BasicInput'

const BasicInput: FC<BasicInputProps> = props => {
   const [valueState, setValue] = useState<string>('')

   const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => setValue(() => e.target.value)

   return <BasicInputTemplate onChange={handleSetValue} {...props} value={valueState} />
}

const meta: Meta<typeof BasicInput> = {
   title: 'Inputs/BasicInput',
   component: BasicInput,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      placeholder: {
         control: 'text',
         table: {
            type: {},
         },
         description: 'Input placeholder.',
      },
      classes: {
         control: 'object',
         table: {
            type: {},
         },
         description: 'Classes for each part of the input.',
      },
      value: {
         control: 'text',
         table: {
            type: {},
         },
         description: 'Input value.',
      },
      error: {
         control: 'boolean',
         description: 'Behaver when error.',
         table: {
            defaultValue: { summary: 'false' },
            type: {},
         },
      },
      variant: {
         options: ['filled', 'standard', 'outlined'],
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: 'standard' },
            type: {},
         },
         description: 'Input variant.',
      },
      onChange: {
         control: 'object',
         description: 'Event triggered when the value changes.',
      },
      onFocus: {
         control: 'object',
         description: 'Event triggered when the input field receives focus.',
      },
      onBlur: {
         control: 'object',
         description: 'Event triggered when the input field loses focus.',
      },
   },
   args: { placeholder: 'write' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Input without passed styles.',
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
