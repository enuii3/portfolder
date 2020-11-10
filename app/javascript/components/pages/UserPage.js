import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

import UserCard from '../molecules/UserCard'
import PortfolioCard from '../molecules/PortfolioCard'

export default function UserPage() {
  const [portfolios, setPortfolios ] = useState([])
  const { id } =  useParams()

  useEffect(async() => {
    try{
      const res = await axios.get(`/api/v1/users/${id}`)
      setPortfolios(res.data.portfolios)
    }catch(error){
      console.dir(error)
    }
  }, [])

  return (
    <>
      <UserCard />
      <ul>
        {portfolios.map(portfolio => {
          return(
            <li key={portfolio.id}>
              <PortfolioCard portfolio={portfolio} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

