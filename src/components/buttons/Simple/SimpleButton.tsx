import React, { ButtonHTMLAttributes } from 'react'
import { FC } from 'react'

import styles from './simpleButton.module.scss'
import buttonSizes from '../utils/sizes'
import buttonVariants from '../utils/variants'

export interface SimpleButtonProps {
   variant?: (typeof buttonVariants)[number]
   size?: keyof typeof buttonSizes
}

export type ButtonProps = SimpleButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const defaultProps = {
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
