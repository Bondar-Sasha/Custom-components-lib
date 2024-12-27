import type { Meta, StoryObj } from '@storybook/react'
import SimpleButton, { defaultProps } from './SimpleButton'
import buttonVariants from '../utils/variants'
import buttonSizes from '../utils/sizes'

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
         table: {
            defaultValue: { summary: String(defaultProps.value) },
            type: {},
         },
      },
      variant: {
         options: buttonVariants,
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: defaultProps.variant },
            type: {},
         },
         description: 'Button kind.',
      },
      size: {
         options: Object.keys(buttonSizes) as Array<keyof typeof buttonSizes>,
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: defaultProps.size },
            type: {},
         },
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
            story: 'Button without passed styles.',
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
