import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Alignment({ value, label, item, handleChangeStyle }) {
  const [ align, setAlign ] = useState('')
  useEffect(() => {
    if(value) {
      setAlign(value)
    }
  }, [value])
  const classes = useStyles();

  const handleChange = (e) => {
    setAlign(e.target.value)
    handleChangeStyle(item, e.target.value)
  }
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={align}
        onChange={handleChange}
        label="Choose Font" 
      >
        {
          ['flex-start', 'flex-end', 'center', 'space-between',
            'space-around', 'initial', 'inherit'].map((val, index) => {
              return <MenuItem key={`font-${index}`} value={val} >{val}</MenuItem>
            })
        }
      </Select>
    </FormControl>
  )
}

