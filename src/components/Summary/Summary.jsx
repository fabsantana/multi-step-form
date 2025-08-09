import React from 'react';
import styles from './Summary.module.css'
import Button from '../Button';
import LineItem from '../LineItem';
import StepContext from '../../context/StepContext';

function Summary() {
  const {setStep} = React.useContext(StepContext)

  function handleChangePlan() {
    setStep(2)
  }
  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.itemsWrapper}>
        <div className={styles.selectedPlanWrapper}>
          <div className={styles.flexColumn}>
            <span className={styles.planName}>Arcade (Monthly)</span>
            <Button onClick={handleChangePlan} className={styles.changeButton} variant='borderless'>Change</Button>
          </div>
          <span className={styles.planCost}>$9/mo</span>
        </div>
        <hr className={styles.horizontalRule}/>
        <div className={styles.addonsWrapper}>
          <LineItem name='Online Service' cost='1'/>
          <LineItem name='Larger Storage' cost='2'/>
        </div>
      </div>
      <div className={styles.totalWrapper}>
        <LineItem className={styles.totalCost} name='Total (per month)' cost='12'/>
      </div>
    </div>
  )
}

export default Summary;
