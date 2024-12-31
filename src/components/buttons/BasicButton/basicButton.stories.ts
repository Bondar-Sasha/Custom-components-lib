import type { Meta, StoryObj } from '@storybook/react'
import BasicButton from './BasicButton'
import buttonSizes from '../utils/sizes'
import { defaultPrototypeProps } from '../prototype/Prototype'

const meta: Meta<typeof BasicButton> = {
   title: 'Buttons/BasicButtons',
   component: BasicButton,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      value: {
         control: 'text',
         description: 'Text in button.',
         table: {
            defaultValue: { summary: String(defaultPrototypeProps.value) },
            type: {},
         },
      },
      className: {
         control: 'text',
         description: 'Your customs styles for button.',
         table: {
            defaultValue: { summary: String(defaultPrototypeProps.value) },
            type: {},
         },
      },

      size: {
         options: Object.keys(buttonSizes) as Array<keyof typeof buttonSizes>,
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: defaultPrototypeProps.size },
            type: {},
         },
         description: 'Button size.',
      },

      variant: {
         options: ['text', 'contained', 'outlined'],
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: 'contained' },
            type: {},
         },
         description: 'Button variant.',
      },
      type: {
         options: ['button', 'reset', 'submit'],
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: 'contained' },
            type: {},
         },
         description: 'Button type.',
      },
      disabled: {
         control: {
            type: 'boolean',
         },
         table: {
            defaultValue: { summary: 'false' },
            type: {},
         },
         description: 'Is button disabled.',
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
            story: 'Button without passed styles.',
         },
      },
   },
}
export const Text: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Text button.',
         },
      },
   },
   args: {
      variant: 'text',
   },
}
export const Contained: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Contained button.',
         },
      },
   },
   args: {
      variant: 'contained',
   },
}
export const Outlined: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Outlined button.',
         },
      },
   },
   args: {
      variant: 'outlined',
   },
}
