import React from 'react'
import { FC } from 'react'
import Prototype, { PrototypeProps } from '../../prototype/Prototype'

import styles from './outlined.module.css'

export interface OutlinedInputCustomProps {}
export type OutlinedInputProps = OutlinedInputCustomProps & PrototypeProps

export const defaultProps = {
   classes: { input: '', wrapper: '', prompt: '' },
} as Required<OutlinedInputProps>

const OutlinedInput: FC<OutlinedInputProps> = props => {
   const {
      classes: { input, wrapper, prompt },
      ...otherProps
   } = { ...defaultProps, ...props }

   const preparedWrapper = [styles.wrapper, wrapper].join(' ')
   const preparedInput = [styles.input, input].join(' ')
   const preparedPrompt = [styles.prompt, prompt].join(' ')

   return (
      <Prototype {...otherProps} classes={{ input: preparedInput, wrapper: preparedWrapper, prompt: preparedPrompt }} />
   )
}

export default OutlinedInput
