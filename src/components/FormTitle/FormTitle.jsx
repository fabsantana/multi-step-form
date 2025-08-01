import React from 'react';
import styles from './FormTitle.module.css';
function FormTitle({ title, description }) {
  return (
    <div className={styles.formTitleWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.description}>{description}</h2>
    </div>
  );
}

export default FormTitle;
