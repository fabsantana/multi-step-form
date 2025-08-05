import React from 'react';
import TextInput from '../TextInput'
import styles from './TextInputWrapper.module.css';
function TextInputWrapper() {
  return (
    <div className={styles.textInputWrapper}>
      <TextInput required label='Name' type='text' placeholder ='e.g. Stephen King'/>
      <TextInput required label='Email' type='email' placeholder="e.g. stephenking@lorem.com"/>
      <TextInput required label='Phone Number' type='tel' placeholder="e.g. 234 567 890"/>
    </div>
  )
}

export default TextInputWrapper;
