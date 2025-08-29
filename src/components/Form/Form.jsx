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
import ConfirmationMessage from '../ConfirmationMessage'

function Form() {
  const { step, handleGoBack, handleSubmit } = React.useContext(StepContext);

  let content;
  switch (step) {
    case 1:
      content = (
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormTitle
            title='Personal info'
            description='Please provide your name, email address, and phone number.'
          />
          <TextInputWrapper />
          <Button type='submit' variant='primary'>
            Next Step
          </Button>
        </form>
      );
      break;
    case 2:
      content = (
        <form onSubmit={handleSubmit} className={styles.form}>
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
        </form>
      );
      break;
    case 3:
      content = (
        <form onSubmit={handleSubmit} className={styles.form}>
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
        </form>
      );
      break;
    case 4:
      content = (
        <form onSubmit={handleSubmit} className={styles.form}>
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
        </form>
      );
      break;
    case 5:
      content = (
        <ConfirmationMessage title="Thank you!" content="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."/>
      )
      break;
    default:
      content = <div className={styles.errorMessage}>An Error has occured. Please try again.</div>;
  }

  return (
    <>
      {content}
    </>
  );
}

export default Form;
