export const getSavedLayouts = () => {
  const layouts = localStorage.getItem('layouts') ? JSON.parse(localStorage.getItem('layouts')) : [] 
  return layouts
}

export const saveLayout = (name, layout) => {
  let layouts = localStorage.getItem('layouts') ? JSON.parse(localStorage.getItem('layouts')) : [] 
  layouts = [ ...layouts, { name, layout, id: `draft-${layouts.length}` } ]
  localStorage.setItem('layouts', JSON.stringify(layouts))
}

export const saveEditedLayout = (id, layout) => {
  let layouts = localStorage.getItem('layouts') ? JSON.parse(localStorage.getItem('layouts')) : [] 
  layouts = layouts.map((item) => {
    if(item.id === id) {
      return { ...item, layout: layout }
    }
    return item
  })
  localStorage.removeItem('layouts')
  localStorage.setItem('layouts', JSON.stringify(layouts))
}