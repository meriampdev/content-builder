import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'

export default function Paragraph(props) {
  const { elementData } = props
  let initialText = elementData.styles.text || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  const text = useRef(initialText)

  const handleChange = evt => {
    text.current = evt.target.value;
    let clean = text.current ? text.current.replace("&nbsp;"," ") : ""
    props.handleChangeStyle('text', clean)
  }

  return <ContentEditable style={elementData.styles} html={text.current} onChange={handleChange} />
}