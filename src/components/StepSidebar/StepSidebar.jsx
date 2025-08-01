import React from 'react';
import styles from './StepSidebar.module.css'
import StepItem from '../StepItem'

function StepSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.flexColumn}>
        <StepItem step={1}>Your Info</StepItem>
        <StepItem step={2}>Select Plan</StepItem>
        <StepItem step={3}>Add-Ons</StepItem>
        <StepItem step={4}>Summary</StepItem>
      </div>
    </aside>
  )
}

export default StepSidebar;
