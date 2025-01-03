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

export const defaultProps = {
   label: '',
   checked: false,
   classes: {
      wrapper: '',
      toggle_container: '',
      toggle_label: '',
      toggle_switch: '',
      switch_label: '',
      toggle_checkbox: '',
   },
} as Required<PrototypeProps>

const Prototype: FC<PrototypeProps> = props => {
   const {
      label,
      classes: { wrapper, toggle_container, toggle_label, toggle_switch, switch_label, toggle_checkbox },
      ...otherProps
   } = { ...defaultProps, ...props }

   const switchId = `switch-${Math.random().toString(36).substring(2, 11)}`

   const preparedWrapper = [styles.wrapper, wrapper].join(' ')
   const preparedToggle_container = [styles.toggle_container, toggle_container].join(' ')
   const preparedToggle_label = [styles.toggle_label, toggle_label].join(' ')
   const preparedToggle_checkbox = [styles.toggle_checkbox, toggle_checkbox].join(' ')
   const preparedToggle_switch = [styles.toggle_switch, toggle_switch].join(' ')
   const preparedSwitch_label = [styles.switch_label, switch_label].join(' ')

   return (
      <div data-testid="wrapper" className={preparedWrapper}>
         <div data-testid="switch-wrapper" className={preparedToggle_container}>
            <input data-testid="switch" {...otherProps} type="switch" className={preparedToggle_switch} id={switchId} />
            <label data-testid="switch-display-label" className={preparedToggle_label} htmlFor={switchId}>
               <span className={preparedToggle_switch}></span>
            </label>
         </div>
         {label && (
            <label data-testid="switch-label" className={preparedSwitch_label} htmlFor={switchId}>
               {label}
            </label>
         )}
      </div>
   )
}

export default Prototype
