import React from 'react';
import styles from './Card.module.css'

function Card({ cost, type }) {
  return (
    <label className={styles.cardContainer}>
      <input name='plan' type='radio' />
      <span className={styles.cardName}>{type}</span>
      <span className={styles.cardCost}>{cost}</span>
    </label>
  );
}

export default Card;
