import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import UserHeader from '../atoms/UserHeader'

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: 'auto'
  },
  media: {
    height: 200,
  },
})

export default function PortfolioCard(props) {
  const classes = useStyles();
  const portfolio = props.portfolio
  const isVisibleUserHeader = props.isVisibleUserHeader

  return (
    <>
      <Card className={classes.root} >
        { isVisibleUserHeader &&
          <UserHeader
            userId={portfolio.userId}
            userName={portfolio.userName}
            updatedAt={portfolio.updatedAt}
          />
        }
        <CardActionArea onClick={() => {window.open(portfolio.url, '_blank')}}>
          <CardMedia
            className={classes.media}
            image={portfolio.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { portfolio.title }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { portfolio.description }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => {window.open(portfolio.github, '_blank')}}>
            Read Github
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

