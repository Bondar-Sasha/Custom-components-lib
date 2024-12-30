import React, { InputHTMLAttributes } from 'react'
import { FC } from 'react'

import styles from './prototype.module.css'

interface IClasses {
   wrapper?: string
   prompt?: string
   input?: string
}

interface PrototypeCustomProps {
   error?: boolean
   classes?: IClasses
   bgColor?: string
}

export type PrototypeProps = InputHTMLAttributes<HTMLInputElement> & PrototypeCustomProps

export const defaultPrototypeProps = {
   classes: { input: '', wrapper: '', prompt: '' },
   placeholder: 'write',
   bgColor: '',
   error: false,
   value: 'text',
} as Required<PrototypeProps>

const Prototype: FC<PrototypeProps> = props => {
   const {
      classes: { input, wrapper, prompt },
      error,
      bgColor,
      placeholder,
      ...otherProps
   } = { ...defaultPrototypeProps, ...props }

   const preparedWrapper = [styles.basic, styles.wrapper, wrapper].join(' ')
   const preparedInput = [styles.input, error ? styles.error : '', input].join(' ')
   const preparedPrompt = [styles.prompt, prompt].join(' ')

   const preparedPlaceholder = error ? 'Error' : placeholder
   return (
      <div className={preparedWrapper} style={{ backgroundColor: bgColor }}>
         <input {...otherProps} className={preparedInput} placeholder={preparedPlaceholder} />
         <label className={preparedPrompt}>{preparedPlaceholder}</label>
         <div></div>
      </div>
   )
}

export default Prototype
