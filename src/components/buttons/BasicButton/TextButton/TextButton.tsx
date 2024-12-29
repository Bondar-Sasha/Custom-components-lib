import React from 'react'
import { FC } from 'react'

import styles from './textButton.module.css'
import Prototype, { PrototypeProps } from '../../prototype/Prototype'

interface TextButtonCustomProps {}

export type TextButtonProps = PrototypeProps & TextButtonCustomProps

export const defaultProps = {
   className: '',
} as Required<TextButtonProps>

const TextButton: FC<TextButtonProps> = props => {
   const { className, ...otherProps } = { ...defaultProps, ...props }

   const classes = [styles.textButton, className].join(' ')
   return <Prototype {...otherProps} className={classes} />
}

export default TextButton
