import React, { FC } from 'react'

import containedButton from './variants/containedButton.module.css'
import outlinedButton from './variants/outlinedButton.module.css'
import textButton from './variants/textButton.module.css'

import Prototype, { PrototypeProps } from '../prototype/Prototype'
import getSize from '../utils/sizes/getSize'

interface BasicButtonCustomProps {
   size?: 'small' | 'medium' | 'large'
   variant?: 'text' | 'contained' | 'outlined'
}

export type BasicButtonProps = PrototypeProps & BasicButtonCustomProps

const variants = {
   text: textButton.textButton,
   contained: containedButton.containedButton,
   outlined: outlinedButton.outlinedButton,
}

const TextButton: FC<BasicButtonProps> = ({ className = '', size = 'medium', variant = 'contained', ...props }) => {
   const classes = [getSize(size), variants[variant], className].join(' ')

   return <Prototype {...props} className={classes} />
}

export default TextButton
