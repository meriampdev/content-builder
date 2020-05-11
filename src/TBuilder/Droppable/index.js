import React, { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import Elements from '../Elements'
import ElementStyles from './ElementStyles'

export default function Droppable(props) {
  const [ elementData, setElementData ] = useState({})
  useEffect(() => {
    if(props.elementData) {
      setElementData(props.elementData)
    }
  }, [props.elementData])

  const [{ isOver }, drop] = useDrop({
    accept: 'Element',
    drop: (dropProps) => { 
      setElementData(dropProps.data)
      // props.updateElementData(dropProps.data, props.index) 
    },
    canDrop: (prop) => prop.type === 'Element',
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  const handleChangeStyle = (key, value) => {
    let oldStyle = elementData.styles
    let newStyle = { ...oldStyle, [key]: value }
    let newData = { ...elementData, styles: newStyle }
    setElementData(newData)
    props.updateElementData(newData, props.index) 
  }

  return (
    <div style={{height: '100%'}} ref={drop} className='droppable-element'>
      <div className='eremove-btn'>
        <IconButton onClick={() => props.onRemoveItem(props.index)} aria-label="remove" component="span">
          <DeleteOutlineTwoToneIcon />
        </IconButton>
      </div>
      <ElementStyles handleChangeStyle={handleChangeStyle} styles={elementData.styles ? elementData.styles : null} />
      <div className='content'>
        { 
          Elements[elementData.id] ? 
            React.cloneElement(Elements[elementData.id], { elementData: elementData, handleChangeStyle: handleChangeStyle }) 
          : <span className="text">{ elementData.label ? elementData.label : props.index}</span>
        }
      </div>
    </div>
  )
}