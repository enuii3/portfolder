import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from "react-router-dom"
import axios from 'axios'

const csrf_token = document.getElementsByName("csrf-token")[0].getAttribute("content")
axios.defaults.headers.common["X-CSRF-Token"] = csrf_token

export default function CreatePortfolioForm() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [github, setGithub] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [userId, setUserId] = useState(1)
  const history = useHistory()

  async function createPortfolio(e){
    try{
      await axios.post(`/api/v1/portfolios`, {
        title,
        description,
        github,
        url,
        image,
        user_id: userId,
      })
      e.preventDefault()
      history.push(`/users/${userId}`)
    }catch(error){
      console.dir(error)
    }
  }

  return (
    <>
      <Container component="main" maxWidth="sm">
        <form className={classes.root}>
          <TextField
            label="ポートフォリオのタイトル"
            variant="outlined"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            label="ポートフォリオの説明"
            multiline
            rows={5}
            variant="outlined"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            label="Github URL"
            variant="outlined"
            value={github}
            onChange={e => setGithub(e.target.value)}
          />
          <TextField
            label="ポートフォリオ URL"
            variant="outlined"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <TextField
            label="スクリーンショット"
            variant="outlined"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          {/* 画像投稿は後日実装 */}
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={createPortfolio}
        >push</Button>
      </Container>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '50ch',
      margin: theme.spacing(1),
    },
  },
}))

