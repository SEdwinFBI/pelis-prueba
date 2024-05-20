import { useState } from 'react'

//import './App.css'
//import NavBar, { Variable } from './components/NavBar'//se importa
import ListMov from './components/ListMov'//se importa

import Estrenos from './components/Estrenos'//se importa
import Carrusel from './components/Carrusel'
import TvShows from './components/TvShows'
import Table from './components/Table'







function App() {
  const [listComponent, setListComponent] = useState(true)
  var time = 400;

  const NavBar = () => {

    return (
      <>
        <nav className="navbar navbar-expand-lg navcolor">
          <div className="container-fluid">
            <div>
            
            <img src="https://static.vecteezy.com/system/resources/previews/019/045/797/non_2x/owl-graphic-clipart-design-free-png.png" alt="logo" style={{width:"50px"}}/>
            </div>
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" onClick={() => (
                    setTimeout(() => {
                      setListComponent(true)
                    }, time)   
                  )}
                    href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => (
                   setTimeout(() => {
                    setListComponent(false)
                  }, time)
                  )} href="#">TV show</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }


  return (
    <>
      <NavBar />{/*se carga el Nav*/}
      <section className='contenedor'>
        <div className='seccion1'>{/*se carga el Nav*/}
          <Table />
          {/*se carga la seccion estrenos <Estrenos />*/}
        </div>
        <div className='seccion2'>
          <div className='carrusel'>
            <Carrusel className='car' />
          </div>
          {listComponent ?   
            <ListMov />                     
            :
            <TvShows />
          }
        </div>
      </section>
    </>
  )
}

export default App
