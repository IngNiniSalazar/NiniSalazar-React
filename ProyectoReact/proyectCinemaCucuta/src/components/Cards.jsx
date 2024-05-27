
import Title from "./titulo"
import Image from "./imagen"
import GatoAnimado from "../assets/garfield.jpg"
import Details from "./details"


const Card = (props) => {
    return(
    <div className="container">
        
        <Image url={GatoAnimado}/>
        <Title title={props.title}/>
        <Details genre="Infantil" status ="Activo de 2:00 a 4:00"/>
    </div>
    )
}

export default Card