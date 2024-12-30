import React, { HTMLProps, MouseEventHandler } from 'react'
import { FC } from 'react'

import styles from './basicModal.module.css'
import { createPortal } from 'react-dom'

interface BasicModalCustomProps {
   open?: boolean
   onClose?: () => void
}
export type BasicModalProps = BasicModalCustomProps & HTMLProps<HTMLDivElement>

export const defaultProps = {
   children: null,
   open: false,
   onClose: () => {},
   className: '',
} as Required<BasicModalProps>

const BasicModal: FC<BasicModalProps> = props => {
   const { className, open, onClose, ...otherProps } = { ...defaultProps, ...props }
   const preparedClasses = [styles.modal, className].join(' ')

   const handleClose: MouseEventHandler<HTMLDivElement> = e => {
      onClose()
   }
   const handleChildClick: MouseEventHandler<HTMLDivElement> = e => {
      e.stopPropagation()
   }
   if (!open) return null

   return createPortal(
      <div className={styles.blackout} onClick={handleClose}>
         <div {...otherProps} className={preparedClasses} onClick={handleChildClick}></div>
      </div>,
      document.body,
   )
}

export default BasicModal
