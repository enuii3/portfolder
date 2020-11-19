import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextFieldPortfolioGithub({github, inputGithub}){

  return(
    <>
      <TextField
        label="GithubのURL"
        variant="outlined"
        value={github}
        onChange={e => inputGithub(e)}
      />
    </>
  )
}

