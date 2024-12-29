import type { Meta, StoryObj } from '@storybook/react'
import OutlinedButton, { defaultProps } from './OutlinedButton'
import buttonSizes from '../../utils/sizes'
import { defaultPrototypeProps } from '../../prototype/Prototype'

const preparedProps = {
   ...defaultPrototypeProps,
   defaultProps,
}

const meta: Meta<typeof OutlinedButton> = {
   title: 'Buttons/Basic/OutlinedButton',
   component: OutlinedButton,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      value: {
         control: 'text',
         description: 'Text in button.',
         table: {
            defaultValue: { summary: String(preparedProps.value) },
            type: {},
         },
      },

      size: {
         options: Object.keys(buttonSizes) as Array<keyof typeof buttonSizes>,
         control: {
            type: 'select',
         },
         table: {
            defaultValue: { summary: preparedProps.size },
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
