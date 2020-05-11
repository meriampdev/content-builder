import React from 'react'

export default function Link(props) {
  const { elementData } = props
  return (
    <div styles={elementData.styles}>
      <a target="_" href={elementData.styles.hyperlink}>{elementData.styles.text}</a>
    </div>
  )
}