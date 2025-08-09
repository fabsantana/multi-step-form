import React from 'react';
import styles from './Form.module.css';
import FormTitle from '../FormTitle';
import TextInputWrapper from '../TextInputWrapper';
import Button from '../Button/Button';
import StepContext from '../../context/StepContext';
import CardWrapper from '../CardWrapper';
import ToggleWrapper from '../ToggleWrapper'
import CheckboxWrapper from '../CheckboxWrapper'
import Summary from '../Summary/Summary';

function Form() {
  const { step, handleGoBack, handleSubmit } = React.useContext(StepContext);

  let content;
  switch (step) {
    case 1:
      content = (
        <>
          <FormTitle
            title='Personal info'
            description='Please provide your name, email address, and phone number.'
          />
          <TextInputWrapper />
          <Button type='submit' variant='primary'>
            Next Step
          </Button>
        </>
      );
      break;
    case 2:
      content = (
        <>
          <FormTitle
            title='Select your plan'
            description='You have the option of monthly or yearly billing.'
          />
          <CardWrapper />
          <ToggleWrapper/>
          <div className={styles.buttonGroup}>
            <Button onClick={handleGoBack} type='button' variant='borderless'>
              Go Back
            </Button>
            <Button type='submit' variant='primary'>
              Next Step
            </Button>
          </div>
        </>
      );
      break;
    case 3:
      content = (
        <>
          <FormTitle
            title='Pick add-ons'
            description='Add-ons help enhance your gaming experience.'
          />
          <CheckboxWrapper />
          <div className={styles.buttonGroup}>
            <Button onClick={handleGoBack} type='button' variant='borderless'>
              Go Back
            </Button>
            <Button type='submit' variant='primary'>
              Next Step
            </Button>
          </div>
        </>
      );
      break;
    case 4:
      content = (
        <>
          <FormTitle
            title='Finishing up'
            description='A Double-check everything looks OK before confirming.'
          />
          <Summary />
          <div className={styles.buttonGroup}>
            <Button onClick={handleGoBack} type='button' variant='borderless'>
              Go Back
            </Button>
            <Button type='submit' variant='secondary'>
              Confirm
            </Button>
          </div>
        </>
      );
      break;
    default:
      content = <div>Error</div>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {content}
    </form>
  );
}

export default Form;
