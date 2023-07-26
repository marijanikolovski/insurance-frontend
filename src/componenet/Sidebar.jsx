import React from 'react'
import styles from "../styles/Sidebar.module.css"

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Coverages</h2>
      <div className={styles.textField}>
        <input
          type='checkbox'
        // checked={newCar.isAutomatic}
        //  onChange={({ target }) => {
        //   setNewCar({ ...newCar, isAutomatic: target.checked });
        // }}
        />
        <label>Bonus Protection</label>
      </div>
      <div className={styles.textField}>
        <input
          type='checkbox'
        // checked={newCar.isAutomatic}
        //onChange={({ target }) => {
        //  setNewCar({ ...newCar, isAutomatic: target.checked });
        //}}
        />
        <label>AO +</label>
      </div>
      <div className={styles.textField}>
        <input
          type='checkbox'
        // checked={newCar.isAutomatic}
        //onChange={({ target }) => {
        //  setNewCar({ ...newCar, isAutomatic: target.checked });
        //}}
        />
        <label>Glass protection</label>
      </div>
    </div>
  )
}
