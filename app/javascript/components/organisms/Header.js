import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

import CreatePortfolioPage from '../pages/CreatePortfolioPage'

export default function Header(props) {
  const classes = useStyles()
  const history = useHistory()

  function transitionCreatePortfolioPage(e){
    e.preventDefault()
    history.push('/portfolios/new')
  }

  return(
    <>
      <Toolbar className={classes.header}>
        <Typography variant="h4">
          <Link style={{ color: 'blue' }} to='/'>PortFolder</Link>
        </Typography>
        <div>
          {/* 下記の二つの機能の実装は後日対応 */}
          <Button onClick={transitionCreatePortfolioPage} size='small'>push</Button>
          <Button size='small'>log in</Button>
        </div>
      </Toolbar>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    marginBottom: '10px'
  }
}))

