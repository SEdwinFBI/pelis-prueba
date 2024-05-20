import React, { useEffect, useState } from 'react'

const TvShows = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk3ZWYyM2QyNGI4MzlhNDU1ODQyYjRmMzJlNGY1NSIsInN1YiI6IjY2MmZiOWZiZTMzZjgzMDEyYjIyMzYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_-40R_Af5KSHuilifXKVZeqTfBXU1UOTBAjHS8uWOg'
        }
    };

    const urlBase = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const [pelis, setPelis] = useState([]);//para cargar las peliculas


    const obtenerMov = async () => {//funcion para obtener las pelis
        const response = await fetch(urlBase, options);
        const res = await response.json();

        setPelis(res.results);
        console.log(res.results);
    }

    useEffect(() => {
        obtenerMov();//renderizar las peliculas
    }, []);




    return (
        <>
            <div className="lista" style={{ textAlign: "center" }}>Series de Television  </div>
            <section className='row row-cols-1 row-cols-md-3 ' style={{ width:"100%" }}>
                {
                    pelis.map((pelicula) => (//injectar las peliculas

                        <div className="col offset-3 offset-md-0 itemCard" key={pelicula.id}>


                            <div className="" style={{ width: "16rem", marginTop: "10px" }}>
                                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`} className="card-img-top" alt="Img" style={{ height: "100%", objectFit: "cover", borderRadius:"10px"}} />

                                <h5 className='card-title' style={{ fontSize: "10px", fontWeight: "900" }}>{pelicula.name}</h5>
                                <p className="card-text" style={{ fontSize: "10px" }}>{"Estreno: " + pelicula.first_air_date}</p>
                            </div>
                        </div>
                    ))

                }
            </section>

        </>
    )
}

export default TvShows
