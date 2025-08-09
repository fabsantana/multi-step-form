import React from 'react';
import styles from './LineItem.module.css'

function LineItem({name, cost, ...delegated}) {
  return (
    <div className={styles.lineItem}>
      <span className={styles.lineItemName}>{name}</span>
      <span  className={styles.lineItemCost} {...delegated}>{`+$${cost}/mo`}</span>
    </div>
  )
}

export default LineItem;
