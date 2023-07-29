import React from 'react'
import styles from "../styles/Sidebar.module.css"
import { useDispatch } from 'react-redux';
import { setInsurance } from '../store/insurance/slice';

export const Sidebar = ({ coverages, insurance }) => {
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      //Add checked item into insurance
      dispatch(setInsurance({ ...insurance, coverage_id: [...insurance.coverage_id, value] }))
    } else {
      //Remove unchecked item from insurance
      const filteredList = insurance.coverage_id.filter((item) => item !== value);
      dispatch(setInsurance({ ...insurance, coverage_id: filteredList }));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Coverages</h2>
      {coverages.map((coverage) => (
        <div key={coverage.id} className={styles.textField}>
          <input
            type='checkbox'
            value={coverage.id}
            onChange={handleSelect}
          />
          <label>{coverage.name}</label>
        </div>
      ))}
    </div>
  )
}
