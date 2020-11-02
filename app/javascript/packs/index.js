import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import PortfolioCard from '../components/PortfolioCard'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PortfolioCard />,
    document.body.appendChild(document.createElement('div')),
  )
})

