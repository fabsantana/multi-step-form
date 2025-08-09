import React from 'react';
import styles from './ToggleWrapper.module.css';
import Toggle from '../Toggle';
import PlanContext from '../../context/PlanContext';

function ToggleWrapper() {

  const {yearlyBilling} = React.useContext(PlanContext)

  return (
    <div className={styles.toggleWrapper}>
      <span
        className={`${styles.toggleLabel} ${(yearlyBilling === false
          ? styles.active
          : '')}`}
      >
        Monthly
      </span>
      <Toggle />
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
