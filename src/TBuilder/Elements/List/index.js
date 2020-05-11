import React from 'react'

export default function List(props) {
  const { elementData } = props
  return (
    <div styles={elementData.styles}>
      List
    </div>
  )
}