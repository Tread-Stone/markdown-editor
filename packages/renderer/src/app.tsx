import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Preview from './preview'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!')

  const handleDoc = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className='app'>
      <Editor onChange={handleDoc} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
