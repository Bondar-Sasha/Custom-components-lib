import React, { FC, useState } from 'react'
import { render, screen } from '@testing-library/react'
import BasicModal, { BasicModalProps } from './BasicModal'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

const ModalWithState: FC<BasicModalProps> = props => {
   const [isOpen, setIsOpen] = useState(false)

   const handleOpen = () => setIsOpen(true)
   const handleClose = () => setIsOpen(false)

   return (
      <>
         <button onClick={handleOpen} data-testid="open-button">
            Open Modal
         </button>
         <BasicModal open={isOpen} onClose={handleClose}>
            {props.children}
            <button data-testid="close-button" onClick={handleClose}>
               Close
            </button>
         </BasicModal>
      </>
   )
}

describe('BasicModal', () => {
   it('open and close modal', async () => {
      render(
         <ModalWithState>
            <div>modal</div>
         </ModalWithState>,
      )

      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()

      await userEvent.click(screen.getByTestId('open-button'))
      expect(screen.getByTestId('modal')).toBeInTheDocument()

      await userEvent.click(screen.getByTestId('close-button'))
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
   })
})
