import React, { FC, InputHTMLAttributes } from 'react'

import styles from './prototype.module.css'

interface IClasses {
   wrapper?: string
   prompt?: string
   input?: string
}

interface PrototypeCustomProps {
   error?: boolean
   classes?: IClasses
}

export type PrototypeProps = InputHTMLAttributes<HTMLInputElement> & PrototypeCustomProps

const createTestId = (str: string, data?: string): string => {
   if (data) return str + '-' + data
   return str
}

const Prototype: FC<PrototypeProps> = ({
   error = false,
   placeholder = '',
   classes = { input: '', wrapper: '', prompt: '' },
   ...props
}) => {
   const preparedWrapper = [styles.basic, styles.wrapper, classes.wrapper].join(' ')
   const preparedInput = [styles.input, error ? styles.error : '', classes.input].join(' ')
   const preparedPrompt = [styles.prompt, classes.prompt].join(' ')

   const preparedPlaceholder = error ? 'Error' : placeholder
   return (
      <div data-testid={createTestId('wrapper', props.id)} className={preparedWrapper}>
         <input
            data-testid={createTestId('input', props.id)}
            {...props}
            className={preparedInput}
            placeholder={preparedPlaceholder}
         />
         <label data-testid={createTestId('label-prompt', props.id)} className={preparedPrompt}>
            {preparedPlaceholder}
         </label>
         <div data-testid={createTestId('ui-helper', props.id)}></div>
      </div>
   )
}

export default Prototype
