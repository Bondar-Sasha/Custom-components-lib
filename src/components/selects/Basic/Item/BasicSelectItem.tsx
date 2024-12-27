import React, { LiHTMLAttributes } from 'react'
import { FC } from 'react'

import styles from './basicSelectItem.module.scss'

export interface BasicSelectItemProps {
   content?: string
}
export type IBasicSelectItem = BasicSelectItemProps & LiHTMLAttributes<HTMLLIElement>

const defaultProps = {
   className: '',
   content: 'option',
} as Required<IBasicSelectItem>

const BasicSelectItem: FC<IBasicSelectItem> = props => {
   const { content, className, ...otherProps } = { ...defaultProps, ...props }

   const classes = [styles.li, className].join(' ')

   return (
      <li {...otherProps} className={classes}>
         {content}
      </li>
   )
}

export default BasicSelectItem
