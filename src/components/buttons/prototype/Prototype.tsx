import React, { FC, ButtonHTMLAttributes } from 'react'

import styles from './prototype.module.css'

export type PrototypeProps = ButtonHTMLAttributes<HTMLButtonElement>

const Prototype: FC<PrototypeProps> = ({ className = '', value = '', ...props }) => {
   const classes = [styles.basic, className].join(' ')

   return (
      <button {...props} className={classes}>
         {value}
      </button>
   )
}

export default Prototype
