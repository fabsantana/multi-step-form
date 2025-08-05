import React from 'react';
import styles from './TextInput.module.css'
function TextInput({type='text', label, ...delegated }) {
  return (
    <div className={styles.flexColumn}>
      <label className={styles.textInputLabel}>{label}</label>
      <input {...delegated} className={styles.textInput} type={type}></input>
    </div>
  )
}

export default TextInput;
