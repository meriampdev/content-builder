import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function Height({ type, value, label, item, handleChangeStyle }) {
  const [ height, setHeight ] = useState('')
  useEffect(() => {
    if(value) {
      let num = ''
      if(value.includes('px')) num = value.replace('px', '')
      else if(value.includes('%')) num = value.replace('%', '')
      else num = value
        
      setHeight(num)
    }
  }, [ value ])

  const handleChange = (e) => {
    e.stopPropagation()
    setHeight(e.target.value)
    if(value.includes('px')) {
      handleChangeStyle(item, `${e.target.value}px`)
    } else if(value.includes('%')) {
      handleChangeStyle(item, `${e.target.value}%`)
    } else {
      handleChangeStyle(item, e.target.value)
    }
  }
  return(
    <Box maxWidth="410px">
      <TextField 
        type={type}
        variant="outlined" 
        value={height} 
        onChange={handleChange}
        label={label} 
      />
    </Box>
  )
}
