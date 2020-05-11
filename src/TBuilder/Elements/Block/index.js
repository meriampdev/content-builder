import React from 'react'

export default function Block(props) {
  const { elementData } = props
  return (
    <div styles={elementData.styles}>
      Block
    </div>
  )
}