import React from 'react';
import styles from './TextInput.module.css'
function TextInput({type='text', label, placeholder }) {
  return (
    <>
      <label className={styles.textInputLabel}>{label}</label>
      <input className={styles.textInput} type={type} placeholder={placeholder}></input>
    </>
  )
}

export default TextInput;
