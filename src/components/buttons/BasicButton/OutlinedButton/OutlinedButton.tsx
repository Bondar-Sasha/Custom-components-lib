import React from 'react'
import { FC } from 'react'

import styles from './outlinedButton.module.css'
import Prototype, { PrototypeProps } from '../../prototype/Prototype'

interface OutlinedButtonCustomProps {}

export type OutlinedButtonProps = PrototypeProps & OutlinedButtonCustomProps

export const defaultProps = {
   className: '',
} as Required<OutlinedButtonProps>

const OutlinedButton: FC<OutlinedButtonProps> = props => {
   const { className, ...otherProps } = { ...defaultProps, ...props }

   const classes = [styles.outlinedButton, className].join(' ')
   return <Prototype {...otherProps} className={classes} />
}

export default OutlinedButton
