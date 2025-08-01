import React from 'react';
import styles from './Form.module.css';
import FormTitle from '../FormTitle';
import TextInputWrapper from '../TextInputWrapper'

function Form({ children }) {
  return (
    <form className={styles.form}>
      <FormTitle
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      />
      <TextInputWrapper />
      {children}
    </form>
  );
}

export default Form;
