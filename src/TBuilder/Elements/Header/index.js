import React from 'react'
import ImageBGHeader from './ImageBGHeader'

export default function Header(props) {
  const { elementData } = props
  return (
    <ImageBGHeader handleChangeStyle={props.handleChangeStyle} styles={elementData.styles} />
  )
}