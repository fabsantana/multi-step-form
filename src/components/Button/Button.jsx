import React from 'react';
import styles from './Button.module.css';

function Button({ children, variant, ...delegated }) {
  const variantClass =
    variant === 'secondary'
      ? styles.secondary
      : variant === 'borderless'
      ? styles.borderless
      : styles.primary;

  return (
    <button className={`${styles.button} ${variantClass}`} {...delegated}>
      {children}
    </button>
  );
}

export default Button;
