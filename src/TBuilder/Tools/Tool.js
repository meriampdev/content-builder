import React from 'react'
import { useDrag } from 'react-dnd'

export default function Tool(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'Element', data: props },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div ref={drag} className='tool-item'>
      <div className='tool-item-icon'>{props.icon}</div>
      <div className='tool-item-label'>{props.label}</div>
    </div>
  )
}