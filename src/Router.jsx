import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { AppKompare } from './pages/AppKompare';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/kompare">
        <AppKompare />
      </Route>
      <Route exact path="/">
        <Redirect to="/kompare" />
      </Route>
    </Switch>
  )
}
