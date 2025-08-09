import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import FormContainer from './components/FormContainer'
import StepSidebar from './components/StepSidebar'
import Form from './components/Form'
import StepProvider from './components/StepProvider'
import FormProvider from './components/FormProvider'
import './App.css'

function App() {
  return (
    <StepProvider>
      <FormProvider>
        <FormContainer>
          <StepSidebar />
          <Form />
        </FormContainer>
      </FormProvider>
    </StepProvider>
  )
}

export default App
