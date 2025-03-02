import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app-container">
    <Header></Header>
    <Menu></Menu>
    <Content></Content>
    <Footer></Footer>
   </div>
  )
}

export default App
