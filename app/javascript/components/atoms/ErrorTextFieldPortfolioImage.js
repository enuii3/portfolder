import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function ErrorTextFieldPortfolioImage(props){

  return(
    <>
      <TextField
        error
        label="ポートフォリオのスクリーンショット"
        variant="outlined"
        onChange={e => props.inputImage(e)}
        helperText={props.errorMessage}
      />
    </>
  )
}

