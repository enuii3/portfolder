import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

export default function UserHeader(portfolio) {
  const classes = useStyles();

  return (
    <CardHeader
      avatar={
        <Avatar className={classes.large}>P</Avatar>
      }
      title={
        <Link to= {`/users/${portfolio.userId}`} >
          { portfolio.userName }
        </Link>
      }
      subheader={portfolio.updatedAt}
    />
  )
}

