import React from 'react';
import styles from './StepItem.module.css';

function StepItem({ children, step, active }) {
  return (
    <div className={styles.stepItem}>
      <div className={`${styles.stepNumber} ${active ? styles.active : ''}`}>{step}</div>
      <div className={styles.flexColumn}>
        <span className={styles.stepNumberLabel}>Step {step}</span>
        <span className={styles.stepName}>{children}</span>
      </div>
    </div>
  );
}

export default StepItem;
