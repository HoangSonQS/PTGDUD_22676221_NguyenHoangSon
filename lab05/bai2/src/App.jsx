import { useState } from 'react'
import FeaturePage from './components/FeaturePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FeaturePage></FeaturePage>
    </>
  )
}

export default App
