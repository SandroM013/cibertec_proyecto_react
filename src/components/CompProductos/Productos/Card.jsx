import "./carp.css"

export default function Card({image, caption, price, description, index}){
    return(
            <figure key={index}>
                <img src={image} className="menu-icono"/>
                <figcaption><strong>{caption}</strong></figcaption>
                <p>{price?price:description}</p>
            </figure>
        
    )
}