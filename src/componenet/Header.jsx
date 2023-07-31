import React, { useState } from 'react'
import styles from "../styles/Header.module.css"
import { setInsurance } from '../store/insurance/slice';
import { useDispatch } from 'react-redux';

export const Header = ({ discounts, insurance }) => {
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      //Add checked item into insurance
      dispatch(setInsurance({ ...insurance, discount_id: [...insurance.discount_id, value] }))
    } else {
      //Remove unchecked item from insurance
      const filteredList = insurance.discount_id.filter((item) => item !== value);
      dispatch(setInsurance({ ...insurance, discount_id: filteredList }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textField}>
        {insurance.price_match ?
          <p className={styles.p}>*</p> :
          <input
            type='checkbox'
            value={discounts[0]?.id}
            onChange={handleSelect} /> 
        }
        <label className={styles.label}>{discounts[0]?.name}</label>
      </div>
      <div className={styles.textField}>
        {insurance.coverage_id?.length >= 2 && !insurance.price_match ?
          <input
            type='checkbox'
            checked={true}
            onChange={handleSelect} /> :
          <p className={styles.p}>*</p>
        }
        <label className={styles.label}>{discounts[1]?.name}</label>
      </div>
      <div className={styles.textField}>
        {(insurance.vehicle_power > 80 && !insurance.price_match) ? 
          <input
            type='checkbox'
            checked={true}
            onChange={handleSelect} /> :
          <p className={styles.p}>*</p>
        }
        <label className={styles.label}>{discounts[2]?.name}</label>
      </div>
      <div className={styles.textField}>
        {insurance.vehicle_power > 100 && !insurance.price_match ?
        <input
          type='checkbox'
            checked={true}
            onChange={handleSelect} /> :
          <p className={styles.p}>*</p>
        }
        <label className={styles.label}>{discounts[3]?.name}</label>
      </div>
      <div className={styles.textTotal}>
        <p className={styles.p}>Total price</p>
        <p className={styles.p}>{insurance.total_price}</p>
      </div>
    </div>
  )
}  
