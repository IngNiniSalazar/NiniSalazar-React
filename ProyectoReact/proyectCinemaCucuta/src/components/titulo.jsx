
import React from 'react';

function Title(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div className='containerTitle'>
    <h2>{props.title}</h2>
    </div>
  )
}


export default Title;