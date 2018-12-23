import React from 'react'
import styles from './projectBtn.module.scss'

export default props => {
  return <div className={styles.projectBtn}>{props.children}</div>
}
