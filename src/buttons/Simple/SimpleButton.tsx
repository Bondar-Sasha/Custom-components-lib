import React, { ButtonHTMLAttributes } from 'react'
import { FC } from 'react'

import styles from './simpleButton.module.scss'
import buttonSizes, { ButtonSizes } from '../utils/sizes'
import { ButtonVariants } from '../utils/variants'

export interface SimpleButtonProps {
   variant?: keyof typeof ButtonVariants
   size?: keyof ButtonSizes
}

export type ButtonProps = SimpleButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const defaultProps = {
   variant: 'contained',
   size: 'medium',
   value: 'click',
   className: '',
} as Required<ButtonProps>

const SimpleButton: FC<ButtonProps> = props => {
   const { value, variant, size, className, style, ...otherProps } = { ...defaultProps, ...props }

   const classes = [styles.common, styles[variant], className].join(' ')
   return (
      <button
         {...otherProps}
         style={{ width: buttonSizes[size].width, height: buttonSizes[size].height, ...style }}
         className={classes}
      >
         {value}
      </button>
   )
}

export default SimpleButton
