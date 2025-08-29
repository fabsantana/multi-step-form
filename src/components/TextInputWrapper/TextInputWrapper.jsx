import React from 'react';
import TextInput from '../TextInput';
import styles from './TextInputWrapper.module.css';
import PlanContext from '../../context/PlanContext';
function TextInputWrapper() {

  const {name, setName, email, setEmail, phone, setPhone} = React.useContext(PlanContext)

  return (
    <div className={styles.textInputWrapper}>
      <TextInput
        required
        label='Name'
        type='text'
        placeholder='e.g. Stephen King'
        value={name}
        onChange ={event => setName(event.target.value)}
      />
      <TextInput
        required
        label='Email'
        type='email'
        placeholder='e.g. stephenking@lorem.com'
        value={email}
        onChange ={event => setEmail(event.target.value)}
      />
      <TextInput
        required
        label='Phone Number'
        type='tel'
        placeholder='e.g. 234 567 890'
        pattern='[0-9]{10}'
        title='Enter a 10 digit phone number'
        maxLength='10'
        value={phone}
        onChange ={event => setPhone(event.target.value)}
      />
    </div>
  );
}

export default TextInputWrapper;
