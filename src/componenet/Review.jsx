import React from 'react'
import styles from "../styles/Review.module.css"
import { useSelector } from 'react-redux'
import { selectInsurance } from '../store/insurance/selector'

export const Review = () => {
  const insurance = useSelector(selectInsurance)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Insurance review</h1>
      <h3>Base price: {insurance.base_price.toFixed(2)}</h3>
      <h2>Total price: {insurance.total_price.toFixed(2)}</h2>
    </div>
  )
}
