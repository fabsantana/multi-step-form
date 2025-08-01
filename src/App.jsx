import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import FormContainer from './components/FormContainer'
import StepSidebar from './components/StepSidebar'
import Form from './components/Form'
import './App.css'

function App() {

  return (
    <FormContainer>
      <StepSidebar />
      <Form title='Select your plan' />
    </FormContainer>
  )
}

export default App
