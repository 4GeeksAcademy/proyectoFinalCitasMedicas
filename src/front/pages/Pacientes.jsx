import React from "react";
import { Navbar2 } from "../components/Navbar2";

const Pacientes = () => {
    return (
        <div className="pt-3"
            style={{
                backgroundColor: 'black',
                margin: 0,
                padding: 0,
                minHeight: '100vh',
                display: "flex",
            }}
        >
            {/* Sidebar */}
            <Navbar2 />
            <div className="container-fluid p-0">
                <div className="row g-3 p-3">
                    <div className="col-12 col-xl-6">
                        <div className="rounded-5 text-black h-100 p-4" style={{ backgroundColor: "#eaeaeaff", minHeight: "600px" }}>
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                                <h2><strong>Pacientes</strong></h2>
                                <div className="d-flex flex-column flex-sm-row gap-2 mt-3 mt-md-0">
                                    <button type="button" className="btn btn-dark rounded-5 px-4 py-2">
                                        Buscar
                                    </button>
                                    <button type="button" className="btn btn-dark rounded-5 px-4 py-2">
                                        Agregar Paciente
                                    </button>
                                </div>
                            </div>
                            <div className="row g-3 mb-4">
                                <div className="col-6 col-lg-3">
                                    <div className="p-3 bg-dark text-white rounded-5 text-center h-100">
                                        <div style={{ fontSize: "16px" }}>Totales:</div>
                                        <div className="fs-4 fw-bold mt-2">8</div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="p-3 bg-dark text-white rounded-5 text-center h-100">
                                        <div style={{ fontSize: "16px" }}>Activos</div>
                                        <div className="fs-4 fw-bold mt-2">5</div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="p-3 bg-dark text-white rounded-5 text-center h-100">
                                        <div style={{ fontSize: "16px" }}>De alta</div>
                                        <div className="fs-4 fw-bold mt-2">0</div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="p-3 bg-dark text-white rounded-5 text-center h-100">
                                        <div style={{ fontSize: "16px" }}>Inactivos</div>
                                        <div className="fs-4 fw-bold mt-2">3</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3 mb-4 mt-5">
                                <div className="col-12 col-lg-4">
                                    <div className="dropdown w-100">
                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span><strong>Estado</strong></span>
                                        </button>
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Todos</a></li>
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Activos</a></li>
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Inactivos</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="dropdown w-100">
                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span><strong>Ordenar por nombre</strong></span>
                                        </button>
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar A-Z</a></li>
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar Z-A</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="dropdown w-100">
                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span><strong>Ordenar activos/inactivos</strong></span>
                                        </button>
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar Activos</a></li>
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar Inactivos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-3 p-3 mt-5 mx-auto" style={{ maxWidth: "750px", maxHeight: "500px", overflowY: "auto", border: "3px solid #ccc" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Andrés</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Corinto</span>
                                        <button type="button" className="btn btn-danger rounded-5 btn-sm align-self-start">
                                            Inactivo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Maria</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Cornelio</span>
                                        <button type="button" className="btn btn-danger rounded-5 btn-sm align-self-start">
                                            Inactivo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Toluco</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Ignacia</span>
                                        <button type="button" className="btn btn-danger rounded-5 btn-sm align-self-start">
                                            Inactivo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Rodriga</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                        <span style={{ fontSize: "20px", height: "60px" }}>Felipa</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                                            Activo
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="rounded-5 h-100 p-4" style={{ backgroundColor: "#eaeaeaff", minHeight: "600px" }}>
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                                <h2 className="text-black"><strong>Perfil del paciente</strong></h2>
                                <div className="d-flex flex-column flex-sm-row gap-2 mt-3 mt-md-0">
                                    <button type="button" className="btn btn-dark rounded-5 px-4 py-2">
                                        Editar Datos
                                    </button>
                                    <button type="button" className="btn btn-dark rounded-5 px-4 py-2">
                                        Agregar Cita
                                    </button>
                                </div>
                            </div>
                            <div className="col-6 col-lg-10">
                                <div className="p-3 bg-dark text-white rounded-5 text-center h-100">
                                    <div style={{ fontSize: "28px", textAlign: "start" }}> <strong> Andrés Beltrán</strong></div>
                                    <div style={{ fontSize: "16px", textAlign: "start" }}>Masculino</div>
                                    <div style={{ fontSize: "16px", textAlign: "start" }}>Dia-Mes-Año</div>
                                </div>
                                <div>
                                    <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" style={{ color: "black" }}>
                                                Datos
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" style={{ color: "black" }}>
                                                Citas
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content mt-5" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel">
                                            <h4>Datos del paciente</h4>
                                            <div className="p-3 mt-2">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                        <span style={{ fontSize: "20px", height: "40px" }}>Estado del paciente: </span>
                                                        <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                                                            Activo
                                                        </button>
                                                    </li>
                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                        <span style={{ fontSize: "20px", height: "40px" }}>Precio por cita: </span>
                                                        <span>$150.00</span>
                                                    </li>
                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                        <span style={{ fontSize: "20px", height: "30px" }}>Contacto: </span>
                                                        <span>Móvl: 55-5555-5555</span>
                                                        <span>Correo Electrónico: Example@mail.com</span>
                                                    </li>
                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                        <span style={{ fontSize: "20px", height: "30px" }}>Dirección: </span>
                                                        <span>Av de los chistosos #45. Col, los payasos. CP: 10000</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel">
                                            <h3>Contenido de Pacientes</h3>
                                            <div className="row g-1 mb-4 mt-2">
                                                <div className="col-12 col-lg-4">
                                                    <div className="dropdown w-100">
                                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "50px", }}>
                                                            <span><strong>Mes</strong></span>
                                                        </button>
                                                        <ul className="dropdown-menu w-100">
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Enero</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Febrero</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Marzo</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Abril</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Mayo</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Junio</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Julio</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Agosto</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Septiembre</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Octubre</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Noviembre</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Diciembre</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-4">
                                                    <div className="dropdown w-100">
                                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "50px", }}>
                                                            <span><strong>Todas las citas</strong></span>
                                                        </button>
                                                        <ul className="dropdown-menu w-100">
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar por fecha</a></li>
                                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar por actividad</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="p-3 bg-dark text-white rounded-5 text-center mt-5 h-100">
                                                    <div style={{ fontSize: "16px", textAlign: "start" }}>Dia-Mes-Año</div>
                                                    <div style={{ fontSize: "28px", textAlign: "start" }}> <strong> Andrés Beltrán</strong></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Pacientes;