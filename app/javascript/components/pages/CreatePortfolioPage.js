import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from "react-router-dom"
import axios from 'axios'

import TextFieldPortfolioTitle from '../atoms/TextFieldPortfolioTitle'
import TextFieldPortfolioDescription from '../atoms/TextFieldPortfolioDescription'
import TextFieldPortfolioGithub from '../atoms/TextFieldPortfolioGithub'
import TextFieldPortfolioUrl from '../atoms/TextFieldPortfolioUrl'
import TextFieldPortfolioImage from '../atoms/TextFieldPortfolioImage'

import ErrorTextFieldPortfolioTitle from '../atoms/ErrorTextFieldPortfolioTitle'
import ErrorTextFieldPortfolioDescription from '../atoms/ErrorTextFieldPortfolioDescription'
import ErrorTextFieldPortfolioGithub from '../atoms/ErrorTextFieldPortfolioGithub'
import ErrorTextFieldPortfolioUrl from '../atoms/ErrorTextFieldPortfolioUrl'
import ErrorTextFieldPortfolioImage from '../atoms/ErrorTextFieldPortfolioImage'

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
  const [errorMessages, setErrorMessages] = useState({})
  const history = useHistory()

  function inputTitle(e){
    setTitle(e.target.value)
  }

  function inputDescription(e){
    setDescription(e.target.value)
  }

  function inputGithub(e){
    setGithub(e.target.value)
  }

  function inputUrl(e){
    setUrl(e.target.value)
  }

  function inputImage(e){
    setImage(e.target.value)
  }

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
      setErrorMessages(error.response.data)
    }
  }

  return (
    <>
      <Container component="main" maxWidth="sm">
        <form className={classes.root}>
          {errorMessages.title === undefined
            ? <TextFieldPortfolioTitle title={title} inputTitle={inputTitle} />
            : <ErrorTextFieldPortfolioTitle title={title} inputTitle={inputTitle} errorMessage={errorMessages.title} />
          }
          {errorMessages.description === undefined
            ? <TextFieldPortfolioDescription description={description} inputDescription={inputDescription} />
            : <ErrorTextFieldPortfolioDescription description={description} inputDescription={inputDescription} errorMessage={errorMessages.description} />
          }
          {errorMessages.github === undefined
            ? <TextFieldPortfolioGithub github={github} inputGithub={inputGithub} />
            : <ErrorTextFieldPortfolioGithub github={github} inputGithub={inputGithub} errorMessage={errorMessages.github} />
          }
          {errorMessages.url === undefined
            ? <TextFieldPortfolioUrl url={url} inputUrl={inputUrl} />
            : <ErrorTextFieldPortfolioUrl url={url} inputUrl={inputUrl} errorMessage={errorMessages.url} />
          }
          {errorMessages.image === undefined
            ? <TextFieldPortfolioImage image={image} inputImage={inputImage} />
            : <ErrorTextFieldPortfolioImage image={image} inputImage={inputImage} errorMessage={errorMessages.image} />
          }
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

