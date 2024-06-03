import { useState, useEffect } from 'react'//guardar una variable
import Card from './components/Cards'
import Portada from './components/portada'
import './App.css'


function App() {
  const [pagina, setPagina] = useState(0) //eje central de la aplicacion
  const [personajes, setPersonajes] = useState([])//arreglo vacio
  const [info, setinfo] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)//personajes de rickimortin
      .then((response) => response.json())
      .then((data) => {
        setinfo(data.info)
        setPersonajes(data.results)})//informacion de los personajes se guarde
        
  }, [pagina])
console.log(info)


  useEffect(() => {
    const url = new URL(window.location)//toda la inf de la url
    const params = new URLSearchParams(url.search)//parametros de busqueda crea un objeto
    const page = params.get('page')// agarre las paginas
    
    if(page=='null')setPagina(page)
    console.log(page)
  }, [])

  const addQueryParams = () => {
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(pagina) + 1)//iterar sobre los parametros que estan arriba y el set agrega
    window.history.replaceState({}, '', url)
    setPagina(parseInt(pagina) + 1)
  }

  const addQueryParams2 = () => {
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(pagina) + 1)//iterar sobre los parametros que estan arriba y el set agrega
    window.history.replaceState({}, '', url)
    if(pagina>0)setPagina(parseInt(pagina)-1)
  }
 

  return (
    <div>
      {personajes.length !== 0 && personajes.map((personaje) => (//repite el codigo cuantas veces hay el personaje
        <Card key={personaje.id} title={personaje.name} genre={personaje.gender} status={personaje.status} img={personaje.image} />
      ))}
      <button  onClick={addQueryParams2}>&laquo;</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button  onClick={addQueryParams}>&raquo;</button>

    </div>
  );
}

export default App;

