import React, { FC, ButtonHTMLAttributes } from 'react'

import styles from './prototype.module.css'

export type PrototypeProps = ButtonHTMLAttributes<HTMLButtonElement>

const Prototype: FC<PrototypeProps> = ({ className = '', ...props }) => {
   const classes = [styles.basic, className].join(' ')

   const testId = 'button' + (props.id ? '-' + props.id : '')

   return <button data-testid={testId} {...props} className={classes}></button>
}

export default Prototype
