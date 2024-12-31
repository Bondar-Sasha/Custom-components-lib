import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'

import BasicModalTemplate, { BasicModalProps } from './BasicModal'
import BasicButton from '../../buttons/BasicButton/BasicButton'
import { createPortal } from 'react-dom'

const BasicModal: FC<BasicModalProps> = props => {
   const [modalState, setModalState] = useState<boolean>(false)

   const handleClose = () => {
      setModalState(false)
   }

   return (
      <>
         <BasicButton
            onClick={() => {
               setModalState(true)
            }}
            variant="contained"
            size="small"
            value="show"
         />
         {createPortal(
            <BasicModalTemplate {...props} open={modalState} onClose={handleClose}>
               <h2>Text in a modal</h2>
               <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
               <BasicButton variant="outlined" value="close" onClick={handleClose} />
            </BasicModalTemplate>,
            document.body,
         )}
      </>
   )
}

const meta: Meta<typeof BasicModal> = {
   title: 'Modals/Basic',
   component: BasicModal,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs', 'wip'],
   argTypes: {},
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
