import { useState } from "react"
import { Navbar2 } from "../components/Navbar2"
import { Link } from "react-router-dom";

export const Citas = () => {

    const fecha = new Date()
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div
            style={{
                backgroundColor: 'black',
                margin: 0,
                paddingTop: '15px',
                minHeight: '100vh'
            }}
        >
            <div className="d-flex">
                {/* Navbar - Sidebar */}
                <Navbar2 />
                <div className="col-12 col-md-6 col-lg-8 ps-5 ">
                    <div className="bg-dark rounded-5 h-100 p-3 p-md-4 ">
                        <div className="row g-0 text-white h-25 ">
                            <div className=" d-flex  justify-content-between">
                                <h1 className="ms-2">Citas</h1>
                                <div className="d-flex">
                                    <div className="form-inline pe-2">
                                        <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search" aria-label="Search"/>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-outline-secondary rounded-5">Agregar paciente</button>
                                    </div>
                                </div>
                            </div>
                            <p className="text-light">{fechaFormateada}</p>  

                            {/* Estados de pacientes */}
                            <div className="d-flex justify-content-between text-start">
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Total</h4>
                                    <p className="text-dark ms-3">13</p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Activos</h4>
                                    <p className="text-dark ms-3">13</p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">De alta</h4>
                                    <p className="text-dark ms-3">13</p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Inactivos</h4>
                                    <p className="text-dark ms-3">13</p>
                                </div>
                            </div>  

                            {/* Filtros */}
                            <div className="d-flex justify-content-around mt-3 h-50">
                                
                                <div className="bg-white rounded-5 p-3 text-dark">
                                    <div className="form-floating ">
                                        <select 
                                        className="form-select rounded-5" 
                                        id="floatingSelect" 
                                        aria-label="Floating label select example"
                                        // value={estadoPaciente}
                                        // onChange={(e)=> SetEstadoPaciente(e.target.value)}
                                        >   
                                            <option value=""></option>
                                            <option value="1">Activo</option>
                                            <option value="2">De alta</option>
                                            <option value="3">Inactivo</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Estado</label>
                                    </div>
                                </div>
                                <div className="bg-white rounded-5 p-3 text-dark">
                                    <div className="form-floating ">
                                        <select 
                                        className="form-select rounded-5" 
                                        id="floatingSelect" 
                                        aria-label="Floating label select example"
                                        // value={estadoPaciente}
                                        // onChange={(e)=> SetEstadoPaciente(e.target.value)}
                                        >   
                                            <option value=""></option>
                                            <option value="1">Activo</option>
                                            <option value="2">De alta</option>
                                            <option value="3">Inactivo</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Orden</label>
                                    </div>
                                </div>
                                <div className="bg-white rounded-5 p-3 text-dark">
                                    <div className="form-floating">
                                        <select 
                                        className="form-select rounded-5" 
                                        id="floatingSelect" 
                                        aria-label="Floating label select example"
                                        // value={estadoPaciente}
                                        // onChange={(e)=> SetEstadoPaciente(e.target.value)}
                                        >   
                                            <option value=""></option>
                                            <option value="1">Activo</option>
                                            <option value="2">De alta</option>
                                            <option value="3">Inactivo</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Orden</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}