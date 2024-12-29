import React from 'react'
import { FC } from 'react'

import styles from './containedButton.module.css'
import Prototype, { PrototypeProps } from '../../prototype/Prototype'

interface ContainedButtonCustomProps {}

export type ContainedButtonProps = PrototypeProps & ContainedButtonCustomProps

export const defaultProps = {
   className: '',
} as Required<ContainedButtonProps>

const ContainedButton: FC<ContainedButtonProps> = props => {
   const { className, ...otherProps } = { ...defaultProps, ...props }

   const classes = [styles.containedButton, className].join(' ')
   return <Prototype {...otherProps} className={classes} />
}

export default ContainedButton
