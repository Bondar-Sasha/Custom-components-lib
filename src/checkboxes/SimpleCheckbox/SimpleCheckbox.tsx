import React, { InputHTMLAttributes } from 'react'
import { FC } from 'react'

import styles from './simpleCheckbox.module.scss'
import checkboxSizes, { CheckboxSizes } from '../utils/sizes'

export interface SimpleCheckboxProps {
   label?: string
   checkboxSize?: keyof CheckboxSizes
}

export type ISimpleCheckbox = SimpleCheckboxProps & InputHTMLAttributes<HTMLInputElement>

export const defaultProps = {
   label: '',
   checked: false,
   checkboxSize: 'medium',
   className: '',
} as Required<ISimpleCheckbox>

const SimpleCheckbox: FC<ISimpleCheckbox> = props => {
   const { checkboxSize, label, className, ...otherProps } = { ...defaultProps, ...props }

   const checkboxId = `checkbox-${Math.random().toString(36).substring(2, 11)}`
   const mainClasses = [styles.checkbox_input, className].join(' ')
   return (
      <div className={styles.wrapper}>
         <div
            className={styles.checkboxWrapper}
            style={{
               width: checkboxSizes[checkboxSize].width,
               height: checkboxSizes[checkboxSize].height,
               fontSize: checkboxSizes[checkboxSize].width,
            }}
         >
            <input {...otherProps} type="checkbox" className={mainClasses} id={checkboxId} />
            <label className={styles.checkbox_box} htmlFor={checkboxId}></label>
         </div>
         {label && (
            <label className={styles.checkbox_label} htmlFor={checkboxId}>
               {label}
            </label>
         )}
      </div>
   )
}

export default SimpleCheckbox
