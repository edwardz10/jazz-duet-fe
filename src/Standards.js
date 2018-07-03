import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullStandards from './FullStandards'
import Standard from './Standard'

// The Roster component matches one of two different routes
// depending on the full pathname
const Standards = () => (
  <Switch>
    <Route exact path='/standards' component={FullStandards}/>
    <Route path='/standards/:id' component={Standard}/>
  </Switch>
)


export default Standards

