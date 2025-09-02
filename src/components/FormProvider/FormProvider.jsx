import React from 'react';
import PlanContext from '../../context/PlanContext';

function FormProvider({ children }) {
  const PLAN_OPTIONS = [
    {
      planType: 'Arcade',
      planMonthlyCost: 9,
      planYearlyCost: 90,
      id: crypto.randomUUID(),
      planIcon: '/icon-arcade.svg',
    },
    {
      planType: 'Advanced',
      planMonthlyCost: 12,
      planYearlyCost: 120,
      id: crypto.randomUUID(),
      planIcon: '/icon-advanced.svg',
    },
    {
      planType: 'Pro',
      planMonthlyCost: 15,
      planYearlyCost: 150,
      id: crypto.randomUUID(),
      planIcon: '/icon-pro.svg',
    },
  ];

  const ADD_ONS = [
    {
      addOnName: 'Online service',
      addOnDesc: 'Access to multiplayer games',
      addOnYearlyCost: 10,
      addOnMonthlyCost: 1,
      id: crypto.randomUUID(),
    },
    {
      addOnName: 'Larger storage',
      addOnDesc: 'Extra 1TB of cloud save',
      addOnYearlyCost: 20,
      addOnMonthlyCost: 2,
      id: crypto.randomUUID(),
    },
    {
      addOnName: 'Customizable profile',
      addOnDesc: 'Custom theme on your profile',
      addOnYearlyCost: 20,
      addOnMonthlyCost: 2,
      id: crypto.randomUUID(),
    },
  ];

  const [yearlyBilling, setYearlyBilling] = React.useState(false);

  const [selectedPlan, setSelectedPlan] = React.useState(
    PLAN_OPTIONS[0].planType
  );

  const [selectedAddOn, setSelectedAddOn] = React.useState([]);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <PlanContext.Provider
      value={{
        PLAN_OPTIONS,
        ADD_ONS,
        yearlyBilling,
        setYearlyBilling,
        selectedPlan,
        setSelectedPlan,
        selectedAddOn,
        setSelectedAddOn,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export default FormProvider;
