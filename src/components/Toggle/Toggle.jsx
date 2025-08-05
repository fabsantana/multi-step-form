import React from 'react';
import { Switch } from 'radix-ui';
import styles from './Toggle.module.css';

function Toggle({ yearlyBilling, setYearlyBilling }) {
  function handleCheckedChange() {
    if (!yearlyBilling) {
      setYearlyBilling(true);
    } else {
      setYearlyBilling(false);
    }
  }

  return (
    <Switch.Root
      onCheckedChange={handleCheckedChange}
      className={styles.switchRoot}
    >
      <Switch.Thumb className={styles.switchThumb} />
    </Switch.Root>
  );
}

export default Toggle;
