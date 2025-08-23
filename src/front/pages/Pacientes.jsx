import React from "react";
import { Navbar2 } from "../components/Navbar2";

const Pacientes = () => {
    return (
        <div
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
                        <div className="rounded-5 text-black h-100 p-4"style={{ backgroundColor: "#eaeaeaff", minHeight: "600px" }}>
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
                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button" data-bs-toggle="dropdown"aria-expanded="false">
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
                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button"data-bs-toggle="dropdown"aria-expanded="false">
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
                                        <button className="btn btn-dark dropdown-toggle w-100 py-3 rounded-5" type="button"data-bs-toggle="dropdown"aria-expanded="false">
                                            <span><strong>Ordenar activos/inactivos</strong></span>
                                        </button>
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar Activos</a></li>
                                            <li><a className="dropdown-item bg-dark text-white" href="#">Ordenar Inactivos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-3 p-3 mt-5 mx-auto" style={{ maxWidth:"750px", maxHeight: "500px", overflowY: "auto", border: "3px solid #ccc" }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Andrés</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Corinto</span>
                                        <button type="button" className="btn btn-danger rounded-5 btn-sm">
                                            Inactivo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Maria</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Cornelio</span>
                                        <button type="button" className="btn btn-danger rounded-5 btn-sm">
                                            Inactivo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Toluco</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Ignacia</span>
                                        <button type="button" className="btn btn-danger rounded-5 btn-sm">
                                            Inactivo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Rodriga</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm">
                                            Activo
                                        </button>
                                    </li>
                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex justify-content-between align-items-center">
                                        <span style={{ fontSize: "20px", height:"60px" }}>Felipa</span>
                                        <button type="button" className="btn btn-success rounded-5 btn-sm">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pacientes;