import { useState } from 'react'

//import './App.css'
import NavBar from './components/NavBar'
import ListMov from './components/ListMov'

import Estrenos from './components/Estrenos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <section className='contenedor'>
        <div className='seccion1'>
          <Estrenos />
        </div>
        <div className='seccion2'>
          <ListMov />
        </div>


      </section>

    </>
  )
}

export default App
