import React, { InputHTMLAttributes } from 'react'
import { FC } from 'react'

import styles from './basicInput.module.scss'
import { InputVariants } from '../utils/variants'

export interface BasicInputProps {
   error?: boolean
   variant?: keyof typeof InputVariants
}
export type InputProps = BasicInputProps & InputHTMLAttributes<HTMLInputElement>

const defaultProps = {
   variant: 'standard',
   placeholder: 'write',
   error: false,
   value: 'text',
   className: '',
} as Required<InputProps>

const BasicInput: FC<InputProps> = props => {
   const { variant, className, error, placeholder, ...otherProps } = { ...defaultProps, ...props }

   const classes = [styles.common, styles[variant], error ? styles.error : '', className].join(' ')
   return (
      <div className={styles.wrapper}>
         <label className={styles.prompt}>{placeholder}</label>
         <input {...otherProps} className={classes} placeholder={error ? 'Error' : placeholder} />
      </div>
   )
}

export default BasicInput
