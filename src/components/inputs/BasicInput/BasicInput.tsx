import React, { FC } from 'react'
import FilledInput, { FilledInputProps } from './filled/FilledInput'
import OutlinedInput, { OutlinedInputProps } from './outlined/OutlinedInput'
import StandardInput, { StandardInputProps } from './standard/StandardInput'

interface IInputs {
   standard: FC<StandardInputProps>
   filled: FC<FilledInputProps>
   outlined: FC<OutlinedInputProps>
}

const Inputs: IInputs = {
   filled: FilledInput,
   standard: StandardInput,
   outlined: OutlinedInput,
}
interface CustomProps {
   variant?: keyof IInputs
}

export type BasicInputProps = CustomProps & (FilledInputProps | OutlinedInputProps | StandardInputProps)

const BasicInput: FC<BasicInputProps> = ({ variant = 'standard', ...props }) => {
   const InputComponent = Inputs[variant]
   return <InputComponent {...props} />
}

export default BasicInput
