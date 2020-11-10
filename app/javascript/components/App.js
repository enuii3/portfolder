import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioIndexPage from './pages/PortfolioIndexPage'
import UserCard from './molecules/UserCard'

export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path={'/'}>
          <PortfolioIndexPage />
        </Route>
        <Route path={'/users/:id'}>
          <UserCard />
        </Route>
      </Switch>
    </Router>
  )
}

