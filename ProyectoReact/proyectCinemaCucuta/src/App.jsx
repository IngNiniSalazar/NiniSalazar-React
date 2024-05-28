import { useState, useEffect } from 'react'//guardar una variable
import Card from './components/Cards'
import './App.css'


function App() {
  const [pagina, setPagina] = useState(0) //eje central de la aplicacion
  const [personajes, setPersonajes] = useState([])//arreglo vacio
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)//personajes de rickimortin
      .then((response) => response.json())
      .then((data)=>setPersonajes(data.results))//informacion de los personajes se guarde
  }, [pagina])
  console.log(pagina)
  const incrementarContador = () => {
    setPagina(pagina + 1)
  }
  const decrementaContador = () => {
    setPagina(pagina - 1)
  }

  return (
    <div>
      {personajes.length !==0 && personajes.map((personaje)=>(//repite el codigo cuantas veces hay el personaje
        <Card key ={personaje.id} title={personaje.name} genre={personaje.gender} status={personaje.status} img={personaje.image}/>
      ))}
      <button classname="efecto" onClick={decrementaContador}>-Contador</button>
      <button classname="efecto" onClick={incrementarContador}>+Contador</button>
      
    </div>
  );
}

export default App;

