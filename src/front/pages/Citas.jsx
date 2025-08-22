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

    return(
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
                <div className="bg-dark rounded-5 h-100 p-3 p-md-4">
                    <div className="row g-0 text-white h-50">
                        <div className="col-12">
                            <h1 className="mb-1">Citas</h1>
                            <p className="text-light">{fechaFormateada}</p>
                            <div className="d-flex justify-content-end">
                                <button>Buscar</button>
                                <button>Agregar paciente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}