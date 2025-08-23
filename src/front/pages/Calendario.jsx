import React from "react";
import { useState } from "react"
import "./Calendario.css";
import { Link } from "react-router-dom";

const Calendario = () => {
  return (
    <div className="calendario-container">

      {/* Sidebar */}
      <div className="sidebar">
        <Link to="/Landing-n1" className="d-flex align-items-center mb-3 text-white text-decoration-none">
          <div className="ps-5">
            <img
              className="mb-1 mx-auto"
              src="/src/front/assets/img/logo-white.png"
              alt="logomedAgend"
              style={{ width: '120px', height: 'auto' }}
            />
          </div>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="" className="nav-link text-white">
              <i className="fa-solid fa-house me-2"></i>Inicio
            </Link>
          </li>
          <li>
            <Link to="/pacientes" className="nav-link text-white">
              <i className="fa-solid fa-hospital-user me-2"></i>Pacientes
            </Link>
          </li>
          <li>
            <Link to="/citas" className="nav-link text-white">
              <i className="fa-regular fa-clock me-2"></i>Citas
            </Link>
          </li>
          <li>
            <Link to="" className="nav-link text-white">
              <i className="fa-regular fa-calendar-check me-2"></i>Calendario
            </Link>
          </li>
        </ul>
        <span className="fs-5 mt-3 ms-3">Opciones</span>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/agregar-cita" className="nav-link text-white">
              <i className="fa-solid fa-user-check me-2"></i>Agregar cita
            </Link>
          </li>
          <li>
            <Link to="/agregar-paciente" className="nav-link text-white">
              <i className="fa-solid fa-user-plus me-2"></i>Nuevo paciente
            </Link>
          </li>
        </ul>
      </div>

      {/* Calendario */}
      <div className="calendario-content">
        <div className="calendar">
          {/* Encabezado */}
          <div className="calendar-header">
            <h5>Calendario</h5>
            <div>
              <select className="form-select d-inline w-auto me-2">
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
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
          <div className="calendar-days">
            <div>Domingo</div>
            <div>Lunes</div>
            <div>Martes</div>
            <div>Miércoles</div>
            <div>Jueves</div>
            <div>Viernes</div>
            <div>Sábado</div>
          </div>

          {/* Grid de días */}
          <div className="calendar-grid">
            <div className="day"><span className="day-number">1</span></div>
            <div className="day">
              <span className="day-number">2</span>
              <div className="event">Andrés Beltrán 1:00pm</div>
              <div className="event">Camilo Betancurth 3:00pm</div>
            </div>
            <div className="day"><span className="day-number">3</span></div>
            <div className="day"><span className="day-number">4</span></div>
            <div className="day">
              <span className="day-number">5</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day"><span className="day-number">6</span></div>
            <div className="day"><span className="day-number">7</span></div>

            {/* Semana 2 */}
            <div className="day"><span className="day-number">8</span></div>
            <div className="day"><span className="day-number">9</span></div>
            <div className="day">
              <span className="day-number">10</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">11</span>
              <div className="event">Enrique Linares 5:00pm</div>
            </div>
            <div className="day"><span className="day-number">12</span></div>
            <div className="day"><span className="day-number">13</span></div>
            <div className="day"><span className="day-number">14</span></div>
            <div className="day">
              <span className="day-number">15</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">16</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">17</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">18</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">19</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">20</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">21</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">22</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">23</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">24</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">25</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">26</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">27</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">28</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">29</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">30</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">31</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">1</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">2</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">3</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>
            <div className="day">
              <span className="day-number">4</span>
              <div className="event">Diana Ortiz 10:00am</div>
            </div>

            {/* Puedes seguir agregando más días como los anteriores */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Calendario;
