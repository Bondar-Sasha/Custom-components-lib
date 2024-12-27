import React, { InputHTMLAttributes, FC } from 'react'
import switchSizes from '../utils/sizes'
import switchVariants from '../utils/variants'
import variantFunc from './styles'

export interface SimpleSwitchProps {
   label?: string
   switchSize?: keyof typeof switchSizes
   variant?: (typeof switchVariants)[number]
}

export type ISimpleSwitch = SimpleSwitchProps & InputHTMLAttributes<HTMLInputElement>

export const defaultProps = {
   label: '',
   checked: false,
   switchSize: 'medium',
   variant: 'default',
   className: '',
} as Required<ISimpleSwitch>

const SimpleSwitch: FC<ISimpleSwitch> = props => {
   const { switchSize, label, className, variant, ...otherProps } = { ...defaultProps, ...props }

   const switchId = `switch-${Math.random().toString(36).substring(2, 11)}`

   const preparedStyles = variantFunc(variant)

   return (
      <div className={preparedStyles.wrapper}>
         <div className={preparedStyles.toggle_container}>
            <input {...otherProps} type="checkbox" className={preparedStyles.toggle_checkbox} id={switchId} />
            <label
               style={{
                  width: switchSizes[switchSize].width,
                  height: switchSizes[switchSize].height,
               }}
               className={preparedStyles.toggle_label}
               htmlFor={switchId}
            >
               <span className={preparedStyles.toggle_switch}></span>
            </label>
         </div>
         {label && (
            <label className={preparedStyles.switch_label} htmlFor={switchId}>
               {label}
            </label>
         )}
      </div>
   )
}

export default SimpleSwitch
