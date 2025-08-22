import { useState } from "react"
import { Navbar2 } from "../components/Navbar2"


export const AgregarCita = () => {

    const [pacienteSeleccionado, setPaceinteSelecionado] = useState("");
    console.log(pacienteSeleccionado)
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
                    <div className="">
                        <Navbar2 />
                    </div>
                </div>
                {/* Contenido Principal */}
                <div className="col-12 col-md-6 col-lg-8 ps-5 ">
                    <div className="bg-dark rounded-5 h-100 p-3 p-md-4">
                        <div className="row g-0 text-white h-50">
                            {/* Header */}
                            <div className="col-12" >
                                <h2 className="mb-1">Agregar cita</h2>
                                <p className="text-light"></p>                                
                            </div>

                             {/* Campos Info*/}
                        <div className="d-flex flex-column align-items-start">       
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <div className="form-floating">
                                        <select 
                                        className="form-select" 
                                        id="floatingSelect" 
                                        aria-label="Floating label select example"
                                        value={pacienteSeleccionado}
                                        onChange={(e)=> setPaceinteSelecionado(e.target.value)}
                                        >   
                                            <option value="">Paciente</option>
                                            <option value="1">Samuel</option>
                                            <option value="2">Sebastian</option>
                                            <option value="3">Leonardo</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Selecione un paciente</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <h5 className="mb-0 fw-bold">Seleccionar fecha</h5>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <h5 className="mb-0 fw-bold">Horario</h5>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <small className="text-muted d-block">Modalidad</small>
                                    <h5 className="mb-0 fw-bold">1 cita</h5>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <small className="text-muted d-block">Precio cita</small>
                                    <input type="text" className="form-control rounded-5" placeholder="150 USD" aria-label="Amount (to the nearest dollar)"/>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100"style={{height: '50px'}}>
                                    <small className="text-muted d-block">Estado de pago</small>
                                    <h5 className="mb-0 fw-bold">1 cita</h5>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '50px'}}></textarea>
                                        <label htmlFor="floatingTextarea2">Nota</label>
                                    </div>
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