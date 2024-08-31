import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="cero">
        <h3>HORARIO DE ATENCIÓN</h3>
        <div>
          <p> Lunes-Viernes: 9:00 - 19:00 </p>
          <p>   Sábado: 9:00 - 19:00 </p>
          <p>  Domingo: 10:00 -18:00 </p>
        </div>
      </div>
      <div className="uno">
        <h3>CONTACTO</h3>
        <p>+51 929263816 </p>
        <p> +51 924587165 </p>
        <p>informe@lettysalon&spa.pe</p>
      </div>
      <div className="dos">
        <h3>VISÍTANOS</h3>
        <p>Jirón Nicanor Arteaga 373, Lima, Peru</p>
      </div>
      <div className="tres">
        <h3>SÍGUENOS</h3>
        <a href="https://www.instagram.com/lettysalonspa/" target="_blank">
          <img src="src/imagenes/Instragram.jpg" alt="" />
        </a>
        <a
          href="https://www.facebook.com/lettysalonspa?locale=es_LA"
          target="_blank"
        >
          <img src="src/imagenes/facebook.png" alt="" />
        </a>
      </div>

      <div className="cuatro">
        <a href="Inicio.html">
          {" "}
          <img src="src/imagenes/letty_logo.jpg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
