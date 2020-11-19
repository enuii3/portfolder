import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextFieldPortfolioUrl({url, inputUrl}){

  return(
    <>
      <TextField
        label="ポートフォリオのURL"
        variant="outlined"
        value={url}
        onChange={e => inputUrl(e)}
      />
    </>
  )
}

