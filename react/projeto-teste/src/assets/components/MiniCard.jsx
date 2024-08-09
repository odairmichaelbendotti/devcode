import './style.css'
import { BsGeoAltFill } from "react-icons/bs";
import { LuSignalHigh } from "react-icons/lu";

function MiniCard(props) {
    return (
        <div className="container">
            <h1 className="titulo">{props.titulo}</h1>
            <hr />
            <div className='local'>
            <LuSignalHigh className='icone'/>
                <p><span>Experiência</span>: {props.exp}</p>
            </div>
            <div className='local'>
                <BsGeoAltFill className='icone'/>
                <p>{props.local}</p>
            </div>
            <div className='button'>
            Cadastrar
            </div>
        </div>
    )
}

export default MiniCard