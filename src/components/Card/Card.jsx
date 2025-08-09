import React from 'react';
import styles from './Card.module.css';
import Icon from '../Icon';
import PlanContext from '../../context/PlanContext';

function Card({ cost, type, icon }) {
  const { selectedPlan, setSelectedPlan } = React.useContext(PlanContext);

  function handleCardSelection(event) {
    setSelectedPlan(event.target.value);
  }

  const inputID = `card-${React.useId()}`;

  return (
    <label htmlFor={inputID} className={styles.cardContainer}>
      <Icon className={styles.cardIcon} source={icon} />
      <input
        id={inputID}
        className={styles.radioInput}
        name='planSelection'
        type='radio'
        value={type}
        checked={selectedPlan === type}
        onChange={handleCardSelection}
      />
      <span className={styles.cardName}>{type}</span>
      <span className={styles.cardCost}>{cost}</span>
    </label>
  );
}

export default Card;
