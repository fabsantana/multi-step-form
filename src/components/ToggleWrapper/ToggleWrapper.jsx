import React from 'react';
import styles from './ToggleWrapper.module.css';
import Toggle from '../Toggle';

function ToggleWrapper() {
  const [yearlyBilling, setYearlyBilling] = React.useState(false);

  return (
    <div className={styles.toggleWrapper}>
      <span
        className={`${styles.toggleLabel} ${(yearlyBilling === false
          ? styles.active
          : '')}`}
      >
        Monthly
      </span>
      <Toggle yearlyBilling={yearlyBilling} setYearlyBilling={setYearlyBilling}/>
      <span
        className={`${styles.toggleLabel} ${(yearlyBilling === true
          ? styles.active
          : '')}`}
      >
        Yearly
      </span>
    </div>
  );
}

export default ToggleWrapper;
