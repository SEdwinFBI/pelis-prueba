import React from 'react'
import ListMov from './ListMov'



export var Variable = true;

//no usado en esta aplicacion
const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navcolor">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MDEE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" onClick={()=> (
                 Variable = true
                )}
                 href="#">Inicio</a>
              </li>
              {/*<li className="nav-item">
                <a className="nav-link" href="#">Genero</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pols</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" onClick={()=> (
                  variable()? alert("hola"):alert("queso")
                )}
                href="#">Series</a>

              </li>
*/}
              
              <li className="nav-item">
                <a className="nav-link" onClick={()=> (
                 Variable = false
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

export default NavBar
