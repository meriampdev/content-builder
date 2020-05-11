import React from 'react'
import Box from '@material-ui/core/Box';
import Alignment from './StyleInputs/Alignment'
import ColorPicker from './StyleInputs/ColorPicker'
import NumberInput from './StyleInputs/NumberInput'
import SelectFont from '../../components/SelectFont'
import ImageUpload from './StyleInputs/ImageUpload'

export default function InputRenderer({ item, value, label, handleChangeStyle }) {
  const inputRenderer = () => {
    switch(item) {
      case 'height': 
      case 'fontSize':
        return <NumberInput type="number" handleChangeStyle={handleChangeStyle} item={item} value={value} label={label} />
      case 'text':
      case 'hyperlink':
        return <NumberInput type="text" handleChangeStyle={handleChangeStyle} item={item} value={value} label={label} />
      case 'background':
      case 'color':
      case 'borderColor':
        return <Box maxWidth="410px">
          <fieldset className='color-picker-fieldset'><legend>{label}</legend>
            <ColorPicker handleChangeStyle={handleChangeStyle} item={item} color={value} />
          </fieldset>
        </Box>
      case 'fontFamily':
        return <SelectFont handleChangeStyle={handleChangeStyle} item={item} />
      case 'justifyContent':
      case 'alignItems':
        return <Alignment handleChangeStyle={handleChangeStyle} item={item} value={value} label={label} />
      case 'backgroundImage':
        return <ImageUpload handleChangeStyle={handleChangeStyle} item={item} value={value} label={label} />
      case 'listContent':
        return null
      default: return <NumberInput type="text" handleChangeStyle={handleChangeStyle} item={item} value={value} label={item} />
    }
  }

  return inputRenderer()
}