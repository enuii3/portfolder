import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextFieldPortfolioTitle({title, inputTitle}){

  return(
    <>
      <TextField
        label="ポートフォリオのタイトル"
        variant="outlined"
        value={title}
        onChange={e => inputTitle(e)}
      />
    </>
  )
}

