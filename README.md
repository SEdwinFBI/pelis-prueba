
# Proyecto Pagina de Peliculas

Mucho gusto, espero que sea de su agrado el proyecto que realize en la prueba tecnica
es totalmente responsivo

# vista de la app
![captura](Capturas_de_pantalla/cap1.png)

# Codigo de renderizacion de la app
![captura](Capturas_de_pantalla/app.png)

# Codigo de Navegador y maquetacion
![nav](Capturas_de_pantalla/Nav.png)

# Codigo de estrenos, consumo de api y maquetacion
![estrenos](Capturas_de_pantalla/Estrenos1.png)

# Codigo de lista de peliculas, consumo de api y maquetacion
![lista](Capturas_de_pantalla/Lista.png)



## 🛠 Tecnologias

### Todas las Tecnologias: 
javascript, CSS, HTML, React js, Node js, Boostrap
### React js: 
para la realizacion del proyecto principalmente use esta libreria de javascript para poder renderizar todo los componentes que nececito, y poder consumir la API y maquetarlo de la mejor manera y sencilla

### Vite: 
Lo use para construir el proyecto y poder previzualisar cualquier cambio que haga
### Boostrap: 
Para poder maquetarlo rapidamente use este framework de css para darle los estilos necesarios


## API The Moviedb
#### Para poder consumir la Api nececite la url y la apiKey para poder acceder a su informacion

#### seccion 1
##### parte de la izquierda donde esta el buscador
```http
  GET https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc
```

| parametro | Tipo    | Descripcion               |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk3ZWYyM2QyNGI4MzlhNDU1ODQyYjRmMzJlNGY1NSIsInN1YiI6IjY2MmZiOWZiZTMzZjgzMDEyYjIyMzYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_-40R_Af5KSHuilifXKVZeqTfBXU1UOTBAjHS8uWOg |

#### seccion 2
##### parte de la derecha done se encuentra todas las peliculas

```http
  GET https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
```

| parametro | Tipo    | Descripcion               |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk3ZWYyM2QyNGI4MzlhNDU1ODQyYjRmMzJlNGY1NSIsInN1YiI6IjY2MmZiOWZiZTMzZjgzMDEyYjIyMzYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_-40R_Af5KSHuilifXKVZeqTfBXU1UOTBAjHS8uWOg|


## Consumo de la Api
### Todas las peliculas

```javascript
const ListMov = () => {
    const options = {//api key
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk3ZWYyM2QyNGI4MzlhNDU1ODQyYjRmMzJlNGY1NSIsInN1YiI6IjY2MmZiOWZiZTMzZjgzMDEyYjIyMzYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_-40R_Af5KSHuilifXKVZeqTfBXU1UOTBAjHS8uWOg'
        }
    };

    const urlBase = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const [pelis, setPelis] = useState([]);//para cargar las peliculas


    const obtenerMov = async () => {//funcion para obtener las pelis asincrona
        const response = await fetch(urlBase, options);
        const res = await response.json();

        setPelis(res.results);
        console.log(res.results);//impresion en consola de los resultados
    }

    useEffect(() => {
        obtenerMov();//renderizar las peliculas
    }, []);

}
```

### Estrenos

```javascript
const Estrenos = () => {
    const options = {//API KEY
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
```





