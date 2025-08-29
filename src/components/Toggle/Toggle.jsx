import React from 'react';
import { Switch } from 'radix-ui';
import styles from './Toggle.module.css';
import PlanContext from '../../context/PlanContext';

function Toggle() {
  const {yearlyBilling, setYearlyBilling} = React.useContext(PlanContext)

  function handleCheckedChange() {
    if (!yearlyBilling) {
      setYearlyBilling(true);
    } else {
      setYearlyBilling(false);
    }
  }

  return (
    <Switch.Root
      checked = {yearlyBilling}
      onCheckedChange={handleCheckedChange}
      className={styles.switchRoot}
    >
      <Switch.Thumb className={styles.switchThumb} />
    </Switch.Root>
  );
}

export default Toggle;
