import React from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function ImageUpload({ type, value, label, item, handleChangeStyle }) {

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      handleChangeStyle(item, URL.createObjectURL(img))
    }
  }

  return (
    <Box maxWidth="410px">
      <TextField 
        type='file'
        variant="outlined" 
        onChange={handleChange}
        label={label} 
      />
    </Box>
  )
}