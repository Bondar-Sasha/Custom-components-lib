import React, { FC, HTMLProps, MouseEventHandler } from 'react'

import styles from './basicModal.module.css'

interface BasicModalCustomProps {
   open?: boolean
   onClose?: () => void
}
export type BasicModalProps = BasicModalCustomProps & HTMLProps<HTMLDivElement>

const BasicModal: FC<BasicModalProps> = ({ className = '', open = false, onClose = () => {}, ...props }) => {
   const preparedClasses = [styles.modal, className].join(' ')

   const handleClose: MouseEventHandler<HTMLDivElement> = e => {
      onClose()
   }
   const handleChildClick: MouseEventHandler<HTMLDivElement> = e => {
      e.stopPropagation()
   }
   if (!open) return null

   return (
      <div className={styles.blackout} onClick={handleClose}>
         <div {...props} className={preparedClasses} onClick={handleChildClick}></div>
      </div>
   )
}

export default BasicModal
