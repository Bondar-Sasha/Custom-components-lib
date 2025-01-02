import type { Meta, StoryObj } from '@storybook/react'
import BasicButton from './BasicButton'

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
            type: {},
         },
      },
      className: {
         control: 'text',
         description: 'Your customs styles for button.',
         table: {
            type: {},
         },
      },

      size: {
         options: ['small', 'medium', 'large'],
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: 'medium' },
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
            type: {},
         },
         description: 'Button type.',
      },
      disabled: {
         control: {
            type: 'boolean',
         },
         table: {
            type: {},
         },
         description: 'Is button disabled.',
      },
      onClick: {
         control: 'object',
         description: 'Event triggered when the button was clicked.',
      },
      onFocus: {
         control: 'object',
         description: 'Event triggered when the button field receives focus.',
      },
      onBlur: {
         control: 'object',
         description: 'Event triggered when the button field loses focus.',
      },
   },
   args: {
      value: 'click',
   },
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
