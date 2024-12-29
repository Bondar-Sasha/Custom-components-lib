import React, { ButtonHTMLAttributes } from 'react'
import { FC } from 'react'

import buttonSizes from '../utils/sizes'
import styles from './prototype.module.css'

interface PrototypeCustomProps {
   size?: keyof typeof buttonSizes
}

export type PrototypeProps = ButtonHTMLAttributes<HTMLButtonElement> & PrototypeCustomProps

export const defaultPrototypeProps = {
   className: '',
   size: 'medium',
   style: {},
   value: 'click',
} as Required<PrototypeProps>

const Prototype: FC<PrototypeProps> = props => {
   const { className, size, value, style, ...otherProps } = { ...defaultPrototypeProps, ...props }

   const classes = [styles.basic, className].join(' ')
   return (
      <button
         {...otherProps}
         className={classes}
         style={{ width: buttonSizes[size].width, height: buttonSizes[size].height, ...style }}
      >
         {value}
      </button>
   )
}

export default Prototype
