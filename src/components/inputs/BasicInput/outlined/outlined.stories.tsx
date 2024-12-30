import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent, FC, useState } from 'react'

import OutlinedInputTemplate, { defaultProps, OutlinedInputProps } from './OutlinedInput'
import { defaultPrototypeProps } from '../../prototype/Prototype'

const OutlinedInput: FC<OutlinedInputProps> = props => {
   const [value, setValue] = useState<string>('')

   const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => setValue(() => e.target.value)

   return <OutlinedInputTemplate value={value} onChange={handleSetValue} {...props} />
}

const preparedProps = { ...defaultPrototypeProps, ...defaultProps }

const meta: Meta<typeof OutlinedInput> = {
   title: 'Inputs/Basic/OutlinedInput',
   component: OutlinedInput,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {
      bgColor: {
         control: 'text',
         table: {
            defaultValue: { summary: preparedProps.bgColor },
            type: {},
         },
         description: 'Input background.',
      },
      error: {
         control: 'boolean',
         description: 'Behaver when error.',
         table: {
            defaultValue: { summary: String(preparedProps.error) },
            type: {},
         },
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
            story: 'Input without styles.',
         },
      },
   },
}

// export const Outlined: Story = {
//    parameters: {
//       docs: {
//          description: {
//             story: 'Text input',
//          },
//       },
//    },
//    args: {
//       variant: 'outlined',
//    },
// }
// export const Standard: Story = {
//    parameters: {
//       docs: {
//          description: {
//             story: 'Standard input',
//          },
//       },
//    },
//    args: {
//       variant: 'standard',
//    },
// }
// export const Filled: Story = {
//    parameters: {
//       docs: {
//          description: {
//             story: 'Filled input',
//          },
//       },
//    },
//    args: {
//       variant: 'filled',
//    },
// }
