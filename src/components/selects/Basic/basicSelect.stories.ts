import type { Meta, StoryObj } from '@storybook/react'
import BasicSelect from './BasicSelect'

const meta: Meta<typeof BasicSelect> = {
   title: 'Selects/BasicSelect',
   component: BasicSelect,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      prompt: {
         control: 'text',
         description: 'Prompt in the select.',
         table: {
            defaultValue: { summary: 'choice' },
            type: {},
         },
      },
      currentValue: {
         control: 'text',
         description: 'Controlled value in the select field.',
         table: {
            type: {},
         },
      },
      className: {
         control: 'text',
         description: 'Styles for the select.',
         table: {
            type: {},
         },
      },
      clear: {
         control: 'boolean',
         description: 'Clear the select.',
         table: {
            defaultValue: { summary: 'false' },
            type: {},
         },
      },
      options: {
         control: 'object',
         description: 'Options in the select.',
         table: {
            type: {},
         },
      },
      onClick: {
         control: 'object',
         description: 'Event triggered when the select was clicked.',
      },
      onChange: {
         control: 'object',
         description: 'Function for making select component controlled.',
      },
      onFocus: {
         control: 'object',
         description: 'Event triggered when the select field receives focus.',
      },
      onBlur: {
         control: 'object',
         description: 'Event triggered when the select field loses focus.',
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
            story: 'Select with some styles.',
         },
      },
   },
   args: {},
}
