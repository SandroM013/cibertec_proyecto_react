import data from "../../../data/productos.json"
import Card from "./Card"
import "./carp.css"
const dataresp = data.sections

export default function Seccion(){
    return(
        <>
        {dataresp.map((data, index) => (
            <section key={index} > 
                <h2 key={data.id} id={data.id}>{data.title}</h2>
                <div className="Seccion">
                    {data.items.map((d, index) => (
                            <Card 
                            index={index}
                            image={d.image} 
                            caption={d.caption}
                            price={d.price}
                            description={d.description}/>
                    ))}
                </div>
            </section>
            
        ))}
        </>
    )
}