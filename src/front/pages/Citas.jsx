import { useEffect, useState } from "react"
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

    const [citas, setCitas] = useState([])
    const [pacientes, setPacientes] = useState([])

    // fetch get citas
    async function obtenerCitas() {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cita`)

            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`)
            }

            const data = await response.json();
            setCitas(data);
            return (data);



        } catch (error) {
            console.error(`Error fetching data: `, error);
            throw error;
        }
    }
    // fetch get pacientes
    async function obtenerPacientes() {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paciente`);

            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`)
            }
            const data = await response.json();
            setPacientes(data);
            return data;


        } catch (error) {
            console.error(`Error fetching data: `, error);
            throw error;
        }
    }

   

    useEffect(() => {
        obtenerCitas();
        obtenerPacientes();
    }, [])

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
                <div className="col-12 col-md-6 col-lg-8 ps-5">
                    <div className="bg-dark rounded-5 h-100 p-3 p-md-4 ">
                        <div className="row g-0 text-white h-25 ">
                            <div className=" d-flex  justify-content-between">
                                <h1 className="ms-2">Citas</h1>
                                <div className="d-flex">
                                    <div className="form-inline pe-2">
                                        <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                                    </div>
                                    <div>
                                        <Link to="/agregar-paciente">
                                            <button type="button" className="btn btn-outline-light rounded-5">
                                                <i className="fa-solid fa-user-plus me-2"></i>Agregar paciente
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <p className="text-light">{fechaFormateada}</p>

                            {/* Estados de pacientes */}
                            
                            <div className="d-flex justify-content-between text-start">

                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Total</h4>
                                    <p className="text-dark ms-3"></p>
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
                            <div className="d-flex justify-content-around my-3 h-50">

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
                                        <label htmlFor="floatingSelect">por nombre</label>
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
                                        <label htmlFor="floatingSelect">ascendente</label>
                                    </div>
                                </div>
                            </div>

                            {/* lista pacientes */}
                            <div className="d-flex flex-column mx-auto justify-content-start" style={{ maxWidth: "750px", maxHeight: "500px", overflowY: "auto", border: "3px solid #ccc" }}>
                                <div className="col-12 mt-1 px-3 " >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        {citas.map((cita) => (

                                            <div key={cita.id} className="mt-2  border-bottom d-flex justify-content-between">
                                                <div>
                                                    <p value={cita.id} className="">{cita.paciente_nombre}</p>
                                                    <div className="d-flex  text-muted d-block ">
                                                        <small><i className="fa-regular fa-calendar-days me-2"></i>{cita.fecha}</small>
                                                        <small> <i className="fa-regular fa-clock ms-2"></i> {cita.hora}</small>
                                                    </div>
                                                    <div className="d-flex text-muted d-block ">
                                                        <small><i className="fa-solid fa-location-dot me-2"></i>{cita.modalidad}</small>
                                                        <small><i className="fa-solid fa-sack-dollar mx-2"></i>${cita.precio}</small>
                                                    </div>
                                                </div>
                                                <div>
                                                    {/* <!-- Button trigger modal --> */}
                                                    <button type="button" className="btn btn-outline-dark border-black rounded-5" data-bs-toggle="modal" data-bs-target={`#modalNota-${cita.id}`}>
                                                        Nota
                                                    </button>

                                                    {/* <!-- Modal --> */}
                                                    <div className="modal fade" id={`modalNota-${cita.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`modalLabel-${cita.id}`} aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content rounded-5">
                                                                <div className="modal-header rounded-5">
                                                                    <h1 className="modal-title fs-5" id={`modalLabel-${cita.id}`}>Motivo de consulta - {cita.paciente_nombre} </h1>
                                                                    <button type="button" className="btn-close rounded-5" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p><strong>Paciente:</strong> {cita.paciente_nombre}</p>
                                                                    <p><strong>Fecha:</strong> {cita.fecha} - {cita.hora}</p>
                                                                    <p><strong>Nota:</strong></p>
                                                                    <p className="bg-dark p-3 rounded-5 text-white">
                                                                        {cita.nota || 'Sin notas adicionales'}
                                                                    </p>
                                                                </div>
                                                                <div className="modal-footer rounded-5">
                                                                    <button type="button" className="btn btn-outline-dark rounded-5" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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