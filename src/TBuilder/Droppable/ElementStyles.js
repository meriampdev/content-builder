import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import IconButton from '@material-ui/core/IconButton';
import InputRenderer from './InputRenderer'
import StyledMenu from './StyledMenu'
import styleLabels from './styleLabels'

export default function ElementStyles(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStyle = (key, value) => {
    props.handleChangeStyle(key, value)
  }

  const { styles } = props
  return (
    <div className='esettings-btn'>
      <IconButton onClick={handleClick} color="primary" aria-label="Styles" component="span">
          <SettingsOutlinedIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className='styles-input-container'>
          {
            styles ? Object.keys(styles).map((key, index) => {
              return <InputRenderer 
                handleChangeStyle={handleChangeStyle}
                item={key} value={styles[key]} label={styleLabels[key]} 
                key={`style-${index}`} />
            }) : null
          }
        </MenuItem>
      </StyledMenu>
    </div>
  )
}