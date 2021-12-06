import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Fzf from './fuzz'
import Preview from './preview'
import './app.css'


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
      <Fzf doc={doc} />
      <Editor onChange={handleDoc} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
