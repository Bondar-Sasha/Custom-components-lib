import React, { InputHTMLAttributes, FC } from 'react'
import styles from './prototype.module.css'

interface Classes {
   wrapper?: string
   toggle_container?: string
   toggle_label?: string
   toggle_switch?: string
   switch_label?: string
   toggle_checkbox?: string
}

interface PrototypeCustomProps {
   label?: string
   classes?: Classes
}

export type PrototypeProps = PrototypeCustomProps & InputHTMLAttributes<HTMLInputElement>

const addPostfix = (str: string, postfix: string): string => {
   return str + '-' + postfix
}

const Prototype: FC<PrototypeProps> = ({
   label = '',
   id = `${Math.random().toString().substring(2, 11)}`,
   classes = {
      wrapper: '',
      toggle_container: '',
      toggle_label: '',
      toggle_switch: '',
      switch_label: '',
      toggle_checkbox: '',
   },
   ...props
}) => {
   const preparedWrapper = [styles.wrapper, classes.wrapper].join(' ')
   const preparedToggle_container = [styles.toggle_container, classes.toggle_container].join(' ')
   const preparedToggle_label = [styles.toggle_label, classes.toggle_label].join(' ')
   const preparedToggle_checkbox = [styles.toggle_checkbox, classes.toggle_checkbox].join(' ')
   const preparedToggle_switch = [styles.toggle_switch, classes.toggle_switch].join(' ')
   const preparedSwitch_label = [styles.switch_label, classes.switch_label].join(' ')

   return (
      <div data-testid={addPostfix('wrapper', id)} className={preparedWrapper}>
         <div data-testid={addPostfix('switch-wrapper', id)} className={preparedToggle_container}>
            <input
               data-testid={addPostfix('switch', id)}
               id={id}
               {...props}
               type="checkbox"
               className={preparedToggle_checkbox}
            />
            <label data-testid={addPostfix('switch-display-label', id)} className={preparedToggle_label} htmlFor={id}>
               <span className={preparedToggle_switch}></span>
            </label>
         </div>
         {label && (
            <label data-testid={addPostfix('switch-label', id)} className={preparedSwitch_label} htmlFor={id}>
               {label}
            </label>
         )}
      </div>
   )
}

export default Prototype
