import React, { FC } from 'react'
import Prototype, { PrototypeProps } from '../prototype/Prototype'

import styles from './iOS.module.css'

interface IOSSwitchCustomProps {}

export type IOSSwitchProps = PrototypeProps & IOSSwitchCustomProps

export const defaultProps = {
   classes: {
      wrapper: '',
      toggle_container: '',
      toggle_label: '',
      toggle_switch: '',
      switch_label: '',
      toggle_checkbox: '',
   },
} as Required<IOSSwitchProps>

const IOSSwitch: FC<IOSSwitchProps> = props => {
   const {
      classes: { wrapper, toggle_container, toggle_label, toggle_switch, switch_label, toggle_checkbox },
      ...otherProps
   } = { ...defaultProps, ...props }

   const preparedWrapper = [styles.wrapper, wrapper].join(' ')
   const preparedToggle_container = [styles.toggle_container, toggle_container].join(' ')
   const preparedToggle_label = [styles.toggle_label, toggle_label].join(' ')
   const preparedToggle_checkbox = [styles.toggle_checkbox, toggle_checkbox].join(' ')
   const preparedToggle_switch = [styles.toggle_switch, toggle_switch].join(' ')
   const preparedSwitch_label = [styles.switch_label, switch_label].join(' ')

   return (
      <Prototype
         {...otherProps}
         classes={{
            wrapper: preparedWrapper,
            toggle_label: preparedToggle_label,
            toggle_checkbox: preparedToggle_checkbox,
            toggle_container: preparedToggle_container,
            toggle_switch: preparedToggle_switch,
            switch_label: preparedSwitch_label,
         }}
      />
   )
}

export default IOSSwitch
