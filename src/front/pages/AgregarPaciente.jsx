import { Navbar2 } from "../components/Navbar2"
import { Link } from "react-router-dom"
import { useState } from "react"

export const AgregarPaciente = () => {

    const [estadoPaciente, SetEstadoPaciente] = useState('')
    console.log(estadoPaciente)

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
                <div className=" ">
                    {/* Navbar - Sidebar */}
                    <Navbar2 />
                </div>
                {/* Contenido Principal */}
                <div className="col-12 col-md-6 col-lg-8 ps-5">
                    <div className="bg-dark rounded-5 h-100 p-3 p-md-4 
                    ">
                        <div className="row g-0 text-white h-50">
                            {/* Header */}
                            <div className="col-12" >
                                <h2 className="mb-1">Agregar paciente</h2>
                                <p className="text-light"></p>
                            </div>
                            {/* Campos Info*/}
                            <div className="d-flex flex-column align-items-start">
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Nombre</small>
                                        <input type="text" className="form-control rounded-5" placeholder="" aria-label="Amount (to the nearest dollar)" />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Teléfono</small>
                                        <input type="text" className="form-control rounded-5" placeholder="3506598569" aria-label="Amount (to the nearest dollar)" />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Email</small>
                                        <input type="email" className="form-control rounded-5" placeholder="test@example.com" aria-label="Amount (to the nearest dollar)" />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Dirección</small>
                                        <input type="text" className="form-control rounded-5" placeholder="cra 123 #44-15" aria-label="Amount (to the nearest dollar)" />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Ciudad</small>
                                        <input type="text" className="form-control rounded-5" placeholder="Bogotá D.C" aria-label="Amount (to the nearest dollar)" />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <div className="form-floating ">
                                            <select 
                                            className="form-select rounded-5" 
                                            id="floatingSelect" 
                                            aria-label="Floating label select example"
                                            value={estadoPaciente}
                                            onChange={(e)=> SetEstadoPaciente(e.target.value)}
                                            >   
                                                <option value=""></option>
                                                <option value="1">Activo</option>
                                                <option value="2">De alta</option>
                                                <option value="3">Inactivo</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Estado del paciente</label>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <div className="form-floating">
                                            <textarea className="form-control rounded-5" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '50px' }}></textarea>
                                            <label htmlFor="floatingTextarea2">Nota</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end w-100">
                                    <Link to="">
                                        <button type="button" className=" btn btn-outline-secondary btn-lg px-4 rounded-5 mt-3 me-3">Crear</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}