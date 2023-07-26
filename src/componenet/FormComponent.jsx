import React from 'react'
import styles from "../styles/FormComponent.module.css"

export const FormComponent = ({ cities, ages }) => {

  return (
    <div className={styles.container}>
      <h2>User data</h2>
      <form>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Name:</label>
          <input
            required
            placeholder='Name'
            type="text"
            className={styles.input}
          //value={newInvitation.place_church}
          //onChange={({ target }) =>
          // dispatch(setNewInvitation({ ...newInvitation, place_church: target.value }))
          //}
          />
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Age:</label>
          <select
            className={styles.select}
          //value={newInvitation.design_id}
          //onChange={({ target }) =>
          //dispatch(setNewInvitation({ ...newInvitation, design_id: target.value }))}
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
          //value={newInvitation.design_id}
          //onChange={({ target }) =>
          //dispatch(setNewInvitation({ ...newInvitation, design_id: target.value }))}
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
            required
            placeholder='Vehicle Power'
            type="number"
            className={styles.input}
          //value={newInvitation.place_church}
          //onChange={({ target }) =>
          // dispatch(setNewInvitation({ ...newInvitation, place_church: target.value }))
          //}
          />
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Voucher:</label>
          <input
            placeholder='Voucher'
            type="number"
            className={styles.inputHalf}
          //value={newInvitation.place_church}
          //onChange={({ target }) =>
          // dispatch(setNewInvitation({ ...newInvitation, place_church: target.value }))
          //}
          />
          <label className={styles.currency}>EUR</label>
        </div>
        <div className={styles.textField}>
          <label className={styles.textLabel}>Price match:</label>
          <input
            placeholder='Price match'
            type="number"
            className={styles.inputHalf}
          //value={newInvitation.place_church}
          //onChange={({ target }) =>
          // dispatch(setNewInvitation({ ...newInvitation, place_church: target.value }))
          //}
          />
          <label className={styles.currency}>EUR</label>
        </div>
        <div className={styles.btnField}>
          <button className={styles.btn}>Save</button>
        </div>
      </form>
    </div>
  )
}
