import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'

export default function Text(props) {
  const { elementData } = props
  let intialValue = elementData.styles.text || "Lorem Ipsum is simply dummy text."
  const text = useRef(intialValue)

  const handleChange = evt => {
    text.current = evt.target.value;
    let clean = text.current ? text.current.replace("&nbsp;"," ") : ""
    props.handleChangeStyle('text', clean)
  }

  return <ContentEditable style={elementData.styles} html={text.current} onChange={handleChange} />
}