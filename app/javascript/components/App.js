import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioCard from './PortfolioCard'
import UserCard from './UserCard'

export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path={'/'}>
          <PortfolioCard />
        </Route>
        <Route path={'/users/:id'}>
          <UserCard />
        </Route>
      </Switch>
    </Router>
  )
}

