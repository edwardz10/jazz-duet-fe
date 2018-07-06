import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullStandards from './FullStandards'
import Standard from './Standard'
import StandardsAPI from './standardsApi'

// The Roster component matches one of two different routes
// depending on the full pathname
const Standards = () => (
  <Switch>
    <Route exact path='/standards' render={() => <FullStandards allStandards={StandardsAPI.all()} />} />
    <Route path='/standards/:id' component={Standard}/>
  </Switch>
)


export default Standards

