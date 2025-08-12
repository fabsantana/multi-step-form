import React from 'react';
import styles from './TextInput.module.css';
function TextInput({ type = 'text', label, ...delegated }) {
  const [inputText, setInputText] = React.useState('');

  function handleInputChange(event) {
    setInputText(event.target.value)
  }

  return (
    <div className={styles.flexColumn}>
      <label className={styles.textInputLabel}>{label}</label>
      <input
        {...delegated}
        onChange={handleInputChange}
        className={styles.textInput}
        type={type}
        value={inputText}
      />
    </div>
  );
}

export default TextInput;
