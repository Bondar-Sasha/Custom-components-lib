import React, { FC } from 'react'
import Prototype, { PrototypeProps } from '../prototype/Prototype'

import filledInput from './variants/filled.module.css'
import outlinedInput from './variants/outlined.module.css'
import standardInput from './variants/standard.module.css'

export interface BasicInputCustomProps {
   variant?: 'filled' | 'outlined' | 'standard'
}
export type BasicInputProps = BasicInputCustomProps & PrototypeProps

const variants = {
   filled: filledInput,
   outlined: outlinedInput,
   standard: standardInput,
}

const BasicInput: FC<BasicInputProps> = ({
   classes = { input: '', wrapper: '', prompt: '' },
   variant = 'standard',
   ...props
}) => {
   const variantStyle = variants[variant]
   const preparedWrapper = [variantStyle.wrapper, classes.wrapper].join(' ')
   const preparedInput = [variantStyle.input, classes.input].join(' ')
   const preparedPrompt = [variantStyle.prompt, classes.prompt].join(' ')

   return <Prototype {...props} classes={{ input: preparedInput, wrapper: preparedWrapper, prompt: preparedPrompt }} />
}

export default BasicInput
