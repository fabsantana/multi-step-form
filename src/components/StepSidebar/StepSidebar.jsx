import React from 'react';
import styles from './StepSidebar.module.css';
import StepItem from '../StepItem';
import StepContext from '../../context/StepContext';

function StepSidebar({className =''}) {
  const { step } = React.useContext(StepContext);
  return (
    <aside className={`${styles.sidebar} ${styles[className]}`}>
      <div className={styles.flex}>
        <StepItem step={1} active={step === 1}>
          Your Info
        </StepItem>
        <StepItem step={2} active={step === 2}>
          Select Plan
        </StepItem>
        <StepItem step={3} active={step === 3}>
          Add-Ons
        </StepItem>
        <StepItem step={4} active={step === 4}>
          Summary
        </StepItem>
      </div>
    </aside>
  );
}

export default StepSidebar;
