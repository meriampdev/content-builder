import React, { useState, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

export default function Text(props) {
  const [ styles, setStyles ] = useState({})
  useEffect(()=>{
    if(props.styles) {
      let backgroundImage = !props.styles.backgroundImage ? require("./header-bg.jpg") : props.styles.backgroundImage
      let styles = { ...props.styles, backgroundImage: `url(${backgroundImage})`  }
      setStyles(styles)
    }
  }, [props.styles])
  const text = useRef("Lorem Ipsum is simply dummy text.")

  const handleChange = evt => {
    text.current = evt.target.value;
    let clean = text.current ? text.current.replace("&nbsp;"," ") : ""
    props.handleChangeStyle('text', clean)
  }

  return <ContentEditable style={styles} html={text.current} onChange={handleChange} />
}