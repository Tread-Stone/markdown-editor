import React, { useState, useCallback } from 'react'
import Typography from '@material-ui/core/Typography'
import Editor from './editor'
import Fzf from './fuzz'
import Preview from './preview'
import './app.css'
import AppMenu from './appmenu'


const App: React.FC = () => {
  const [doc, setDoc] = useState<string>(`# Sorting and Seaching Arrays

<b>Bubble Sort</b>
- Useful for alphabetical list and numerical sorting
- Array Elements are compared and numbers bubble toward the end of the array
- Swapping elements must be done in order to properly sort the array
`)
  const handleDoc = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className='app'>
      <AppMenu />
      <Editor onChange={handleDoc} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
