import React from 'react'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import StyledMenu from './StyledMenu'

export default function DropDown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='esettings-btn'>
      <Button variant='outlined' onClick={handleClick} color="primary" aria-label="Styles" component="span">
        {props.buttonLabel}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          props.menuItems.map((item, i) => {
            return <MenuItem onClick={() => props.onSelect(item)} key={`saved-${i}`} >{item[props.labelKey]}</MenuItem>
          })
        }
      </StyledMenu>
    </div>
  )
}