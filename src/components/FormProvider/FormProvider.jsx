import React from 'react';
import PlanContext from '../../context/PlanContext';

function FormProvider({children}) {
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
  return <PlanContext.Provider value={{PLAN_OPTIONS}}>{children}</PlanContext.Provider>;
}

export default FormProvider;
