import React, { FC } from 'react'
import ContainedButton, { ContainedButtonProps } from './ContainedButton/ContainedButton'
import OutlinedButton, { OutlinedButtonProps } from './OutlinedButton/OutlinedButton'
import TextButton, { TextButtonProps } from './TextButton/TextButton'

interface IButtons {
   text: FC<TextButtonProps>
   contained: FC<ContainedButtonProps>
   outlined: FC<OutlinedButtonProps>
}

const Buttons: IButtons = {
   text: TextButton,
   contained: ContainedButton,
   outlined: OutlinedButton,
}

interface CustomProps {
   variant: keyof IButtons
}

export type BasicButtonProps = CustomProps & (TextButtonProps | ContainedButtonProps | OutlinedButtonProps)

const BasicButton: FC<BasicButtonProps> = ({ variant, ...props }) => {
   const ButtonComponent = Buttons[variant]
   return <ButtonComponent {...props} />
}

export default BasicButton
