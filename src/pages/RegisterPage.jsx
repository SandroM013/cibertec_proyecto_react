
import '../components/Registro/Registro.css'; 
import { useForm } from 'react-hook-form';

const RegisterPage= () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <div className='formulario-container'>
        <div className="formulario-box">
          <h2 className="form-title">Formulario de Registro</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nombre de usuario"
                className={`form-input ${errors.username ? 'input-error' : 'input-normal'}`}
                {...register('username', {
                  required: 'El nombre de usuario es obligatorio',
                  pattern: {
                    value: /^[a-zA-Z]{5,12}$/,
                    message: 'El nombre de usuario debe contener entre 5 y 12 letras'
                  }
                })}
              />
              {errors.username && <p className="error-message">{errors.username.message}</p>}
            </div>
  
            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                className={`form-input ${errors.password ? 'input-error' : 'input-normal'}`}
                {...register('password', {
                  required: 'La contraseña es obligatoria',
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/,
                    message: 'La contraseña debe tener entre 8 y 20 caracteres, combinando letras y números'
                  }
                })}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
  
            <div className="form-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                className={`form-input ${errors.email ? 'input-error' : 'input-normal'}`}
                {...register('email', {
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'El formato del correo electrónico no es válido'
                  }
                })}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
  
            <div className="form-group">
              <input
                type="text"
                placeholder="Número de teléfono"
                className={`form-input ${errors.phone ? 'input-error' : 'input-normal'}`}
                {...register('phone', {
                  required: 'El número de teléfono es obligatorio',
                  pattern: {
                    value: /^9\d{8}$/,
                    message: 'El número de teléfono debe ser válido, contener 9 dígitos y comenzar con 9'
                  }
                })}
              />
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>
  
            <button type="submit" className="submit-button">
              Aceptar
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default RegisterPage;

