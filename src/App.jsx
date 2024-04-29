import { useState } from 'react'

//import './App.css'
import NavBar from './components/NavBar'
import ListMov from './components/ListMov'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ListMov/>
    </>
  )
}

export default App
