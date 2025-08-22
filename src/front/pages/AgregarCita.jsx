import { useState } from "react"
import { Navbar2 } from "../components/Navbar2"
import { Link } from "react-router-dom";


export const AgregarCita = () => {

    const [pacienteSeleccionado, setPaceinteSelecionado] = useState("");
    console.log(pacienteSeleccionado)

    const [fecha, setFecha] = useState('');
    console.log(fecha)

    const [hora, setHora] = useState('');
    console.log(hora)

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
                                    <div className="form-floating ">
                                        <select 
                                            className="form-select rounded-5" 
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
                                <div className="d-flex justify-content-between align-items-center bg-white rounded-5 p-3 text-dark h-100">
                                    <h5 className="ps-2 my-2 fw-bold">Seleccionar fecha</h5>
                                    <div >
                                        <input 
                                            type="date"
                                            className="form-control rounded-5"
                                            id="fecha"
                                            value={fecha}
                                            onChange={(e)=> setFecha(e.target.value)}
                                        >   
                                            {/* <i className="fa-solid fa-calendar-days fa-2xl me-2 text-center"></i> */}
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="d-flex justify-content-between align-items-center bg-white rounded-5 p-3 text-dark h-100">
                                    <h5 className="ps-2 my-2 fw-bold">Horario</h5>
                                    <div>
                                        <input 
                                        type="time"
                                        className="form-control rounded-5"
                                        id="hora"
                                        value={hora}
                                        onChange={(e)=> setHora(e.target.value)}
                                        min="8:00"
                                        max="18:00"
                                        step="900"

                                        >
                                            {/* <i className="fa-solid fa-clock fa-2xl me-2"></i> */}
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <div className="form-floating ">
                                        <select 
                                        className="form-select rounded-5" 
                                        id="floatingSelect" 
                                        aria-label="Floating label select example"
                                        >   
                                            <option value="">Lugar</option>
                                            <option value="1">Precensial</option>
                                            <option value="2">Virtual</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Modalidad</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <small className="text-muted d-block ps-2">Precio cita</small>
                                    <input type="text" className="form-control rounded-5" placeholder="150 USD" aria-label="Amount (to the nearest dollar)"/>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100"style={{height: '50px'}}>
                                    <div className="form-floating ">
                                        <select 
                                        className="form-select rounded-5" 
                                        id="floatingSelect" 
                                        aria-label="Floating label select example"
                                        >   
                                            <option value="">¿Ya fue cancelado?</option>
                                            <option value="1">Cancelado</option>
                                            <option value="2">Pendiente</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Estado del pago</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <div className="form-floating">
                                        <textarea className="form-control rounded-5" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '50px'}}></textarea>
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