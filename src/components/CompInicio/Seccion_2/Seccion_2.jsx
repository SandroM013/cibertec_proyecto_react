import data from '../../../data/inicio.json'
import './seccion_2.css'

const articlesData = data;
function Seccion_2(){
    return(
    <section className="sectionI2">
        {articlesData.map(({imgSrc, altText, title, description }) =>(
            <article>
                <img src={imgSrc} alt={altText} />
                <h2>{title}</h2>
                <p>
                <strong>{description.strongText}</strong> {description.text}
                </p>
          </article>
        ))}
        
    </section>
    )
}

export default Seccion_2