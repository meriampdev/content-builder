import React from 'react'
import './tools.scss'
import tool_items from './tool_items'
import Tool from './Tool'

export default function Tools(props) {
  return (
    <div className='tools-wrapper'>
      {
        tool_items.map((tool, index) => {
          return <Tool key={`tool-item-${index}`} {...tool} />
        })
      }
    </div>
  )
}