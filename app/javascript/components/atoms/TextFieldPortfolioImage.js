import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextFieldPortfolioGithub({image, inputImage}){

  return(
    <>
      <TextField
        label="ポートフォリオのスクリーンショット"
        variant="outlined"
        value={image}
        onChange={e => inputImage(e)}
      />
    </>
  )
}

