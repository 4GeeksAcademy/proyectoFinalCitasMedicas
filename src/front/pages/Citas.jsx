import { useEffect, useState } from "react"
import { Navbar2 } from "../components/Navbar2"
import { Link } from "react-router-dom";
import { func } from "prop-types";

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
    const [busqueda, setBusqueda] = useState("")

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

    // contar estados de pacientes
    const contarTotal = pacientes.length;

    const contarActivos = pacientes.filter(paciente =>
        paciente.estado === 'Activo' || paciente.estado === 'activo').length;

    const contarDeAlta = pacientes.filter(paciente =>
        paciente.estado === 'De alta' || paciente.estado === 'de alta').length;

    const contarInactivos = pacientes.filter(paciente =>
        paciente.estado === 'Inactivo' || paciente.estado === 'inactivo').length;

    
        const citasFiltradas = citas.filter(cita => 
            cita.paciente_nombre.includes(busqueda))

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
                                    <div className="form-inline pe-2 d-flex">
                                        <input 
                                                className="form-control mr-sm-2 rounded-start-pill" 
                                                type="search" 
                                                placeholder="Search" 
                                                aria-label="Search"
                                            />
                                        <button 
                                            className="btn btn-outline-light border rounded-end-circle" 
                                            type="submit"
                                            value={busqueda}
                                            onChange={(e) => {citasFiltradas}}
                                        >
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
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
                                    <p className="text-dark ms-3"><strong>{contarTotal}</strong></p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Activos</h4>
                                    <p className="text-dark ms-3"><strong>{contarActivos}</strong></p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">De alta</h4>
                                    <p className="text-dark ms-3"><strong>{contarDeAlta}</strong></p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Inactivos</h4>
                                    <p className="text-dark ms-3"><strong>{contarInactivos}</strong></p>
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
                                        >
                                            <option value=""></option>
                                            <option value="1">Próximas</option>
                                            <option value="2">Últimas</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Fecha</label>
                                    </div>
                                </div>
                                <div className="bg-white rounded-5 p-3 text-dark">
                                    <div className="form-floating ">
                                        <select
                                            className="form-select rounded-5"
                                            id="floatingSelect"
                                            aria-label="Floating label select example"
                                        >
                                            <option value=""></option>
                                            <option value="1">Ascendente</option>
                                            <option value="2">Descendente</option>
                                        </select>
                                        <label htmlFor="floatingSelect">por nombre</label>
                                    </div>
                                </div>
                            </div>

                            {/* lista pacientes */}
                            <div className="d-flex flex-column mx-auto justify-content-start" style={{ maxWidth: "750px", maxHeight: "500px", overflowY: "auto" }}>
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
                                                    {/*Button modal*/}
                                                    <button type="button" className="btn btn-outline-dark border-black rounded-5" data-bs-toggle="modal" data-bs-target={`#modalNota-${cita.id}`}>
                                                        Nota
                                                    </button>

                                                    {/* <!-- Modal --> */}
                                                    <div className="modal fade" id={`modalNota-${cita.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`modalLabel-${cita.id}`} aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered">
                                                            <div className="modal-content rounded-5">
                                                                <div className="modal-header rounded-5">
                                                                    <h1 className="modal-title fs-5" id={`modalLabel-${cita.id}`}>{cita.paciente_nombre} </h1>
                                                                    <button type="button" className="btn-close rounded-5" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p><strong>Motivo de consulta:</strong></p>
                                                                    <p><strong>Nota:</strong></p>
                                                                    <p className="bg-dark p-3 rounded-5 text-white">
                                                                        {cita.nota || 'Sin notas adicionales'}
                                                                    </p>
                                                                    <div className="d-flex justify-content-evenly">
                                                                        <p><i className="fa-regular fa-calendar-days me-2"></i><strong>Fecha:</strong> {cita.fecha}</p>
                                                                        <p><i className="fa-regular fa-clock me-2"></i><strong>Hora:</strong> {cita.hora}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer rounded-5">
                                                                    <Link to={"/editar-cita"}>
                                                                        <button type="button" className="btn btn-dark rounded-5" data-bs-dismiss="modal">Editar</button>
                                                                    </Link>
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