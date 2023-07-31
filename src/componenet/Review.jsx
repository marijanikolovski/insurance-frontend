import React from 'react'
import styles from "../styles/Review.module.css"
import { useSelector } from 'react-redux'
import { selectInsurance } from '../store/insurance/selector'

export const Review = () => {
  const insurance = useSelector(selectInsurance)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Insurance review</h1>
      {insurance.price_match &&
        <h4>Price match: {insurance.price_match} EUR</h4>
      }
      {insurance.base_price ?
        <h4>Base price: {insurance.base_price} EUR</h4> :
        <h4>Base price: {insurance.base_price_without_age} EUR</h4>
      }
      {insurance.price_match < insurance.base_price_without_age &&
        <h4 style={{ color: "red" }}>
          Message: {insurance.message}
        </h4>
      }
      {insurance.value_bonus_protection > 0 &&
        <h4>Bonus protection: {insurance.value_bonus_protection.toFixed(2)} EUR</h4>
      }
      {insurance.value_AO_user_over30 > 0 &&
        <h4>AO+ for user over 30 year: {insurance.value_AO_user_over30.toFixed(2)} EUR</h4>
      }

      {insurance.value_AO_user_under30 > 0 &&
        <h4>AO+ for user under 30 year: {insurance.value_AO_user_under30.toFixed(2)} EUR</h4>
      }
      {insurance.value_glass_protection > 0 &&
        <h4>Glass protection: {insurance.value_glass_protection.toFixed(2)} EUR</h4>
      }
      {insurance.value_commercial_discount > 0 &&
        <h4>Commercial discount: {insurance.value_commercial_discount.toFixed(2)} EUR</h4>
      }
      {insurance.value_strong_car_surcharge > 0 &&
        <h4>Strong car surcharge: {insurance.value_strong_car_surcharge} EUR</h4>
      }
      {insurance.value_adviser_discount_bonus > 0 &&
        <h4>Adviser discount for bonus protection: {insurance.value_adviser_discount_bonus.toFixed(2)} EUR</h4>
      }
      {insurance.value_adviser_discount_ao_younger > 0 &&
        <h4>Adviser discount for AO+ yunger than 30: {insurance.value_adviser_discount_ao_younger.toFixed(2)} EUR</h4>
      }
      {insurance.value_adviser_discount_ao_older > 0 &&
        <h4>Adviser discount for AO+ older than 30: {insurance.value_adviser_discount_ao_older.toFixed(2)} EUR</h4>
      }
      {insurance.value_adviser_discount_glass_protection > 0 &&
        <h4>Adviser discount for glass protection: {insurance.value_adviser_discount_glass_protection.toFixed(2)} EUR</h4>
      }
      {insurance.value_sumer_discount > 0 &&
        <h4>Sumer discount: {insurance.value_sumer_discount.toFixed(2)} EUR</h4>
      }
      {insurance.voucher > 0 &&
        <h4>Voucher: {insurance.voucher} EUR</h4>
      }
      {(insurance.price_match > insurance.base_price_without_age || !insurance.price_match) &&
        <h4>Total price: {insurance.total_price.toFixed(2)} EUR</h4>
      }
    </div>
  )
}

