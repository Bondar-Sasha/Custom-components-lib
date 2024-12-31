import React, { FC } from 'react'
import IOSSwitch, { IOSSwitchProps } from './IOSSwitch/IOSSwitch'

interface ISwitches {
   iOS: FC<IOSSwitchProps>
}

const Switches: ISwitches = {
   iOS: IOSSwitch,
}

interface CustomProps {
   variant?: keyof ISwitches
}

export type BasicSwitchProps = CustomProps & IOSSwitchProps

const BasicSwitch: FC<BasicSwitchProps> = ({ variant = 'iOS', ...props }) => {
   const SwitchComponent = Switches[variant]
   return <SwitchComponent {...props} />
}

export default BasicSwitch
