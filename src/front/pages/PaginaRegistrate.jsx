import React from "react";

const PaginaRegistrate = () => {
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

                required
              />
              <div className="invalid-feedback">
                La contraseña debe tener al menos 8 caracteres.
              </div>
            </div>

            <div className="d-grid mt-4">
              <button className="btn btn-outline-dark rounded-5" type="submit">
                Regístrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}
export default PaginaRegistrate;