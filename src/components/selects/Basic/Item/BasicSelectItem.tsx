import React, { FC } from 'react'

import styles from './basicSelectItem.module.css'

interface ItemCustomProps {
   label: string
   onClick: (str: string) => unknown
   'data-testid': string
}
export type ItemProps = ItemCustomProps

const BasicSelectItem: FC<ItemProps> = ({ label, onClick, ...props }) => {
   const handleClick = () => {
      onClick(label)
   }
   return (
      <li {...props} onClick={handleClick} className={styles.li}>
         {label}
      </li>
   )
}

export default BasicSelectItem
