import React from "react";

const PaginaRegistrate = () => {
    return ( 

      <div className=" container bg-light pt-5 pb-5">
        
      <div className="container bg-dark col-5 rounded-5 pt-5 pb-5 mt-5">
        <form className="needs-validation">
          <div className="mb-3">
            
            <input
              type="text"
              className="form-control bg-white"
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
              className="form-control bg-white"
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
              className="form-control bg-white"
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
              className="form-control bg-white"
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
            <button className="btn btn-light rounded-4 " type="submit">
              Registrarse
            </button>
          </div>
        </form>
      </div>
      </div>
      
    );
}
export default PaginaRegistrate;