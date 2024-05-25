import React from 'react'



export const listCar = [
    {
        id: 1,
        Nombre: "El planeta de los simios: Nuevo reino",
        Sinopsis: "",
        img: "https://camo.githubusercontent.com/dc2cb0d273f2b90747606a1b6f1b7de312ef45949ac5d0fcf7c37342b088c22c/68747470733a2f2f696d6167652e746d64622e6f72672f742f702f6f726967696e616c2f66797079644369706357444b445454436f507563427364475958572e6a7067",
        vid: "https://streamwish.to/e/tiap9la3hmje",
    },
    {
        id: 2,
        Nombre: "Godzilla x Kong",
        Sinopsis: "",
        img: "https://m.media-amazon.com/images/S/pv-target-images/759f6869092d9f9da3d9f46cd1ffa776971a2972be5de9e5c789c594672fd99c._SX1080_FMjpg_.jpg",
        vid: "https://streamwish.to/e/5a748ahgndus",
    },
    {
        id: 3,
        Nombre: "Titanes del Pacifico",
        Sinopsis: "",
        img: "https://media.gq.com.mx/photos/5be9d2595c1fcbff3f4c2d9e/master/w_1600%2Cc_limit/pacific_rim__5278.jpg",
        vid: "https://streamwish.to/e/g6zhe7ggvh7t",
    },
    {
        id: 4,
        Nombre: "Capitan America: civil war",
        Sinopsis: "",
        img: "https://depor.com/resizer/9a6RUyyEBIs72KZ0JadtLS80gPo=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CP66BJBSBJA5RNBANHBJBHU3WM.jpg",
        vid: "https://streamwish.to/e/aw7chthc7ybn",
    },
    {
        id: 5,
        Nombre: "Atlas",
        Sinopsis: "",
        img: "https://www.channelguidemag.com/wp-content/uploads/2024/05/AtlasBB-678x381.jpg",
        vid: "https://streamwish.to/e/e1x6y2t0d3g8",
    },
]
const Carrusel = () => {

    return (
        <div className='carrusel'>
            <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <a href="https://streamwish.to/e/9ag1ieia5an6"><img src="https://nacaomultiversal.com.br/wp-content/uploads/2024/04/civilwar.jpeg" className="img-cover" alt="..." />
                            <div className="carousel-caption  d-md-block">
                                <h5>Guerra Civil</h5></div>
                        </a>
                    </div>
                    {
                        listCar.map(peli => (
                            <div className="carousel-item " key={peli.id} >
                                <a href={peli.vid}><img src={peli.img} className="img-cover" alt="..." />
                                    <div className="carousel-caption  d-md-block">
                                        <h5>{peli.Nombre}</h5>

                                    </div>
                                </a>
                            </div>
                        ))
                    }

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel
