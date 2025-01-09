import React, { FC, ButtonHTMLAttributes } from 'react'

import styles from './prototype.module.css'

export type PrototypeProps = ButtonHTMLAttributes<HTMLButtonElement>

const Prototype: FC<PrototypeProps> = ({ className = '', ...props }) => {
   const classes = [styles.basic, className].join(' ')

   return <button {...props} className={classes}></button>
}

export default Prototype
