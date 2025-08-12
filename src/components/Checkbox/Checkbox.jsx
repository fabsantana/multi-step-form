import React from 'react';
import styles from './Checkbox.module.css';
import PlanContext from '../../context/PlanContext';

function Checkbox({ name, description, price }) {
  const { selectedAddOn, setSelectedAddOn } = React.useContext(PlanContext);

  const isChecked = selectedAddOn.includes(name)

  function handleAddOnSelection() {
    if (isChecked) {
      setSelectedAddOn(selectedAddOn.filter(addOn => addOn !==name))
    } else {
      setSelectedAddOn([...selectedAddOn, name])
    }
    console.log(selectedAddOn)
  }

  const id = React.useId();
  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkbox} htmlFor={`checkbox-${id}`}>
        <div className={styles.flex}>
          <input
            value={name}
            checked={isChecked}
            onChange={handleAddOnSelection}
            type='checkbox'
            id={`checkbox-${id}`}
          />
          <div className={styles.checkboxNameWrapper}>
            <span className={styles.checkboxName}>{name}</span>
            <span className={styles.checkboxDescription}>{description}</span>
          </div>
        </div>
        <span className={styles.checkboxPrice}>{price}</span>
      </label>
    </div>
  );
}

export default Checkbox;
