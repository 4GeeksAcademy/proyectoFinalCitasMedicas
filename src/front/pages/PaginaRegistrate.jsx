import React from "react";

const PaginaRegistrate = () => {
    return (
        <>
        <h1 className=" text-white ms-5 mt-4">Registrate</h1>

      <nav className="navbar navbar-expand-lg bg-white text-black rounded-4 mb-4 mx-4">
        <div className="container-fluid d-flex justify-content-between mx-5">
          <a className="navbar-brand" href="#">Logo</a>
          <a className="navbar-brand " href="#">Slogan</a>
        </div>
      </nav>
      <div className="container rounded-4">
        <form className="needs-validation">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nombre completo"
              required
            />
            <div className="invalid-feedback">Ingresa tu nombre completo.</div>
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Teléfono"
              required
            />
            <div className="invalid-feedback">Ingresa tu número de teléfono.</div>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <div className="invalid-feedback">Ingresa un correo válido.</div>
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Contraseña"
              minLength="8"
              
              required
            />
            <div className="invalid-feedback">
              La contraseña debe tener al menos 8 caracteres.
            </div>
          </div>

          <div className="d-grid mt-4">
            <button className="btn btn-primary btn-lg" type="submit">
              Registrarse
            </button>
          </div>
        </form>
      </div>
      </>
    );
}
export default PaginaRegistrate;