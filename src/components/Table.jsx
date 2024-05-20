import React, { useEffect, useState } from 'react'
import { listCar } from './Carrusel'

const Table = () => {
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
        <>
            <form className="d-flex offset-1" role="search" >
                <input className="form-control me-2" type="search" placeholder="buscar por" aria-label="Search" style={{ marginBottom: "30px", marginTop: "30px" }} />
                <button className="btn btn-outline-success" type="submit" style={{ marginBottom: "30px", marginTop: "30px", marginRight: "10px" }}>Search</button>
            </form>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: "700", color: "white" }}>Estrenos</p>
            </div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Numero</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">proyectar</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        listCar.map(
                            (car) => (

                                <tr key={car.id}>
                                    <th scope="row">{car.id}</th>
                                    <td>{car.Nombre}</td>
                                    <td><a href={car.vid}><button className='btn btnColor'>ir</button></a></td>

                                </tr>
                            )
                        )
                    }
                    <tr >
                        <th scope="row">5</th>
                        <td>Guerra civil</td>
                        <td><a href='https://doodstream.com/e/d0xcp44uk5f2'><button className='btn btnColor'>ir</button></a></td>

                    </tr>
                    <tr >
                        <th scope="row">-</th>
                        <td>Mas..........</td>
                        <td>-</td>


                    </tr>
                    {
                        estrenos.map(
                            (car) => (
                                <tr key={car.id}>
                                    <th scope="row">{car.id}</th>
                                    <td>{car.title}</td>
                                    <td><a href="#"><button className='btn btnColor'>ir</button></a></td>

                                </tr>
                            )
                        )
                    }


                </tbody>
            </table>

        </>
    )
}

export default Table
