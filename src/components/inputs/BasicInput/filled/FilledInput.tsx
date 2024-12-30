import React from 'react'
import { FC } from 'react'
import Prototype, { PrototypeProps } from '../../prototype/Prototype'

import styles from './filled.module.css'

export interface FilledInputCustomProps {}
export type FilledInputProps = FilledInputCustomProps & PrototypeProps

export const defaultProps = {
   bgColor: 'rgb(239 239 239)',
   classes: { input: '', wrapper: '', prompt: '' },
} as Required<FilledInputProps>

const FilledInput: FC<FilledInputProps> = props => {
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

export default FilledInput
