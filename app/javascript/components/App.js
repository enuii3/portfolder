import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './organisms/Header'
import Footer from './organisms/Footer'
import PortfolioIndexPage from './pages/PortfolioIndexPage'
import UserPage from './pages/UserPage'

export default function App(){
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <PortfolioIndexPage />
        </Route>
        <Route path={'/users/:id'}>
          <UserPage />
        </Route>
      </Switch>
    <Footer />
    </Router>
  )
}

