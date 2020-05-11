import React from 'react'

export default function Image(props) {
  return(
    <div className='image-element'>
      <img src={require("./empty.jpg")} alt='imahe-element' />
    </div>
  )
}