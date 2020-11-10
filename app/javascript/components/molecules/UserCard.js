import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useParams } from "react-router-dom";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50%',
    margin: 'auto',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  }
}))

export default function UserCard(portfolio) {
  const classes = useStyles()
  const { id } = useParams()
  const [ user, setUser ] = useState([])

  useEffect(async() => {
    try{
      const res = await axios.get(`/api/v1/users/${id}`)
      setUser(res.data)
    }catch(error){
      console.log(error)
    }
  }, [])

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} > P </Avatar>
        }
        title= {user.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { user.selfIntroduction }
        </Typography>
      </CardContent>
    </Card>
  )
}

