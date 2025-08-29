import React from 'react';
import styles from './ConfirmationMessage.module.css'
import Icon from '../Icon';

function ConfirmationMessage({title, content}) {
  return (
    <div className={styles.messageWrapper}>
      <Icon source="../../../assets/images/icon-thank-you.svg"/>
      <h1 className={styles.messageTitle}>{title}</h1>
      <p className={styles.messageContent}>{content}</p>
    </div>
  )
}

export default ConfirmationMessage;
