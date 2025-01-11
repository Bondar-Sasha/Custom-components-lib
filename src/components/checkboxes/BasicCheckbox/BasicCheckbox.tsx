import React, { FC, InputHTMLAttributes } from 'react'

import styles from './basicCheckbox.module.css'

interface IClasses {
   wrapper?: string
   checkboxWrapper?: string
   checkbox?: string
   checkboxInterface?: string
   checkboxLabel?: string
}

export interface BasicCheckboxCustomProps {
   label?: string
   classes?: IClasses
}

export type BasicCheckboxProps = BasicCheckboxCustomProps & InputHTMLAttributes<HTMLInputElement>

const addPostfix = (str: string, postfix: string): string => {
   return str + '-' + postfix
}

const BasicCheckbox: FC<BasicCheckboxProps> = ({
   label = '',
   id = `${Math.random().toString().substring(2, 11)}`,
   classes = { wrapper: '', checkbox: '', checkboxWrapper: '', checkboxInterface: '', checkboxLabel: '' },
   ...props
}) => {
   const wrapper = [styles.wrapper, classes.wrapper].join(' ')
   const checkboxWrapper = [styles.checkboxWrapper, classes.checkboxWrapper].join(' ')
   const checkbox = [styles.checkbox, classes.checkbox].join(' ')
   const checkboxInterface = [styles.checkboxInterface, classes.checkboxInterface].join(' ')
   const checkboxLabel = [styles.checkboxLabel, classes.checkboxLabel].join(' ')

   return (
      <div data-testid={addPostfix('wrapper', id)} className={wrapper}>
         <div data-testid={addPostfix('checkbox-wrapper', id)} className={checkboxWrapper}>
            <input data-testid={addPostfix('checkbox', id)} id={id} {...props} type="checkbox" className={checkbox} />
            <label
               data-testid={addPostfix('checkbox-display-label', id)}
               className={checkboxInterface}
               htmlFor={id}
            ></label>
         </div>
         {label && (
            <label data-testid={addPostfix('checkbox-label', id)} className={checkboxLabel} htmlFor={id}>
               {label}
            </label>
         )}
      </div>
   )
}

export default BasicCheckbox
