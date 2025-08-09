import React from 'react';
import Checkbox from '../Checkbox';
import styles from './CheckboxWrapper.module.css';
import PlanContext from '../../context/PlanContext';

function CheckboxWrapper() {
  const { ADD_ONS, yearlyBilling } = React.useContext(PlanContext);
  return (
    <fieldset className={styles.checkboxWrapper}>
      {ADD_ONS.map(
        ({ addOnName, addOnDesc, addOnYearlyCost, addOnMonthlyCost, id }) => (
          <Checkbox
            key={id}
            name={addOnName}
            description={addOnDesc}
            price={yearlyBilling ? `+$${addOnYearlyCost}/yr` : `+$${addOnMonthlyCost}/mo`}
          />
        )
      )}
    </fieldset>
  );
}

export default CheckboxWrapper;
