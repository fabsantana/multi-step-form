import React from 'react';
import TextInput from '../TextInput'
import styles from './TextInputWrapper.module.css';
function TextInputWrapper() {
  return (
    <div className={styles.textInputWrapper}>
      <TextInput label='Name' type='text'/>
      <TextInput label='Email' type='email'/>
      <TextInput label='Phone Number' type='tel'/>
    </div>
  )
}

export default TextInputWrapper;
