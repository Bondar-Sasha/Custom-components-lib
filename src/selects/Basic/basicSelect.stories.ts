import type { Meta, StoryObj } from '@storybook/react'
import BasicSelect, { defaultProps } from './BasicSelect'

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
         defaultValue: defaultProps.prompt,
      },
      clear: {
         control: 'boolean',
         description: 'Clear the select.',
         defaultValue: defaultProps.clear,
      },
      options: {
         control: 'object',
         description: 'Options in the select.',
         defaultValue: defaultProps.options,
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
   args: {
      prompt: 'age',
   },
}
