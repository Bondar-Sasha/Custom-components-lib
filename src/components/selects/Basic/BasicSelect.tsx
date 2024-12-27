import React, { FocusEventHandler, HTMLAttributes, MouseEventHandler, useEffect, useReducer } from 'react'
import { FC } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import wrapperStyles from './styles/wrapper.module.scss'
import promptStyles from './styles/prompt.module.scss'
import arrowStyles from './styles/arrow.module.scss'
import selectStyles from './styles/select.module.scss'
import BasicSelectItem, { IBasicSelectItem } from './Item/BasicSelectItem'
import initSelectState, { selectReducer } from './selectReducer'

export interface BasicSelectProps {
   prompt?: string
   clear?: boolean
   options?: IBasicSelectItem[]
}

export type BasicSelect = BasicSelectProps & HTMLAttributes<HTMLDivElement>

export const defaultProps = {
   className: '',
   prompt: 'choice',
   options: [{ content: 'first_option' }],
   clear: false,
} as Required<BasicSelect>

const BasicSelect: FC<BasicSelect> = props => {
   const { prompt, className, clear, options, ...preparedProps } = { ...defaultProps, ...props }

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
      <div className={wrapperStyles.wrapper} onClick={handleWrapperClick} onBlur={handleOptionsBlur} tabIndex={0}>
         <label className={classesForPrompt}>{prompt}</label>
         <div {...preparedProps} className={mainClasses}>
            <span>{currentValueState}</span>
         </div>
         {visibilityState && (
            <ul className={selectStyles.optionsWrapper} onClick={handleOptionsClick}>
               {options.map((option, index) => {
                  const { content, ...optionProps } = option
                  return <BasicSelectItem {...optionProps} key={index} content={content} />
               })}
            </ul>
         )}
         <IoIosArrowDown className={classesForArrow} />
      </div>
   )
}

export default BasicSelect
