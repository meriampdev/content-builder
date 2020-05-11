import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'

export default function Text(props) {
  const text = useRef("Lorem Ipsum is simply dummy text.")

  const handleChange = evt => {
    text.current = evt.target.value;
  }
   
  const handleBlur = () => {
    props.handleChangeStyle('text', text.current)
  }

  return <ContentEditable style={props.styles} html={text.current} onBlur={handleBlur} onChange={handleChange} />
}