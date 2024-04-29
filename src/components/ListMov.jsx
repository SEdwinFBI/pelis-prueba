import React, { useEffect, useState } from 'react'


const ListMov = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk3ZWYyM2QyNGI4MzlhNDU1ODQyYjRmMzJlNGY1NSIsInN1YiI6IjY2MmZiOWZiZTMzZjgzMDEyYjIyMzYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_-40R_Af5KSHuilifXKVZeqTfBXU1UOTBAjHS8uWOg'
        }
    };

    const urlBase = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
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
            <div className="lista" style={{textAlign:"center"}}>Accion  </div>
            <section className='row row-cols-1 row-cols-md-3 ' style={{ float:"right"}}>
            {
                    pelis.map((pelicula) => (//injectar las peliculas
                   
                        <div className="col offset-6 offset-md-0 " key={pelicula.id}>


                            <div className="card " style={{width:"13rem", marginTop:"10px"}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`} className="card-img-top" alt="..." style={{height:"20rem", objectFit:"cover"}}/>
                                    <div className="card-body">
                                        <h5 className='card-title' style={{fontSize:"10px"}}>{pelicula.title}</h5>
                                        <p className="card-text" style={{fontSize:"10px"}}>{pelicula.release_date}</p>
                                     
                                    </div>
                            </div>
                        </div>
                    ))

                }
            </section>
            
               

          


        </>
    )
}

export default ListMov
