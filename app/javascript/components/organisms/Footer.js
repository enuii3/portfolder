import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography color="textSecondary" align="center">
        {'Copyright © '} PortFolder {new Date().getFullYear()}.
      </Typography>
    </footer>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 0),
  },
}))

