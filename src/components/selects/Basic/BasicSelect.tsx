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
   options?: ItemProps[]
}

export type BasicSelectProps = BasicSelectCustomProps & HTMLAttributes<HTMLDivElement>

const BasicSelect: FC<BasicSelectProps> = ({
   prompt = 'choice',
   className = '',
   clear = false,
   options = [{ content: 'first_option' }],
   ...props
}) => {
   const [selectState, selectDispatch] = useReducer(selectReducer, initSelectState)
   const { arrowState, visibilityState, promptState, currentValueState, blurState } = selectState

   const handleWrapperClick = () => {
      selectDispatch({ type: 'visibility', payload: !visibilityState })
      selectDispatch({ type: 'arrow', payload: !arrowState })
      selectDispatch({ type: 'blur', payload: true })
   }
   const handleOptionsClick: MouseEventHandler<HTMLUListElement> = e => {
      const target = e.target as HTMLLIElement
      selectDispatch({ type: 'currentValue', payload: target.innerText })
   }

   const handleOptionsBlur: FocusEventHandler<HTMLDivElement> = e => {
      selectDispatch({ type: 'visibility', payload: false })
      selectDispatch({ type: 'arrow', payload: false })
      selectDispatch({ type: 'blur', payload: false })
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
         data-testid="wrapper"
         className={wrapperStyles.wrapper}
         onClick={handleWrapperClick}
         onBlur={handleOptionsBlur}
         tabIndex={0}
      >
         <label data-testid="label-prompt" className={classesForPrompt}>
            {prompt}
         </label>
         <div data-testid="display" {...props} className={mainClasses}>
            <span data-testid="display-text">{currentValueState}</span>
         </div>
         {visibilityState && (
            <ul data-testid="options" className={selectStyles.optionsWrapper} onClick={handleOptionsClick}>
               {options.map((option, index) => {
                  const { content, ...optionProps } = option
                  return (
                     <BasicSelectItem
                        data-testid={`item-${index + 1}`}
                        {...optionProps}
                        key={index}
                        content={content}
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
