import React from 'react'
import styles from "../styles/Header.module.css"

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textField}>
        <input
          type='checkbox'
        // checked={newCar.isAutomatic}
        //  onChange={({ target }) => {
        //   setNewCar({ ...newCar, isAutomatic: target.checked });
        // }}
        />
        <label className={styles.label}>Commercial <br /> discount</label>
      </div>
      <div className={styles.textField}>
        <input
          type='checkbox'
        // checked={newCar.isAutomatic}
        //onChange={({ target }) => {
        //  setNewCar({ ...newCar, isAutomatic: target.checked });
        //}}
        />
        <label className={styles.label}>Adviser <br /> discount</label>
      </div>
      <div className={styles.textField}>
        <input
          type='checkbox'
        // checked={newCar.isAutomatic}
        //onChange={({ target }) => {
        //  setNewCar({ ...newCar, isAutomatic: target.checked });
        //}}
        />
        <label className={styles.label}>Summer  <br /> discount</label>
      </div>
      <div className={styles.textField}>
        <input
          type='checkbox'
        // checked={newCar.isAutomatic}
        //onChange={({ target }) => {
        //  setNewCar({ ...newCar, isAutomatic: target.checked });
        //}}
        />
        <label className={styles.label}>Strong car <br /> surcharge</label>
      </div>
      <div className={styles.textTotal}>
        <p className={styles.p}>Total price</p>
        <p className={styles.p}>0</p>
      </div>
    </div>
  )
}  
