import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function ErrorTextFieldPortfolioTitle(props){

  return(
    <>
      <TextField
        error
        label="ポートフォリオのタイトル"
        variant="outlined"
        onChange={e => props.inputTitle(e)}
        helperText={props.errorMessage}
      />
    </>
  )
}

