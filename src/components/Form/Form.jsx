import React from 'react';
import styles from './Form.module.css';
import FormTitle from '../FormTitle'

function Form({ children}) {
  return (
    <form className={styles.form}>
      <FormTitle title="Select your plan" description="You have the option of monthly or yearly billing." />
      {children}
    </form>
  );
}

export default Form;
