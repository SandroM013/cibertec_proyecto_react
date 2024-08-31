import '../compServ.css'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <div className="header-contentP">
        <div className="texto">
          <h1>Servicios</h1>
          <p>
            Te brindamos los mejores servicios para que pases momentos
            inigualables y con resultados que sobrepasen tus expextativas.
          </p>
          <a href="Reservas.html">Haz una cita aquí</a>
        </div>
      </div>

      <nav className="serviceP">
        <Link to="/Salon" className="boton1">Salón</Link>
      </nav>
    </>
  );
}

export default Banner;
