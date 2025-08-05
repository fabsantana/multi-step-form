import React from 'react';
import Card from '../Card';

function CardWrapper() {
  const PLAN_OPTIONS = [
    {
      planType: 'Arcade',
      monthlyCost: '$9',
      yearlyCost: '$90',
      id: crypto.randomUUID(),
    },
    {
      planType: 'Advanced',
      monthlyCost: '$12',
      yearlyCost: '$120',
      id: crypto.randomUUID(),
    },
    {
      planType: 'Pro',
      monthlyCost: '$15',
      yearlyCost: '$150',
      id: crypto.randomUUID(),
    },
  ];

  return (
    <div>
      {PLAN_OPTIONS.map(({ planType, monthlyCost, id }) => (
        <Card key={id} type={planType} cost={monthlyCost} />
      ))}
    </div>
  );
}

export default CardWrapper;
