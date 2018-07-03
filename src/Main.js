import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Standards from './Standards'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/standards' component={Standards}/>
    </Switch>
  </main>
)

export default Main

