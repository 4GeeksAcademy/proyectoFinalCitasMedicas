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
        > {/*Sidebar*/}
            <Navbar2 />
            <div className="row container bg-light rounded-5 text-black" style={{ width: "1200px", height: "1200px", marginLeft: "10px", marginRight: "10px", marginTop: "25px" }}>
                <div className="text-black" style={{ display: "flex", justifyContent: "start", position: "fixed", marginTop: "25px" }}>
                    <h2><strong>Pacientes</strong></h2>
                    {/*Fecha*/}
                    <button type="button" className="btn btn-dark rounded-5" style={{ marginLeft: "250px", marginTop: "5px", width: "200px" }}>Buscar</button>
                    <button type="button" className="btn btn-dark rounded-5" style={{ marginLeft: "80px", marginTop: "5px", width: "400px" }}>Agregar Paciente</button>
                </div>
                <div class="container overflow-hidden text-center" style={{ marginTop: "150px", }}>
                    <div class="row gx-4">
                        <div class="col-2">
                            <div class="p-3 bg-dark text-white rounded-5" style={{ height: "100px", width: "190px", }}>Totales:</div>
                        </div>
                        <div class="col-2">
                            <div class="p-3 bg-dark text-white  rounded-5" style={{ height: "100px", width: "190px" }}>Activos</div>
                        </div>
                        <div class="col-2">
                            <div class="p-3 bg-dark text-white  rounded-5" style={{ height: "100px", width: "190px" }}>De alta</div>
                        </div>
                        <div class="col">
                            <div class="p-3 bg-dark text-white  rounded-5" style={{ height: "100px", width: "190px" }}>Inactivos</div>
                        </div>
                    </div>
                    <div class="row gx-4" style={{ marginTop: "40px",}}>
                        <div class="col-4">
                            <div class="dropdown">
                                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"300px"}}>
                                    <span><strong>Estado</strong></span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item bg-dark text-white" href="#">Todo</a></li>
                                    <li><a class="dropdown-item bg-dark text-white" href="#">Ninguno</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-4">
                             <div class="dropdown">
                                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"320px", marginLeft:"20px"}}>
                                    <span><strong>Ordenar por nombre</strong></span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item bg-dark text-white" href="#">Ordenar A-Z</a></li>
                                    <li><a class="dropdown-item bg-dark text-white" href="#">Ordenar Z-A</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-3">
                             <div class="dropdown">
                                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"320px"}}>
                                    <span><strong>Ordenar activos/inactivos</strong></span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item bg-dark text-white" href="#">Ordenar Activos</a></li>
                                    <li><a class="dropdown-item bg-dark text-white" href="#">Ordenar Inactivos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row conatiner">

            </div>

        </div>
    )
}

export default Pacientes;