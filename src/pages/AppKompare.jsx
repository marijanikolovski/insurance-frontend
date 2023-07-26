import React, { useEffect } from 'react'
import { Header } from '../componenet/Header'
import { Sidebar } from '../componenet/Sidebar'
import { FormComponent } from '../componenet/FormComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getCites } from '../store/cities/slice'
import { selectCities } from '../store/cities/selector'
import { getAge } from '../store/age/slice'
import { selectAge } from '../store/age/selector'

export const AppKompare = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities)
  const ages = useSelector(selectAge)

  useEffect(() => {
    dispatch(getCites());
    dispatch(getAge())
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormComponent
          cities={cities}
          ages={ages}
        />
        <Sidebar />
      </div>
    </div>
  )
}
