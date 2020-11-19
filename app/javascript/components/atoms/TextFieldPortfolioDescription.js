import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextFieldPortfolioDescription({description, inputDescription}){

  return(
    <>
      <TextField
        label="ポートフォリオの説明"
        variant="outlined"
        value={description}
        onChange={e => inputDescription(e)}
      />
    </>
  )
}

