import datoSalon from "../../../../data/Salon/Alisados.json";
import datosMaquillaje from "../../../../data/Salon/Maquillaje.json"
import datosColor from "../../../../data/Salon/Color.json"
import datosDepilaciones from "../../../../data/Salon/Depilaciones.json"
import datosPeinados from "../../../../data/Salon/Peinados.json"
import datosUñas from "../../../../data/Salon/Uñas.json"
import BannerSalon from "../../Banner/BannerSalon";

import Card from "./Card";
import "./seccion.css";

const dataSeccion = datoSalon.treatments;
const dataMaquillaje = datosMaquillaje.services;
const datapeinados = datosPeinados.services;
const dataColor = datosColor.services
const dataDepilaciones = datosDepilaciones.services;
const dataUñas = datosUñas.services;

function Salon() {
  return (
    <div className="ContainerSalon">
      <BannerSalon/>
      <section className="element1">
        <h2 id="tratamientos">Tratamientos y alisados</h2>
        <div className="wrapper">
          <article className="container">
            {dataSeccion.map(({ id, num, title, description }) => (
                <Card id={id} 
                num={num}
                title={title}
                description={description}
                />
              
            ))}
          </article>
        </div>
      </section>

      <section className="element2">
        <h2 id="maquillaje">Maquillaje</h2>
        <div className="wrapper">
          <article className="container">
            {dataMaquillaje.map(({ id, num, title, description }) => (
              <>
                <Card id={id} 
                num={num}
                title={title}
                description={description}
                />
              </>
            ))}
          </article>
        </div>
      </section>

      <section className="element3">
        <h2 id="peinados">Peinados y Cortes</h2>
        <div className="wrapper">
          <article className="container">
            {datapeinados.map(({ id, num, title, description }) => (
              <>
                <Card id={id} 
                num={num}
                title={title}
                description={description}
                />
              </>
            ))}
          </article>
        </div>
      </section>

      <section className="element4">
        <h2 id="peinados">Peinados y Cortes</h2>
        <div className="wrapper">
          <article className="container">
            {dataUñas.map(({ id, num, title, description }) => (
              <>
                <Card id={id} 
                num={num}
                title={title}
                description={description}
                />
              </>
            ))}
          </article>
        </div>
      </section>

      <section className="element5">
        <h2 id="peinados">Peinados y Cortes</h2>
        <div className="wrapper">
          <article className="container">
            {dataColor.map(({ id, num, title, description }) => (
              <>
                <Card id={id} 
                num={num}
                title={title}
                description={description}
                />
              </>
            ))}
          </article>
        </div>
      </section>

      <section className="element6">
        <h2 id="peinados">Peinados y Cortes</h2>
        <div className="wrapper">
          <article className="container">
            {dataDepilaciones.map(({ id, num, title, description }) => (
              <>
                <Card id={id} 
                num={num}
                title={title}
                description={description}
                />
              </>
            ))}
          </article>
        </div>
      </section>

    </div>
  );
}
export default Salon;
