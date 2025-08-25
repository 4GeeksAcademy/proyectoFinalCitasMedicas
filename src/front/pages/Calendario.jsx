import React from "react";
import { useState } from "react"
import "./Calendario.css";
import { Link } from "react-router-dom";
import { Navbar2 } from "../components/Navbar2";

const Calendario = () => {
  return (
    <div className="calendario-container pt-3">

      {/* Sidebar */}
      < Navbar2 />

      {/* Calendario */}
      <div className="calendario-content">
        <div className="calendar">
          {/* Encabezado */}
          <div className="calendar-header">
            <h5>Calendario</h5>
            <div>
              <select className="form-select d-inline w-auto me-2 rounded-5">
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
              <select className="form-select d-inline w-auto rounded-5">
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
