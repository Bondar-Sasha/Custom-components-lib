import type { Meta, StoryObj } from '@storybook/react'
import SimpleButton from './SimpleButton'
import { ButtonVariants } from '../utils/variants'
import { ButtonPossibleSizes } from '../utils/sizes'

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
            options: Object.keys(ButtonVariants) as Array<keyof typeof ButtonVariants>,
         },
         defaultValue: 'contained',
         description: 'Button kind.',
      },
      size: {
         control: {
            type: 'select',
            options: Object.keys(ButtonPossibleSizes) as Array<keyof typeof ButtonPossibleSizes>,
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
