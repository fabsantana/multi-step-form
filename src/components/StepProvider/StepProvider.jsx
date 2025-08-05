import React from 'react';

import StepContext from '../../context/StepContext'

function StepProvider({children}) {
  const [step, setStep] = React.useState(1)

  function handleSubmit(event) {
    event.preventDefault();
    setStep(step + 1);
  }

  function handleGoBack() {
    setStep(step - 1);
  }
  return <StepContext.Provider value={{step, setStep, handleSubmit, handleGoBack}}>{children}</StepContext.Provider>;
}

export default StepProvider;
