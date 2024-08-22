import data from '../../data/productos.json'
import './btn.css'
const btns = data.sections

export default function Btns(){
    return(
        <nav className='service'>
            {btns.map( (btn, index )=> (
                <a 
                key={index} 
                className='boton' 
                href={`#${btn.id}`}>
                    {btn.title}
                </a>
            ))}
        </nav>
    )
}