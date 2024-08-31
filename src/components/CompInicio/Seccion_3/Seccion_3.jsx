import { useForm } from "react-hook-form";
import './seccion_3.css'

function Seccion_3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="sectionI3">
      <div className="tex2">
        <h1>Unete a nuestra comunidad!</h1>
        <p>
          Suscritebe y obten informacion sobre los nuevos productos y servicos
          que agregaremos proximamente.
        </p>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              style={{
                width: "100%",
                padding: "12px",
                border: errors.username ? "1px solid red" : "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
              }}
              {...register("username", {
                required: "El nombre de usuario es obligatorio",
                pattern: {
                  value: /^[a-zA-Z]{5,12}$/,
                  message:
                    "El nombre de usuario debe contener entre 5 y 12 letras",
                },
              })}
            />
            {errors.username && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              placeholder="Correo electrónico"
              style={{
                width: "100%",
                padding: "12px",
                border: errors.email ? "1px solid red" : "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
              }}
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El formato del correo electrónico no es válido",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <input type="submit" value="Suscribirse"/>
        </form>
      </div>
    </section>
  );
}
export default Seccion_3;
