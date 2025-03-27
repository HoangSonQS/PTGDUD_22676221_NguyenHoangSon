import { useState } from 'react'
import Calculator from './components/Calculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator></Calculator>
    </>
  )
}

export default App
