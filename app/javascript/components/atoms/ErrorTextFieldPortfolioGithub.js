import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function ErrorTextFieldPortfolioGithub(props){

  return(
    <>
      <TextField
        error
        label="GithubのURL"
        variant="outlined"
        onChange={e => props.inputGithub(e)}
        helperText={props.errorMessage}
      />
    </>
  )
}

