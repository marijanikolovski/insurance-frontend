import React from 'react'
import styles from "../styles/FormComponent.module.css"
import { setInsurance } from '../store/insurance/slice'
import { useDispatch } from 'react-redux';

export const FormComponent = ({
  cities,
  ages,
  insurance,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.p}>* The availability of discounts depends on the given criteria
      </p>
      <h2>User data</h2>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Name:</label>
          <input
          required
            type="text"
            className={styles.input}
          value={insurance.name}
          onChange={({ target }) =>
            dispatch(setInsurance({ ...insurance, name: target.value }))
          }
          />
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Age:</label>
          <select
            className={styles.select}
          value={insurance.age_id}
          onChange={({ target }) =>
            dispatch(setInsurance({ ...insurance, age_id: target.value }))}
          >
            <option
              key={'-1'}
            >
              Select an age
            </option>
            {ages.map((age, index) => (
              < option
                key={index}
                value={age.id}
                required
              >
                {age.age}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>City:</label>
          <select
            className={styles.select}
          value={insurance.city_id}
          onChange={({ target }) =>
            dispatch(setInsurance({ ...insurance, city_id: target.value }))}
          >
            <option
              key={'-1'}
            >
              Select a city
            </option>
            {cities.map((city, index) => (
              < option
                key={index}
                value={city.id}
                required
              >
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Vehicle Power:</label>
        <input
            type="number"
            className={styles.input}
          value={insurance.vehicle_power}
          onChange={({ target }) =>
            dispatch(setInsurance({ ...insurance, vehicle_power: target.value }))
          }
          />
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Voucher:</label>
        <input
            type="number"
            className={styles.inputHalf}
          value={insurance.voucher}
          onChange={({ target }) =>
            dispatch(setInsurance({ ...insurance, voucher: target.value }))
          }
          />
          <label className={styles.currency}>EUR</label>
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Price match:</label>
        <input
            type="number"
            className={styles.inputHalf}
          value={insurance.price_match}
          onChange={({ target }) =>
            dispatch(setInsurance({ ...insurance, price_match: target.value }))
          }
          />
          <label className={styles.currency}>EUR</label>
        </div>
        <div className={styles.btnField}>
        <button
          className={styles.btn}
        >
          Save
        </button>
      </div>
    </div>
  )
}
