import React from 'react';
import styles from './Card.module.css'
import Icon from '../Icon';

function Card({ cost, type, icon }) {
  const inputID = `card-${React.useId()}`
  return (
    <label htmlFor={inputID} className={styles.cardContainer}>
      <Icon className={styles.cardIcon} source = {icon}/>
      <input id={inputID} className={styles.radioInput} name='plan' type='radio' />
      <span className={styles.cardName}>{type}</span>
      <span className={styles.cardCost}>{cost}</span>
    </label>
  );
}

export default Card;
