import React, { InputHTMLAttributes } from 'react'
import { FC } from 'react'

import styles from './basicInput.module.scss'
import { InputVariants } from '../utils/variants'

export interface BasicInputProps {
   error?: boolean
   bgColor?: string
   variant?: keyof typeof InputVariants
}
export type InputProps = BasicInputProps & InputHTMLAttributes<HTMLInputElement>

const defaultProps = {
   variant: 'standard',
   placeholder: 'write',
   error: false,
   bgColor: '#c5c5c5',
   value: 'text',
   className: '',
} as Required<InputProps>

const BasicInput: FC<InputProps> = props => {
   const { variant, className, error, bgColor, placeholder, ...otherProps } = { ...defaultProps, ...props }

   const classes = [styles.common, styles[variant], error ? styles.error : '', className].join(' ')

   const preparedPlaceholder = error ? 'Error' : placeholder

   return (
      <div className={styles.wrapper}>
         <input {...otherProps} className={classes} placeholder={preparedPlaceholder} />
         <label className={styles.prompt}>{preparedPlaceholder}</label>
      </div>
   )
}

export default BasicInput
