import React, { FC, HTMLProps, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'

import styles from './basicModal.module.css'

interface BasicModalCustomProps {
   open: boolean
   onClose?: () => void
}
export type BasicModalProps = BasicModalCustomProps & HTMLProps<HTMLDivElement>

const BasicModal: FC<BasicModalProps> = ({ className = '', open, onClose = () => {}, ...props }) => {
   const preparedClasses = [styles.modal, className].join(' ')

   const handleClose: MouseEventHandler<HTMLDivElement> = e => {
      onClose()
   }
   const handleChildClick: MouseEventHandler<HTMLDivElement> = e => {
      e.stopPropagation()
   }
   if (!open) return null

   const testId = 'modal' + (props.id ? '-' + props.id : '')

   return createPortal(
      <div className={styles.blackout} onClick={handleClose}>
         <div data-testid={testId} {...props} className={preparedClasses} onClick={handleChildClick}></div>
      </div>,
      document.body,
   )
}

export default BasicModal
