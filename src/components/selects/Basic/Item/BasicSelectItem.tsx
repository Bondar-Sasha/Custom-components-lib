import React, { FC, LiHTMLAttributes } from 'react'

import styles from './basicSelectItem.module.css'

interface ItemCustomProps {
   content?: string
}
export type ItemProps = ItemCustomProps & LiHTMLAttributes<HTMLLIElement>

const BasicSelectItem: FC<ItemProps> = ({ className = '', content = 'option', ...props }) => {
   const classes = [styles.li, className].join(' ')

   return (
      <li {...props} className={classes}>
         {content}
      </li>
   )
}

export default BasicSelectItem
