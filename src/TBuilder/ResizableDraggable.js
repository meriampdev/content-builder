import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import { useDrop } from 'react-dnd'
import Droppable from './Droppable'
import Button from '@material-ui/core/Button';
import { saveLayout, getSavedLayouts, saveEditedLayout } from './utils'
import DropDown from '../components/DropDown'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function AddRemoveLayout(props) {
  const defaultProps = {
    className: "layout", rowHeight: 50,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  }

  const [ state, setState ] = useState({
    items: [{ i: '0', x: 0, y: 0, w: 2, h: 2 }],
    newCounter: 0, 
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
  }) 

  const onDropElement = (dropProps) => {
    let w = 2, h = 2, data = dropProps.data
    if(dropProps.data.id === 'header') { w = 12 }
    else if(dropProps.data.id === 'paragraph') { w = 4; h = 6; }
    else if(dropProps.data.id === 'text') { w = 4; h = 1; }

    let newState = { ...state,
      items: state.items.concat({
        i: "n" + state.newCounter, x: (state.items.length * 2) % 12,
        y: Infinity, data: data,
        w: w, h: h
      }),
      newCounter: state.newCounter + 1
    }
    setState(newState)
  }

  const [{ isOver }, drop] = useDrop({
    accept: 'Element',
    drop: (dropProps) => onDropElement(dropProps),
    canDrop: (prop) => prop.type === 'Element',
    collect: monitor => ({ isOver: !!monitor.isOver(), canDrop: !!monitor.canDrop() }),
  })

  const createElement = (el) => {
    return <div key={el.i} data-grid={el}>
      <Droppable index={el.i} 
        elementData={el.data}
        onRemoveItem={onRemoveItem} 
        updateElementData={updateElementData}
      />
    </div>
  }

  const onAddItem = () => {
    /*eslint no-console: 0*/
    // y: Infinity, // puts it at the bottom
    let newState = { ...state,
      items: state.items.concat({
        i: "n" + state.newCounter,
        x: (state.items.length * 2) % 12,
        y: Infinity, w: 2, h: 2, data: null
      }),
      newCounter: state.newCounter + 1
    }
    setState(newState)
  }

  const updateElementData = (data, index) => {
    let newItems = state.items.map((item) => {
      if(item.i === index) return { ...item, data: data }
      return item
    })
    let newState = { ...state, items: newItems }
    setState(newState)
  }

  const onBreakpointChange = (breakpoint, cols) => {
    let newState = { ...state, breakpoint, cols }
    setState(newState)
  }

  const onLayoutChange = (layout) => {
    let newState = { ...state, layout }
    setState(newState)
  }

  const onRemoveItem = (i) => {
    let newItems = _.reject(state.items, { i: i })
    let newState = { ...state, items: newItems }
    setState(newState)
  }

  const onSave = () => {
    let layoutWithElementData = state.layout.map((item, i) => {
      return { ...item, data: state.items[i].data }
    })
    let count = getSavedLayouts()
    if(state.loadedLayoutID) {
      saveEditedLayout(state.loadedLayoutID, layoutWithElementData)
    } else {
      saveLayout( `Untitled ${count.length}`, layoutWithElementData)
    }
  }

  const onSelectItem = (item) => {
    let newState = { ...state, 
      items: item.layout, newCounter: Math.random(),
      loadedLayout: item.name, loadedLayoutID: item.id }
    setState(newState)
  }

  return (
    <div ref={drop}>
      <div className='action-panel'>
        <Button onClick={onAddItem} variant='outlined' style={{marginBottom: '10px'}}>Add Item</Button>
        <Button onClick={onSave} variant='outlined' style={{marginBottom: '10px'}}>Save</Button>
        <DropDown onSelect={onSelectItem} buttonLabel='Saved Layouts' labelKey='name' menuItems={getSavedLayouts()} />
        <div>Loaded Layout: {state.loadedLayout}</div>
      </div>
      <ResponsiveReactGridLayout
        className='TBuilder-grid-layout'
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        {...defaultProps}
      >
        {_.map(state.items, el => createElement(el))}
      </ResponsiveReactGridLayout>
    </div>
  )
}