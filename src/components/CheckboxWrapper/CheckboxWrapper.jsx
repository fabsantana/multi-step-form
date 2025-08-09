import React from 'react';
import Checkbox from '../Checkbox';
import styles from './CheckboxWrapper.module.css';
import PlanContext from '../../context/PlanContext';

function CheckboxWrapper() {
  const {PLAN_OPTIONS} = React.useContext(PlanContext)
  return (
    <fieldset className={styles.checkboxWrapper}>
      <Checkbox name='Online service' description='Access to multiplayer games' price=''/>
      <Checkbox name='Larger storage' description='Extra 1TB of cloud save' price=''/>
      <Checkbox name='Customizable profile' description='Custom theme on your profile' price=''/>
    </fieldset>
  );
}

export default CheckboxWrapper;
