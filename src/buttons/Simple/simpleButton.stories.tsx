import type { Meta, StoryObj } from '@storybook/react'
import SimpleButton from './SimpleButton'

const meta: Meta<typeof SimpleButton> = {
   title: 'Buttons/SimpleButton',
   component: SimpleButton,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      value: {
         control: 'text',
         description: 'Text in button.',
         defaultValue: 'click',
      },
      variant: {
         control: {
            type: 'select',
            options: ['outlined', 'text', 'contained'],
         },
         defaultValue: 'contained',
         description: 'Button kind.',
      },
      size: {
         control: {
            type: 'select',
            options: ['small', 'medium', 'large'],
         },
         defaultValue: 'medium',
         description: 'Button size.',
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
            story: 'Button without styles.',
         },
      },
   },
}

export const Text: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Text button',
         },
      },
   },
   args: {
      variant: 'text',
      size: 'small',
   },
}
export const Outlined: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Outlined button',
         },
      },
   },
   args: {
      variant: 'outlined',
      size: 'medium',
   },
}
export const Contained: Story = {
   parameters: {
      docs: {
         description: {
            story: 'Contained button',
         },
      },
   },
   args: {
      variant: 'contained',
      size: 'large',
   },
}
