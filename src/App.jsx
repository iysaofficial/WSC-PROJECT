import { useState } from 'react'
import './App.css'

import Navigation from './components/navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
      <h1>Vite + React</h1>
    </>
  )
}

export default App
