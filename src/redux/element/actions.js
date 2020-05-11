import { SET_CURRENT_ELEMENT, SET_COLLECTIONS } from './types'
import update from 'immutability-helper'

export const setCurrentElement = (payload, styles) => {
  
  return {
    type: SET_CURRENT_ELEMENT,
    payload: payload,
    styles: styles
  }
}

export const updateElement = (currentCollection, element) => {
  let newCollection = currentCollection.map((item) => {
    if(item.id === element.id) {
      item = { ...item, ...element }
    }
    return item
  })
  return {
    type: SET_COLLECTIONS,
    payload: newCollection
  }
}

export const addElement = (currentCollection, newElement) => {
  let newCollection = [ ...currentCollection, newElement ]
  return {
    type: SET_COLLECTIONS,
    payload: newCollection
  }
}

export const removeElement = (currentCollection, element) => {
  let newCollection = currentCollection.filter((f) => f.id !== element.id)
  return {
    type: SET_COLLECTIONS,
    payload: newCollection
  }
}

export const moveElement = (currentCollection, newElement, dragIndex, hoverIndex) => {
  let newCollection = update(currentCollection, {
    $splice: [
      [dragIndex, 1],
      [hoverIndex, 0, newElement]
    ]
  })

  return {
    type: SET_COLLECTIONS,
    payload: newCollection
  }
}
