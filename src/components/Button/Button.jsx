import React from 'react';

function Button({ children, variant }) {
  return <button variant={variant}>{children}</button>;
}

export default Button;
