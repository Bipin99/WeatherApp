import React from 'react'
import styles from './notfound.module.css'
function NotFound({error}) {
  return (
  
    <div  className={styles.container}>{error.message}, Try Again</div>
    
    
  )
}

export default NotFound