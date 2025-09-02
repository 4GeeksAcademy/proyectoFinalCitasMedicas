import React from "react";




const ModalDeCitas = () => {
  return (
    
    <div
      className="modal fade"
      id="modalDay2"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Citas del día 2</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-group mb-3">
              <li className="list-group-item">Andrés Beltrán 1:00pm</li>
              <li className="list-group-item">Camilo Betancurth 3:00pm</li>
            </ul>

            {/* Formulario para agregar citas (solo visual) */}
            <form>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del paciente"
                />
              </div>
              <div className="mb-2">
                <input type="time" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                Agregar cita
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default ModalDeCitas;