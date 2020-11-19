import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function ErrorTextFieldPortfolioDescription(props){

  return(
    <>
      <TextField
        error
        label="ポートフォリオの詳細"
        variant="outlined"
        onChange={e => props.inputDescription(e)}
        helperText={props.errorMessage}
      />
    </>
  )
}

