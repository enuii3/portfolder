import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function ErrorTextFieldPortfolioUrl(props){

  return(
    <>
      <TextField
        error
        label="ポートフォリオのURL"
        variant="outlined"
        onChange={e => props.inputUrl(e)}
        helperText={props.errorMessage}
      />
    </>
  )
}

