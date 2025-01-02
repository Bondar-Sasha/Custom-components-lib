import React, { FC } from 'react'
import Prototype, { PrototypeProps } from './prototype/Prototype'

import iOSSwitch from './variants/iOS.module.css'

interface BasicSwitchCustomProps {
   variant?: 'iOS'
}

export type BasicSwitchProps = PrototypeProps & BasicSwitchCustomProps

const variants = {
   iOS: iOSSwitch,
}

const BasicSwitch: FC<BasicSwitchProps> = ({
   classes = {
      wrapper: '',
      toggle_container: '',
      toggle_label: '',
      toggle_switch: '',
      switch_label: '',
      toggle_checkbox: '',
   },
   variant = 'iOS',
   ...props
}) => {
   const variantStyles = variants[variant]
   const preparedWrapper = [variantStyles.wrapper, classes.wrapper].join(' ')
   const preparedToggle_container = [variantStyles.toggle_container, classes.toggle_container].join(' ')
   const preparedToggle_label = [variantStyles.toggle_label, classes.toggle_label].join(' ')
   const preparedToggle_checkbox = [variantStyles.toggle_checkbox, classes.toggle_checkbox].join(' ')
   const preparedToggle_switch = [variantStyles.toggle_switch, classes.toggle_switch].join(' ')
   const preparedSwitch_label = [variantStyles.switch_label, classes.switch_label].join(' ')

   return (
      <Prototype
         {...props}
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

export default BasicSwitch
