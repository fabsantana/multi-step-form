import React from 'react';

function Icon({source, ...delegated}) {
  return <img {...delegated} src={source}></img>;
}

export default Icon;  
