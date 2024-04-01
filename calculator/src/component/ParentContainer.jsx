import React from 'react'
import styles from './ParentContainer.module.css'

export default function ParentContainer({children}) {
  return (
    <div className={styles.parent}>
       {children}
    </div>
  )
}
