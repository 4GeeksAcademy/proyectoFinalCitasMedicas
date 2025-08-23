import React from "react";
import "./Calendario.css";


const Calendario = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        
      }}
    >
        
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white border-end vh-100 p-3 ">
          <h5 className="mb-4">Menú</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">🏠 Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">👤 Pacientes</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">📑 Citas</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active text-white">📅 Calendario</a>
            </li>
          </ul>
          <hr />
          <h6 className="text-white">Opciones</h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">➕ Agregar cita</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">🆕 Nuevo paciente</a>
            </li>
          </ul>
        </div>

        {/* Calendario */}
        <div className="col-md-10 p-4">
          <div className="calendar bg-dark shadow-sm">
            {/* Encabezado */}
            <div className="calendar-header text-white d-flex justify-content-between align-items-center mb-3">
              <h5>Calendario</h5>
              <div>
                <select className="form-select d-inline w-auto me-2">
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Mrzo</option>
                  <option>Abril</option>
                  <option>Mayo</option>
                  <option>Junio</option>
                  <option>Julio</option>
                  <option>Agosto</option>
                  <option>Septiembre</option>
                  <option>Octubre</option>
                  <option>Noviembre</option>
                  <option>Diciembre</option>
                </select>
                <select className="form-select d-inline w-auto">
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
            </div>

            {/* Días de la semana */}
            <div className="row text-center text-white fw-bold border-bottom pb-2 mb-2 bg-dar">
              <div className="col">Domingo</div>
              <div className="col">Lunes</div>
              <div className="col">Martes</div>
              <div className="col">Miércoles</div>
              <div className="col">Jueves</div>
              <div className="col">Viernes</div>
              <div className="col">Sábado</div>
            </div>

            {/* Semana 1 */}
            <div className="row text-start">
              <div className="col day"><span className="day-number">1</span></div>
              <div className="col day">
                <span className="day-number">2</span>
                <div className="event">Andrés Beltrán 1:00pm</div>
                <div className="event">Camilo Betancurth 3:00pm</div>
              </div>
              <div className="col day"><span className="day-number">3</span></div>
              <div className="col day"><span className="day-number">4</span></div>
              <div className="col day">
                <span className="day-number">5</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day"><span className="day-number">6</span></div>
              <div className="col day"><span className="day-number">7</span></div>
            </div>

            {/* Semana 2 */}
            <div className="row text-start">
              <div className="col day"><span className="day-number">8</span></div>
              <div className="col day"><span className="day-number">9</span></div>
              <div className="col day">
                <span className="day-number">10</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">11 <br /></span>
                <div className="event">Enrique Linares 5:00pm</div>
              </div>
              <div className="col day"><span className="day-number">12</span></div>
              <div className="col day"><span className="day-number">13</span></div>
              <div className="col day"><span className="day-number">14</span></div>
            </div>

            <div className="row text-start">
              <div className="col day">
                <span className="day-number">15</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">16</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">17</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">18</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">19</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">20</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">21</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
            </div>
             <div className="row text-start">
              <div className="col day">
                <span className="day-number">22</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">23</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">24</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">25</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">26</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">27</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">28</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
            </div>
            <div className="row text-start">
              <div className="col day">
                <span className="day-number">29</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">30</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">31</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">1</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">2</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">3</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
              <div className="col day">
                <span className="day-number">4</span>
                <div className="event">Diana Ortiz 10:00am</div>
              </div>
            </div>


            {/* Aquí puedes seguir agregando semanas según el mes */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calendario;
