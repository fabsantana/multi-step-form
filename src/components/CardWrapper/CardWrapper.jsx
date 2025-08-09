import React from 'react';
import Card from '../Card';
import styles from './CardWrapper.module.css';
import PlanContext from '../../context/PlanContext';

function CardWrapper() {
  const { PLAN_OPTIONS, yearlyBilling } = React.useContext(PlanContext);

  return (
    <div className={styles.cardWrapper}>
      {PLAN_OPTIONS.map(
        ({ planType, planMonthlyCost, planYearlyCost, id, planIcon }) => (
          <Card
            key={id}
            type={planType}
            cost={
              yearlyBilling ? `${planYearlyCost}/yr` : `${planMonthlyCost}/mo`
            }
            icon={planIcon}
          />
        )
      )}
    </div>
  );
}

export default CardWrapper;
