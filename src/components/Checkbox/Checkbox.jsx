import React from 'react';
import styles from './Checkbox.module.css'

function Checkbox({name, description, price}) {
  const id = React.useId()
  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkbox} htmlFor={`checkbox-${id}`}>
        <div className={styles.flex}>
          <input type="checkbox" id={`checkbox-${id}`} />
          <div className={styles.checkboxNameWrapper}>
            <span className={styles.checkboxName}>{name}</span>
            <span className={styles.checkboxDescription}>{description}</span>
          </div>
        </div>
        <span className={styles.checkboxPrice}>{price}</span>
      </label>
    </div>
  )
}

export default Checkbox;
