import React from 'react';
import styles from './Summary.module.css';
import Button from '../Button';
import LineItem from '../LineItem';
import StepContext from '../../context/StepContext';
import PlanContext from '../../context/PlanContext';

function Summary() {
  const { setStep } = React.useContext(StepContext);

  const { selectedPlan, selectedAddOn, yearlyBilling, PLAN_OPTIONS, ADD_ONS } =
    React.useContext(PlanContext);

  function handleChangePlan() {
    setStep(2);
  }

  const plan = PLAN_OPTIONS?.find((p) => p.planType === selectedPlan);
  const planPeriod = yearlyBilling ? 'yr' : 'mo';
  const planPrice = yearlyBilling ? plan?.planYearlyCost : plan?.planMonthlyCost;
  const planLabel = plan ? plan.planType : '';

  const selectedAddOns =
    ADD_ONS?.filter((addOn) => selectedAddOn.includes(addOn.addOnName)) || [];
  const addOnsTotal = selectedAddOns.reduce(
    (sum, addOn) =>
      sum + (yearlyBilling ? addOn.addOnYearlyCost : addOn.addOnMonthlyCost),
    0
  );

  const total = (planPrice || 0) + addOnsTotal;

  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.itemsWrapper}>
        <div className={styles.selectedPlanWrapper}>
          <div className={styles.flexColumn}>
            <span className={styles.planName}>
              {planLabel} ({yearlyBilling ? 'Yearly' : 'Monthly'})
            </span>
            <Button
              onClick={handleChangePlan}
              className={styles.changeButton}
              variant='borderless'
            >
              Change
            </Button>
          </div>
          <span className={styles.planCost}>
            ${planPrice}/{planPeriod}
          </span>
        </div>
        <hr className={styles.horizontalRule} />
        <div className={styles.addonsWrapper}>
          {selectedAddOns.map(({ addOnName, addOnYearlyCost, addOnMonthlyCost }) => (
            <LineItem
              key={addOnName}
              name={addOnName}
              cost={`+${
                yearlyBilling ? addOnYearlyCost : addOnMonthlyCost
              }/${planPeriod}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.totalWrapper}>
        <LineItem
          className={styles.totalCost}
          name={`Total (per ${yearlyBilling ? 'year' : 'month'})`}
          cost={`$${total}/${planPeriod}`}
        />
      </div>
    </div>
  );
}

export default Summary;
