import React from 'react'
import { FC } from 'react'
import Prototype, { PrototypeProps } from '../../prototype/Prototype'

import styles from './standard.module.css'

export interface StandardInputCustomProps {}
export type StandardInputProps = StandardInputCustomProps & PrototypeProps

export const defaultProps = {
   classes: { input: '', wrapper: '', prompt: '' },
} as Required<StandardInputProps>

const StandardInput: FC<StandardInputProps> = props => {
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

export default StandardInput
