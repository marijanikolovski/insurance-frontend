import React, { useEffect, useState } from 'react'
import { Header } from '../componenet/Header'
import { Sidebar } from '../componenet/Sidebar'
import { FormComponent } from '../componenet/FormComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getCites } from '../store/cities/slice'
import { selectCities } from '../store/cities/selector'
import { getAge } from '../store/age/slice'
import { selectAge } from '../store/age/selector'
import { getDiscounts } from '../store/discount/slice'
import { selectDiscounts } from '../store/discount/selector'
import { getCoverages } from '../store/coverage/slice'
import { selectCoverages } from '../store/coverage/selector'
import { selectInsurance } from '../store/insurance/selector'
import { calculateInsurance, setResetForm } from '../store/insurance/slice'
import { Review } from '../componenet/Review'

export const AppKompare = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities)
  const ages = useSelector(selectAge)
  const discounts = useSelector(selectDiscounts)
  const coverages = useSelector(selectCoverages)
  const insurance = useSelector(selectInsurance)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getCites());
    dispatch(getAge())
    dispatch(getDiscounts())
    dispatch(getCoverages())
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(calculateInsurance(insurance));
    setOpen(true)
    dispatch(setResetForm());
  };

  return (
    <div >
      <form onSubmit={handleOnSubmit}>
        <Header
          discounts={discounts}
          insurance={insurance}
        />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormComponent
          cities={cities}
          ages={ages}
            insurance={insurance}
            handleOnSubmit={handleOnSubmit}
        />
          <Sidebar
            coverages={coverages}
            insurance={insurance}
          />
      </div>
      </form>
      {open &&
        <Review />
      }
    </div>
  )
}
