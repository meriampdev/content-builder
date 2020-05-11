import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import fonts from './fonts'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function SelectFont(props) {
  // LoadFonts()
  const classes = useStyles();
  const [ selectedFont, setFont ] = useState("Roboto")

  const handleChange = (e) => {
    window.WebFont.load({
      google: {
        families: [e.target.value]
      }
    });
    setFont(e.target.value)
    
    props.handleChangeStyle(props.item, e.target.value)
  }
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Choose Font</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selectedFont}
        onChange={handleChange}
        label="Choose Font" 
      >
        {
          fonts.map((font, index) => {
            return <MenuItem key={`font-${index}`} value={font.label} style={{fontFamily: font.label}}>{font.label}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}

// const LoadFonts = () => {
//   useEffect(()=>{
//     let fontsArray = fonts.map((font) => {
//       return font.label
//     })
//     window.WebFont.load({
//       google: {
//         families: fontsArray
//       }
//     });
//   }, [])
// }