import './seccion_2.css'

function Seccion_2() {
  return (
    <section className="section2">
      <div className="ubica">
        <h2>Encuentranos</h2>
        <img src="src/imagenes/logo_mps.png" alt="" />
      </div>
      <article className="contacto">
        <img src="src/imagenes/Ubicacion.png" />
        <div className="informacion">
          <h2>Ubicación</h2>
          <p>Calle Las Tiendas 261Dpto. 201, Surquillo, Lima, Perú</p>
          <h2>Contactos</h2>
          <p>+51 221-0506</p>
          <p>+51 221-0506</p>
          <p>informes@lettysalon&spa.pe</p>

          <h2>Horarios de atención</h2>
          <p>LUNES - VIERNES : 9:00-19:00</p>
          <p>SÁBADO : 9:00-19:00</p>
          <p>DOMINGO: 9:00-19:00</p>
        </div>
      </article>
    </section>
  );
}

export default Seccion_2;
