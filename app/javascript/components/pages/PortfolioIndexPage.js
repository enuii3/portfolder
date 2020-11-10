import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PortfolioCard from '../molecules/PortfolioCard'

export default function PortfolioIndexPage() {
  const [ portfolios, setPortfolios ] = useState([])

  useEffect(async() => {
    try{
      const res = await axios.get('/api/v1/portfolios')
      setPortfolios(res.data)
    }catch(error){
      console.dir(error)
    }
  }, [])

  return (
    <ul>
      {portfolios.map(portfolio => {
        return(
          <li key={portfolio.id}>
            <PortfolioCard portfolio={portfolio} />
          </li>
        )})}
    </ul>
  )
}

