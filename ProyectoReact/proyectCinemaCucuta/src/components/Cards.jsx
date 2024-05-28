
import Title from "./titulo"
import Image from "./imagen"
import Details from "./details"


const Card = (props) => {
    return (
            <div className="container">

                <Image url={props.img} />
                <Title title={props.title} />
                <Details genre={props.genre} status={props.status} />
            </div>
    )
}

export default Card