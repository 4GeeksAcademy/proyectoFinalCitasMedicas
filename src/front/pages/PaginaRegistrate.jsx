import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, Link } from "react-router-dom";

const PaginaRegistrate = () => {

  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();

  const [datosUsuarios, setDatosUsuarios] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  })

  const handleInputs = (e) => {
    const key = e.target.name;
    setDatosUsuarios(
      {
        ...datosUsuarios,
        [key]: e.target.value
      });
  }

  const registrar = async (e) => {
    e.preventDefault();

    console.log('Datos del usuario:', datosUsuarios);

    if (!datosUsuarios.name || !datosUsuarios.phone || !datosUsuarios.email || !datosUsuarios.password) {
      alert("Todos los campos son requeridos")
      return;
    }

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosUsuarios)
    });

    if (response.ok) {
      const data = await response.json();

      dispatch({
        type: 'set_register',
        payload: datosUsuarios
      });

      localStorage.setItem('nuevoUsuarioName', datosUsuarios.name);

      alert('Registro exitoso. Ahora puedes iniciar sesión.')
      navigate('/sing-in')
    } else {
      const error = await response.json();
      alert(error.error || 'Error en el registro')
    }

  }


  return (
    <div
      style={{
        backgroundColor: 'black',
        margin: 0,
        padding: "150px",
        minHeight: '100vh'
      }}
    >

      <div className=" container bg-dark py-5 mt-4 rounded-5">

        <div className="container bg-light col-5 rounded-5 pt-5 pb-5 mt-5 mb-5">
          <div className="text-black text-center d-flex flex-column mb-4">
            <img className="mx-auto" src="/src/front/assets/img/logo-black.png" alt="logomedAgend" style={{ width: '50px', height: 'auto' }} />
            <h1 className="mt-3">Regístrate</h1>
          </div>
          <form className="needs-validation">
            <div className="mb-3 d-flex">
              <span className="col-4 input-group-text bg-dark text-white rounded-start-pill" id="addon-wrapping">Nombre</span>
              <input
                type="text"
                className="form-control bg-white rounded-end-pill"
                id="name"
                name="name"
                placeholder="Usuario"
                value={datosUsuarios.name}
                onChange={handleInputs}
                required
              />
              <div className="invalid-feedback">Ingresa tu nombre completo.</div>
            </div>

            <div className="mb-3 d-flex">
              <span className="col-4 input-group-text bg-dark text-white rounded-start-pill" id="addon-wrapping">Teléfono</span>
              <input
                type="tel"
                className="form-control bg-white rounded-end-pill"
                id="phone"
                name="phone"
                placeholder="555-5555-5555"
                value={datosUsuarios.phone}
                onChange={handleInputs}
                required
              />
              <div className="invalid-feedback">Ingresa tu número de teléfono.</div>
            </div>

            <div className="mb-3 d-flex">
              <span className="col-4 input-group-text bg-dark text-white rounded-start-pill" id="addon-wrapping">Email</span>
              <input
                type="email"
                className="form-control bg-white rounded-end-pill"
                id="email"
                name="email"
                placeholder="example@mail.com"
                value={datosUsuarios.email}
                onChange={handleInputs}
                required
              />
              <div className="invalid-feedback">Ingresa un correo válido.</div>
            </div>

            <div className="mb-3 d-flex">
              <span className="col-4 input-group-text bg-dark text-white rounded-start-pill" id="addon-wrapping">Password</span>
              <input
                type="password"
                className="form-control bg-white rounded-end-pill"
                id="password"
                name="password"
                placeholder="Contraseña"
                minLength="8"
                autoComplete="current-password"
                value={datosUsuarios.password}
                onChange={handleInputs}
                required
              />
              <div className="invalid-feedback">
                La contraseña debe tener al menos 8 caracteres.
              </div>
            </div>

            <div className="d-grid mt-4">
              <button className="btn btn-outline-dark rounded-5"
                type="submit"
                onClick={registrar}
              >
                Regístrarse
              </button>
            </div>
          </form>
          <Link to="/sing-in"> </Link>
        </div>
        <div className="d-flex justify-content-center text-white col-12 mb-2 fs-5">
          <p className="me-2 ">¿Ya tienes cuenta?</p>
          <Link to="/sing-in" className="text-decoration-none text-black">
            <p className="bg-white rounded-5 px-2">Inicia sesión</p>
          </Link>
        </div>
      </div>
    </div>

  );
}
export default PaginaRegistrate;