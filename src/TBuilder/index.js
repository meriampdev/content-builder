import React from "react";
import Layout from './ResizableDraggable'
import './styles/styles.css'
import './styles/example-styles.css'
import './styles/tbuilder.scss'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Tools from './Tools'

export default function makeLayout() {
  class ListeningLayout extends React.Component {
    render() {
      return (
        <DndProvider backend={Backend}>
          <div className='TBuilder'>
            <Tools />
            <Layout />
          </div>
        </DndProvider>
      )
    }
  }

  return <ListeningLayout />;
}