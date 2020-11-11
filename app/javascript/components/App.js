import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './organisms/Header'
import Footer from './organisms/Footer'
import UserPage from './pages/UserPage'
import PortfolioIndexPage from './pages/PortfolioIndexPage'
import CreatePortfolioPage from './pages/CreatePortfolioPage'

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
        <Route path={'/portfolios/new'}>
          <CreatePortfolioPage />
        </Route>
      </Switch>
    <Footer />
    </Router>
  )
}

