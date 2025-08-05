import React from 'react';
import Card from '../Card';
import styles from './CardWrapper.module.css';

function CardWrapper() {
  const PLAN_OPTIONS = [
    {
      planType: 'Arcade',
      monthlyCost: '$9',
      yearlyCost: '$90',
      id: crypto.randomUUID(),
      planIcon: '../../../assets/images/icon-arcade.svg',
    },
    {
      planType: 'Advanced',
      monthlyCost: '$12',
      yearlyCost: '$120',
      id: crypto.randomUUID(),
      planIcon: '../../../assets/images/icon-advanced.svg',
    },
    {
      planType: 'Pro',
      monthlyCost: '$15',
      yearlyCost: '$150',
      id: crypto.randomUUID(),
      planIcon: '../../../assets/images/icon-pro.svg',
    },
  ];

  return (
    <div className={styles.cardWrapper}>
      {PLAN_OPTIONS.map(({ planType, monthlyCost, id, planIcon }) => (
        <Card key={id} type={planType} cost={monthlyCost} icon={planIcon} />
      ))}
    </div>
  );
}

export default CardWrapper;
