import React from 'react';
import styles from './FormContainer.module.css'

function FormContainer({ children }) {
  return <main className={styles.formWrapper}>{children}</main>;
}

export default FormContainer;
