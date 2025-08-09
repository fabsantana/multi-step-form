import React from 'react';
import Card from '../Card';
import styles from './CardWrapper.module.css';
import PlanContext from '../../context/PlanContext';

function CardWrapper() {

  const {PLAN_OPTIONS} = React.useContext(PlanContext)

  return (
    <div className={styles.cardWrapper}>
      {PLAN_OPTIONS.map(({ planType, monthlyCost, id, planIcon }) => (
        <Card key={id} type={planType} cost={monthlyCost} icon={planIcon} />
      ))}
    </div>
  );
}

export default CardWrapper;
