import React, { useEffect, useState } from 'react'

const Estrenos = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk3ZWYyM2QyNGI4MzlhNDU1ODQyYjRmMzJlNGY1NSIsInN1YiI6IjY2MmZiOWZiZTMzZjgzMDEyYjIyMzYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_-40R_Af5KSHuilifXKVZeqTfBXU1UOTBAjHS8uWOg'
    }
  };

  const urlBase = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc';
  const [estrenos, setEstrenos] = useState([]);//para cargar las peliculas


  const obtenerEstr = async () => {//funcion para obtener las pelis
    const response = await fetch(urlBase, options);
    const res = await response.json();

    setEstrenos(res.results);
    console.log(res.results);
  }

  useEffect(() => {
    obtenerEstr();//renderizar las peliculas
  }, []);

  return (
    <div className='container' >

      <form className="d-flex offset-2" role="search" >
        <input className="form-control me-2" type="search" placeholder="buscar por" aria-label="Search" style={{ marginBottom: "30px", marginTop: "30px" }} />
        <button className="btn btn-outline-success" type="submit" style={{ marginBottom: "30px", marginTop: "30px" }}>Search</button>
      </form>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "700", color: "white" }}>Estrenos</p>
      </div>
      <section className='row row-cols-1 offset-2'>


        {
          estrenos.map((pelicula) => (
            <div className="col" key={pelicula.id}>


              <div className="card" style={{ width: "13rem", marginTop: "10px" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`} className="card-img-top" alt="..." style={{ height: "100%", objectFit: "cover" , borderRadius:"10px"}} />
                
                  <h5 className='card-title' style={{ fontSize: "10px" }}>{pelicula.title}</h5>
                  <p className="card-text" style={{ fontSize: "10px" }}>{"Estreno: "+ pelicula.release_date}</p>

             
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Estrenos
