import React from "react";

const FormularioDeCitas = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
      }}
    >

    <div className="container py-5 min-vh-100 d-flex justify-content-center">
      <div className="col-10 rounded-5 p-3 bg-dark">
        {/* Encabezado */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 text-white">📅 2 Abril</h5>
          <button
            className="btn btn-muted bg-white btn-sm rounded-4"
            data-bs-toggle="modal"
            data-bs-target="#modalCita"
          >
            ➕ Agregar cita
          </button>
        </div>

        {/* Lista de citas */}
        <ul className="list-group rounded-5">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Andrés Beltrán</strong>
              <br />
              <small className="text-muted">Paciente #7.2</small>
            </div>
            <span className="badge bg-dark rounded-pill">1:00 pm</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Camilo Betancurth</strong>
              <br />
              <small className="text-muted">Paciente #7.2</small>
            </div>
            <span className="badge bg-dark rounded-pill">3:00 pm</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Diana Ortiz</strong>
              <br />
              <small className="text-muted">Paciente #7.2</small>
            </div>
            <span className="badge bg-dark rounded-pill">5:00 pm</span>
          </li>
        </ul>
      </div>

      {/* Modal para nueva cita */}
      <div
        className="modal fade"
        id="modalCita"
        tabIndex="-1"
        aria-labelledby="modalCitaLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header">
              <h5 className="modal-title" id="modalCitaLabel">
                ➕ Nueva Cita
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Paciente</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del paciente"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Número de Historia Clínica
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="#7.2"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Hora</label>
                  <input type="time" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Motivo de consulta</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Guardar cita
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormularioDeCitas;
