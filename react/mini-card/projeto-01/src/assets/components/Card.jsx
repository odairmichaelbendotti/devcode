import './style.css'
import { FaSignal } from "react-icons/fa6";
import { BsFillGeoAltFill } from "react-icons/bs";

function Card(devcode) {
    return (
        <div className='container-card'>
            <h1>Desenvolver</h1>
            <hr />
            <div className='icone-container'>
                <FaSignal className='icone'/>
                <p><span>Experiência: </span>{devcode.xp}</p>
            </div>

            <div className='icone-container'>
                <BsFillGeoAltFill className='icone'/>
                <p><span>Cidade: </span>{devcode.cidade}</p>
            </div>

            <div className="botao">
                Cadastrar
            </div>
        </div>
    )
}

export default Card