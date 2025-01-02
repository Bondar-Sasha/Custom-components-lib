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

const BasicCheckbox: FC<BasicCheckboxProps> = ({
   label = '',
   checked = false,
   classes = { wrapper: '', checkbox: '', checkboxWrapper: '', checkboxInterface: '', checkboxLabel: '' },
   ...props
}) => {
   const checkboxId = `checkbox-${Math.random().toString(36).substring(2, 11)}`
   const wrapper = [styles.wrapper, classes.wrapper].join(' ')
   const checkboxWrapper = [styles.checkboxWrapper, classes.checkboxWrapper].join(' ')
   const checkbox = [styles.checkbox, classes.checkbox].join(' ')
   const checkboxInterface = [styles.checkboxInterface, classes.checkboxInterface].join(' ')
   const checkboxLabel = [styles.checkboxLabel, classes.checkboxLabel].join(' ')

   return (
      <div className={wrapper}>
         <div className={checkboxWrapper}>
            <input {...props} type="checkbox" className={checkbox} id={checkboxId} />
            <label className={checkboxInterface} htmlFor={checkboxId}></label>
         </div>
         {label && (
            <label className={checkboxLabel} htmlFor={checkboxId}>
               {label}
            </label>
         )}
      </div>
   )
}

export default BasicCheckbox
