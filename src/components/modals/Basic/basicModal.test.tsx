import React, { FC, useState } from 'react'
import { render, screen } from '@testing-library/react'
import BasicModal, { BasicModalProps } from './BasicModal'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const ModalWithState: FC<BasicModalProps> = ({ open, ...props }) => {
   const [isOpen, setIsOpen] = useState(open)

   const handleOpen = () => setIsOpen(true)
   const handleClose = () => setIsOpen(false)

   return (
      <>
         <button onClick={handleOpen} data-testid="open-button">
            Open Modal
         </button>
         <BasicModal {...props} open={isOpen} onClose={handleClose}>
            {props.children}
            <button data-testid="close-button" onClick={handleClose}>
               Close
            </button>
         </BasicModal>
      </>
   )
}

describe('testing BasicModal', () => {
   it('close modal vie button', async () => {
      render(
         <ModalWithState open={false}>
            <div>modal</div>
         </ModalWithState>,
      )

      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()

      await userEvent.click(screen.getByTestId('open-button'))
      expect(screen.getByTestId('modal')).toBeInTheDocument()

      await userEvent.click(screen.getByTestId('close-button'))
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
   })
   it('close modal vie button', async () => {
      render(
         <ModalWithState open={false}>
            <div>modal</div>
         </ModalWithState>,
      )

      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()

      await userEvent.click(screen.getByTestId('open-button'))
      expect(screen.getByTestId('modal')).toBeInTheDocument()
      const prEl = screen.getByTestId('modal').parentElement
      if (!prEl) throw new Error('no parent element')
      await userEvent.click(prEl)
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
   })
})
