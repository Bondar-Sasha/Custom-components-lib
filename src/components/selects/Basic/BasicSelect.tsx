import React, { FC, FocusEventHandler, HTMLAttributes, MouseEventHandler, useEffect, useReducer } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import wrapperStyles from './styles/wrapper.module.css'
import promptStyles from './styles/prompt.module.css'
import arrowStyles from './styles/arrow.module.css'
import selectStyles from './styles/select.module.css'
import BasicSelectItem, { ItemProps } from './Item/BasicSelectItem'
import initSelectState, { selectReducer } from './selectReducer'

interface BasicSelectCustomProps {
   prompt?: string
   clear?: boolean
   options?: string[]
   onChange?: ItemProps['onClick']
   currentValue?: ItemProps['label']
}

export type BasicSelectProps = BasicSelectCustomProps & HTMLAttributes<HTMLDivElement>

const init =
   (value: string) =>
   (initState: typeof initSelectState): typeof initSelectState => {
      return { ...initState, currentValueState: value }
   }

const createTestId = (str: string, data?: string): string => {
   if (data) return str + '-' + data
   return str
}

const BasicSelect: FC<BasicSelectProps> = ({
   prompt = 'choice',
   className = '',
   clear = false,
   options = ['first_option', 'second_option'],
   currentValue,
   onChange,
   ...props
}) => {
   const [selectState, selectDispatch] = useReducer(selectReducer, initSelectState, init(currentValue ?? ''))
   const { arrowState, visibilityState, promptState, currentValueState, blurState } = selectState

   const handleWrapperClick = () => {
      selectDispatch({ type: 'visibility', payload: !visibilityState })
      selectDispatch({ type: 'arrow', payload: !arrowState })
      selectDispatch({ type: 'blur', payload: true })
   }

   const handleOptionsBlur: FocusEventHandler<HTMLDivElement> = e => {
      // selectDispatch({ type: 'visibility', payload: false })
      // selectDispatch({ type: 'arrow', payload: false })
      // selectDispatch({ type: 'blur', payload: false })
   }
   const preparedOptionClick = (value: string) => {
      if (onChange) onChange(value)
      selectDispatch({ type: 'currentValue', payload: value })
   }

   useEffect(() => {
      if ((!currentValueState && blurState) || currentValueState) {
         selectDispatch({ type: 'prompt', payload: true })
         return
      }
      selectDispatch({ type: 'prompt', payload: false })
   }, [currentValueState, blurState])

   useEffect(() => {
      if (clear) selectDispatch({ type: 'currentValue', payload: '' })
   }, [clear])

   const mainClasses = [selectStyles.select, className].join(' ')
   const classesForArrow = [arrowStyles.arrow, arrowState ? arrowStyles.arrow_top : ''].join(' ')
   const classesForPrompt = [promptStyles.prompt, promptState ? promptStyles.prompt_move : ''].join(' ')

   return (
      <div
         data-testid={createTestId('wrapper', props.id)}
         className={wrapperStyles.wrapper}
         onClick={handleWrapperClick}
         onBlur={handleOptionsBlur}
         tabIndex={0}
      >
         <label data-testid={createTestId('label-prompt', props.id)} className={classesForPrompt}>
            {prompt}
         </label>
         <div data-testid={createTestId('display', props.id)} {...props} className={mainClasses}>
            <span data-testid={createTestId('display-text', props.id)}>{currentValueState}</span>
         </div>
         {visibilityState && (
            <ul data-testid={createTestId('options', props.id)} className={selectStyles.optionsWrapper}>
               {options.map((option, index) => {
                  return (
                     <BasicSelectItem
                        data-testid={createTestId(`item-${index + 1}`, props.id)}
                        onClick={preparedOptionClick}
                        key={index}
                        label={option}
                     />
                  )
               })}
            </ul>
         )}
         <IoIosArrowDown className={classesForArrow} />
      </div>
   )
}

export default BasicSelect
