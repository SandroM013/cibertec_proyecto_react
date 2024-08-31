import { useForm } from "react-hook-form";
import './seccion_1.css'

function Seccion_1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar el envío de los datos
  };
  return (
    <section className="section1">
      <div className="contenedor">
        <h2 id="reser">Reservar Cita</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            {errors.nombre && (
              <p style={{ color: "red" }}>{errors.nombre.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El formato del correo electrónico no es válido",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="servicio">Servicio:</label>
            <select
              id="servicio"
              {...register("servicio", { required: "Seleccione un servicio" })}
            >
              <option value="">Seleccione un servicio</option>
              <option value="Tratamientos y alisados">
                Tratamientos y alisados
              </option>
              <option value="Maquillaje">Maquillaje</option>
              <option value="Peinados y cortes">Peinados y cortes</option>
              <option value="Uñas">Uñas</option>
              <option value="Color">Color</option>
              <option value="Depilaciones">Depilaciones</option>
              <option value="Masajes">Masajes</option>
              <option value="Exfoliaciones">Exfoliaciones</option>
              <option value="Productos">Productos</option>
            </select>
            {errors.servicio && (
              <p style={{ color: "red" }}>{errors.servicio.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="fecha">Fecha y Hora:</label>
            <input
              type="datetime-local"
              id="fecha"
              {...register("fecha", {
                required: "Seleccione una fecha y hora",
              })}
            />
            {errors.fecha && (
              <p style={{ color: "red" }}>{errors.fecha.message}</p>
            )}
          </div>

          <input type="submit" value="Reservar" />

          <div id="mensaje">
                Gracias por Reservar una cita con nostros, enviaremos todos los detalles mediante el email que nos proporcionaste. Te esperamos! </div>
        </form>
        
      </div>
    </section>
  );
}

export default Seccion_1;
